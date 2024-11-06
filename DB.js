import mongoose, { connect } from "mongoose";

const uri = "mongodb://localhost:27017/my_db";

async function connectDB() {
	console.log("Connecting to database....");

	try {
		await mongoose.connect(uri);
		console.log("Database connected");
	} catch (err) {
		console.log("Failed to connect to database: ", err.message);
	}
}

export default connectDB;
