const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.get);
router.get('/:_id', StudentController.getById);
router.post('/', StudentController.create);
router.delete('/:_id', StudentController.delete);

module.exports = router;
