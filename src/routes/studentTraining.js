const express = require('express');
const router = express.Router();

const StudentTrainingController = require('../controllers/StudentTrainingController');

router.get('/', StudentTrainingController.get);
router.get('/:_id', StudentTrainingController.getById);
router.post('/', StudentTrainingController.create);
router.put('/:_id/training/:_idTraining', StudentTrainingController.update);
router.put('/:_id', StudentTrainingController.updateTraining);
router.delete('/:_id', StudentTrainingController.delete);
router.delete('/:_id/training/:_idTraining', StudentTrainingController.deleteTraining);

module.exports = router;
