let BookInstance = require('../models/bookinstance');

function get_books () {
  return BookInstance.find({}, 'book status')
    .sort({title : 1})  
    .populate('book');
}

exports.show_all_books_status = async () => {
  try {
    let booksIns = await get_books().exec();
    return booksIns.filter(function(b) {
      return b.status === "Available";
    }).map(function(filteredBook) {
      return Book(filteredBook.book).title + ' : ' + filteredBook.status;
    });
  }
  catch(err) {
    console.log('No books found' + err);
  }
}