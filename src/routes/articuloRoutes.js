import { Router } from "express";
import { conexion, estudiantes } from "../controller/estudianteController";

const router = Router()

router.get('/conexion', conexion)
router.get('/estudiantes', estudiantes);

export  default router