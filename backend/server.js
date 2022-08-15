import router from "./routes/lider.routes.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)



app.listen(8080,  () => {
    console.log("http://localhost:8080");
})