let Author = require('../models/author');

// get_author_list = async () => {
//   let authors_list = [];
//   return authors_list.map(function(author) {
//     return author.name + " : " + author.lifespan;
//   });
// };

// exports.show_all_authors = function(res) {
//   get_author_list()
//     .then((data) => res.send(data))
//     .catch((_) => res.send('No authors found'));
// }

function get_author_list () {
  return Author.find({}, 'first_name family_name date_of_birth date_of_death')
}

exports.show_all_authors = async () => {
  try {
    let authors = await get_author_list().exec();
    return authors.map(function(a) {
      return a.first_name + ', '+ a.family_name+' : ' + a.lifespan ;
    });
  }
  catch(err) {
    console.log('No authors found.' + err);
  }
}
