const express = require('express');
const router = express.Router();

const ExerciceController = require('../controllers/ExerciceController');

router.get('/', ExerciceController.get);
router.get('/:_id', ExerciceController.getById);
router.post('/', ExerciceController.create);
router.put('/:_id', ExerciceController.update);
router.delete('/:_id', ExerciceController.delete);

module.exports = router;
