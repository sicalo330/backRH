import { Router } from "express";
import { getmovies,postMovies,postUser,login,editMovie,deleteMovie } from "../controller/estudianteController";

const router = Router()


router.get('/getMovies',getmovies);

router.post('/createUser',postUser);
router.post('/createMovie',postMovies);

router.put("/editMovie",editMovie);

router.delete("/deleteMovie",deleteMovie);

router.post('/login',login);

export  default router