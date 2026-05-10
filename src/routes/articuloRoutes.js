import { Router } from "express";
import { getCandidate,postMovies,postUser,login,editMovie,deleteMovie,getStudents,createCandidate } from "../controller/estudianteController";

const router = Router()


router.get('/getCandidate',getCandidate);
router.get('/getStudents',getStudents);

// router.post('/createUser',postUser);
router.post('/createMovie',postMovies);
router.post('/createCandidate',createCandidate)

router.put("/editMovie",editMovie);

router.delete("/deleteMovie",deleteMovie);

router.post('/login',login);

export  default router