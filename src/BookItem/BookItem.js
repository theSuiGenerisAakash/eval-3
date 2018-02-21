import React from 'react';
import './BookItem.css';

export default class BookItem extends React.Component {
  render() {
    return (
      <div className="BookItem">
        <img className="article-img" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" alt="Product" />
        <div className="BookItem-desc">
          <div className="BookItem-Name">{this.props.name}</div>
          <div className="BookItem-Rating">{this.props.rating}</div>
          <div className="BookItem-Author">{this.props.author}</div>
        </div>
      </div>
    );
  }
}
