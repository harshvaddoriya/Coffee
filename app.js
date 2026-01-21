import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
//import cors from "cors"

const app = express();

dotenv.config({ path: "./.env" });

//frontend connection
// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     method: ["POST"],
//     credentials: true,
// })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use("/api/v1/message", messageRouter);
app.get('/', (req, res) => {
    res.render('index');
})
dbConnection();

export default app;