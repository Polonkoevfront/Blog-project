import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
// import "dotenv";
import { loginValidation, postCreateValidation, registerValidation } from "./validations/auth.js";
import { UserController, PostController } from "./controllers/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js"

mongoose.connect("mongodb+srv://use:12345@cluster0.rqqbya7.mongodb.net/blogts?appName=Cluster0")
.then(() => {
    console.log("Database is connected");
})
.catch((err) => {
    console.log(err, "Database is not connect");
});

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, "uploads");
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const PORT = 4444;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post("/auth/login", loginValidation, handleValidationErrors, UserController.login);
app.post("/auth/register", registerValidation, handleValidationErrors, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.get("/tags", PostController.getLastTags);

app.get("/posts", PostController.getAll);
app.get("/posts/tags", PostController.getLastTags);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", checkAuth, postCreateValidation, handleValidationErrors, PostController.update);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }        
    console.log("Server is running in port", + PORT);
});