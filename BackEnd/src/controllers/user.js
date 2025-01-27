const { Router } = require("express");
const userModel = require("../models/userModel");
const { upload } = require("../../multer");
const bcrypt = require("bcrypt");
const path = require("path");
const ErrorHandler = require("../utils/ErrorHandler"); 

const router = Router();

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const userEmail = await userModel.findOne({ email });
        if (userEmail) {
            return next(new ErrorHandler("User already exists", 400));
        }

        if (!req.file) {
            return next(new ErrorHandler("No file uploaded", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join("uploads", filename); 
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
            avatar: fileUrl,
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            },
        });
    } catch (error) {
        next(error); 
    }
});

module.exports = router;
