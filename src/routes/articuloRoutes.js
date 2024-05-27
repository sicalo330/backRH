import { Router } from "express";
import { createStudent, getStudents } from "../controller/estudianteController";

const router = Router()

router.get('/getStudents', getStudents);
router.post('/createStudent', createStudent);

export  default router