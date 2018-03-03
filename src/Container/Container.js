import React from 'react';
import { connect } from 'react-redux';
import './Container.css';
import Import from '../Import/Import';
import { dispatchImport } from '../redux/actions';
import Section from '../Section/Section';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      layout: 1,
    }
  }

  importBooks = () => {
    fetch('/store').then(() => {
      fetch('/read').then(result =>
        result.json()).then((resultJSON) => {
        this.props.dispatchImportFunc(resultJSON.result);
        console.log(resultJSON);
      }).then(() => {
        console.log(this.props.allBooks);
        this.setState({layout:1});
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  populateBooks = () => {
    const bookAuthors = [];
    this.props.allBooks.forEach((book) => {
      if(bookAuthors.indexOf(book.Author) === -1) {
        bookAuthors.push(book.Author);
      }
    });
    const sections = [];
    bookAuthors.forEach(author => {
      const forOneAuthor = [];
      this.props.allBooks.forEach(book => {
        if(book.Author === author) {
          forOneAuthor.push(book);
        }
      });
      sections.push(<div className="SectionBlock" key={author}><div className="SectionAuthor">{author}</div><Section books={forOneAuthor} /></div>);
    });
    return sections;
  }
  render() {
    if(this.state.layout === 0) {
      return (
        <div className="Container">
          <div className="TitleBlock">
          <div className="Container-title">The <span class="BookText">Book</span> Shelf <div className="BrownLine" /></div>
        </div>
          <Import importBooks={this.importBooks} />
        </div>
      );
    }
      return (
        <div className="Container">
            <div className="TitleBlock">
              <div className="Container-title">The <span className="BookText">Book</span> Shelf <div className="BrownLine" /></div>
            </div>
            {this.populateBooks()}
        </div>
        );
  }

  componentDidMount(){
    fetch('/read').then(result => {
      return result.json();
    }).then((resultJSON) => {
      if(resultJSON.result.length === 0) {
        this.setState({layout: 0});
      }  else {
          this.props.dispatchImportFunc(resultJSON.result);
          this.setState({layout: 1});
      }
    }).catch( err => console.log(err));
  }
}

const mapStateToProps = state => ({
  allBooks: state.importAndSave,
});

const mapDispatchToProps = dispatch => ({
  dispatchImportFunc: resultArr => dispatch(dispatchImport(resultArr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
