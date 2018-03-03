import React from 'react';
import './Section.css';
import BookItem from '../BookItem/BookItem';

export default class Section extends React.Component {
  getBooks = () => {
    const books = [];
    this.props.books.forEach(book =>{
      console.log(book);
      books.push(<BookItem name={book.Name} rating={book.Rating} author={book.Author} key={book.id} id={book.id} likeStatus={book.LikeStatus}/>);
    });
    return books;
  }
  render() {
    return (
      <div className="Section">
        {this.getBooks()}
      </div>
    );
  }
}
