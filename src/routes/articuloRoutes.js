import { Router } from "express";
import { createStudent, deleteStudent, getStudents, updateStudent } from "../controller/estudianteController";

const router = Router()


router.get('/getStudents',  getStudents);
router.post('/createStudent',createStudent);
router.put('/updateStudent', updateStudent);
router.delete('/deleteStudent',deleteStudent)

export  default router