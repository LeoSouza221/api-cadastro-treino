const express = require('express');
const router = express.Router();

const TrainingController = require('../controllers/TrainingController');

router.get('/', TrainingController.get);
router.get('/:_id', TrainingController.getById);
router.post('/', TrainingController.create);
router.put('/:_id/exercice/:_idExercice', TrainingController.update);
router.put('/:_id', TrainingController.updateExercice);
router.delete('/:_id', TrainingController.delete);
router.delete('/:_id/exercice/:_idExercice', TrainingController.deleteExercice);

module.exports = router;
