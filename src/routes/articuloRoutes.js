import { Router } from "express";
import { getCandidate,postMovies,postUser,login,updateStudent,deleteCandidate,getStudents,createCandidate } from "../controller/estudianteController";

const router = Router()


router.get('/getCandidate',getCandidate);
router.get('/getStudents',getStudents);

// router.post('/createUser',postUser);
router.post('/createMovie',postMovies);
router.post('/createCandidate',createCandidate)

router.put("/updateStudent",updateStudent);

router.delete("/deleteCandidate",deleteCandidate);

router.post('/login',login);

export  default router