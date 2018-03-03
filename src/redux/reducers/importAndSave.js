const bookStore = [];

export default (prevState = bookStore, action) => {
  switch (action.type) {
    case 'IMPORT': {
      const booksArr = [];
      action.payload.forEach((elem =>
        booksArr.push({
          Name: elem.Name,
          Author: elem.Author,
          id: elem.id,
          Rating: elem.Rating,
          LikeStatus: elem.LikeStatus,
        })
      ));
      prevState = booksArr;
      return booksArr;
    }
    default:
      return prevState;
  }
};
