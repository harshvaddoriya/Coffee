import express from "express";
import { sendMessage } from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);

// router.get('/', (req, res) => {
//     resizeBy.render('index');
// })

export default router;