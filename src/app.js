import express from "express";
import cors from 'cors'
import router from "./routes/articuloRoutes";

const app = express()

app.set('port', 4041)

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(router)

export default app