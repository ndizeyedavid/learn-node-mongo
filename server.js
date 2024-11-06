import express from "express";
import connectDB from "./DB.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
	console.log("Server is running..");
});

app.use("/api", userRouter);

connectDB();
