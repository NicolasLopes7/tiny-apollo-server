const { books } = require('./database');

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;
