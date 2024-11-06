import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
		min: 5,
		max: 160,
	},
	location: {
		type: String,
		required: true,
	},
});

const Users = mongoose.model("users", userSchema);

export default Users;
