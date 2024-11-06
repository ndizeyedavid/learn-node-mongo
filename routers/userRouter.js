import express from "express";
import {
	createUserController,
	viewUserController,
	updateUserController,
	deleteUserController,
} from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
	res.status(200).json({ message: "Ready to access users" });
});

userRouter.post("/user/add", createUserController);
userRouter.get("/users", viewUserController);
userRouter.put("/user/update/:id", updateUserController);
userRouter.delete("/user/delete/:id", deleteUserController);

export default userRouter;
