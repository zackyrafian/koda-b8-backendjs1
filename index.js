import express from "express"
import router from "./src/routes/index.js";
import { urlencoded } from "express";
import path from 'path';

const PORT = 8080;
const app = express()
app.use(express.urlencoded())
app.use('/uploads', express.static('uploads'));
// app.all('{*all}')

// app.get("/", (req, res) => { 
//   res.json({ 
//     "message": "a"
//   })
// })
app.use(router)

app.listen(PORT, () => { 
  console.log(`Server running port ${PORT}`)
})