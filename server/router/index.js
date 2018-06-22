const { detailsCtrl } = require('../controllers/detailsCtrl');
const { hoursCtrl } = require('../controllers/hoursCtrl');
const { miscCtrl } = require('../controllers/miscCtrl');
const { resCtrl } = require('../controllers/resCtrl');
const router = require('express').Router();

router.route('/details')
  .get(detailsCtrl.get)
  .post(detailsCtrl.post)
  .put(detailsCtrl.put);

router.route('/hours')
  .get(hoursCtrl.get)
  .post(hoursCtrl.post);

router.route('/misc')
  .get(miscCtrl.get)
  .post(miscCtrl.post);

router.route('/restaurants')
  .get(resCtrl.get)
  .post(resCtrl.post);

module.exports.router = router;
