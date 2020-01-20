
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.get);
router.get('/:_id', UserController.getById);
router.post('/', UserController.create);
router.put('/:_id', UserController.update);
router.delete('/:_id', UserController.delete);

module.exports = router;