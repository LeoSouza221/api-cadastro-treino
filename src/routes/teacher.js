const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/TeacherController');

router.get('/', TeacherController.get);
router.get('/:_id', TeacherController.getById);
router.get('/:_id/students', TeacherController.getByIdStudents);
router.post('/', TeacherController.create);
router.put('/:_id/students/:_idStudent', TeacherController.updateStudents);
router.delete('/:_id', TeacherController.delete);
router.delete('/:_id/students/:_idStudent', TeacherController.deleteStudents);

module.exports = router;
