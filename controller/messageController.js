import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {


    try {
        const { name, email, number, message } = req.body;

        if (!name || !email || !number || !message) {
            return res.status(400).json({
                success: false,
                message: "All Fields are required!",
            });
        }
        await Message.create({ name, email, number, message });

        res.redirect("/");
        // res.status(200).json({
        //     success: true,
        //     message: "Message Sent Successfully!",
        // });

    } catch (error) {
        console.log("Error details:", error);

        if (error.name == "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " "
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " "
            }
            if (error.errors.number) {
                errorMessage += error.errors.number.message + " "
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " "
            }
            return res.status(200).json({
                success: false,
                message: errorMessage,
            })
        }

        return res.status(500).json({
            success: false,
            message: "Unknown Error",
        });
    }
};