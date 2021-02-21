// complete and fix the dbhelpers
const db = require('./index.js');


var dbhelpers = {
  getProductsHelper: (callback) => {
    var queryString = `SELECT * FROM products`
    db.query(queryString, (err, results) => {
      callback(err, results);
    })
  },

  postProductsHelper: (req, callback) => {
    var queryString = `INSERT INTO products (item, min_cost, curr_bid, ends_in, image) VALUES ('${req.body.item}', '${req.body.min_cost}', ${req.body.curr_bid}, ${req.body.ends_in}, '${req.body.image}')`
    db.query(queryString, (err, results) => {
      callback(err, results);
    })
  },

  updateProductHelper: (req, callback) => {
    var queryString = `UPDATE products SET curr_bid=${req.body.curr_bid} WHERE id=${req.params._id}`
    db.query(queryString, (err, results) => {
      callback(err, results);
    })
  },

  deleteProductHelper: (req, callback) => {
    var queryString = `DELETE FROM products WHERE id=${req.params._id}`
    db.query(queryString, (err, results) => {
      callback(err, results);
    })
  }
}

module.exports = dbhelpers;