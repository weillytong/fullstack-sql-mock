// Controller here
// complete building out the controller
const dbhelpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    dbhelpers.getProductsHelper((err, results) => {
      if (err) res.status(400).json(err);
      res.status(200).json(results);
    })
  },
  post: (req, res) => {
    dbhelpers.postProductsHelper(req, (err, results) => {
      if (err) res.status(400).json(err);
      res.status(200).json('successfully posted new item');
    })
  },
  patch: (req, res) => {
    dbhelpers.updateProductHelper(req, (err, results) => {
      if (err) res.status(400).json(err);
      res.status(200).json('successfully updated current bid');
    })
  },
  delete: (req, res) => {
    dbhelpers.deleteProductHelper(req, (err, results) => {
      if (err) res.status(400).json(err);
      res.status(200).json('successfully deleted item');
    })
  }
}

module.exports = controller