// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  .post(controller.post)

router
  .route('/products/:_id')
  .patch(controller.patch)
  .delete(controller.delete)

module.exports = router