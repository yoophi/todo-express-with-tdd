var express = require('express');
var router = express.Router();

/* GET todo listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET todo detail. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  res.send(`todo ${id}`);
});

module.exports = router;
