import React from 'react';
import { connect } from 'react-redux';
import './Container.css';
import Import from '../Import/Import';
import dispatchImport from '../redux/actions';

class Container extends React.Component {

  importBooks = () => {
    fetch('/store').then(() => {
      fetch('/read').then(result =>
        result.json()).then((resultJSON) => {
        this.props.dispatchImportFunc(resultJSON.result);
      }).then(() => console.log(this.props.allBooks)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Container">
        <div className="Container-title">The Book Shelf</div>
        <Import importBooks={this.importBooks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allBooks: state.importAndSave,
});

const mapDispatchToProps = dispatch => ({
  dispatchImportFunc: resultArr => dispatch(dispatchImport(resultArr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
