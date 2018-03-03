import React from 'react';
import './BookItem.css';
import heartIconRed from './heart-icon-red.png';
import heartIconBlack from './heart-icon-black.png';

export default class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeIcon: heartIconBlack,
    };
  }

  componentWillMount() {
    const { props: { likeStatus } } = this;
    console.log(likeStatus);
    if (likeStatus !== 'LIKE') {
      this.setState({
        likeIcon: heartIconBlack,
      });
    } else {
      this.setState({
        likeIcon: heartIconRed,
      });
    }
  }

  changeLikeStatus(id) {
    if (this.state.likeIcon === heartIconRed) {
      fetch(`/dislike/${id}`).then(() => this.setState({ likeIcon: heartIconBlack })).catch(err => console.log(err));
    } else {
      fetch(`/like/${id}`).then(() => this.setState({ likeIcon: heartIconRed })).catch(err => console.log(err));
    }
  }
  render() {
    return (
      <div className="BookItem">
        <img className="article-img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" alt="Product" />
        <div className="BookItem-desc">
          <div className="BookItem-Name">{this.props.name}</div>
          <div className="BookItem-Rating">{this.props.rating}</div>
          <div className="BookItem-Author">{this.props.author}</div>
          <div
            className="BookItem-Status"
            onClick={() => this.changeLikeStatus(this.props.id)}
            onKeyPress={() => {}}
            role="button"
            tabIndex="0"
          >
            <img src={this.state.likeIcon} alt="Like-Dislike" className="heartIcon" />
          </div>
        </div>
      </div>
    );
  }
}
