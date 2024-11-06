import Users from "../models/usersModel.js";

const createUserController = async (req, res) => {
	const data = req.body;
	try {
		const new_user = await Users.create(data);
		res.status(201).json({ success: "New user created", user_details: data });
	} catch (err) {
		res
			.status(500)
			.json({ error: "Failed to create new user", message: err.message });
	}
};

const viewUserController = async (req, res) => {
	try {
		const users = await Users.find();
		res
			.status(200)
			.json({ message: `${users.length} User(s) fetched`, users: users });
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch users", error: err.message });
	}
};

const updateUserController = async (req, res) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const edit_user = await Users.findByIdAndUpdate(id, data, { new: true });
		res
			.status(200)
			.json({ message: "User edited successfully", details: edit_user });
	} catch (err) {
		res
			.status(500)
			.json({ message: "failed to edit user", error: err.message });
	}
};

const deleteUserController = async (req, res) => {
	const { id } = req.params;
	try {
		const delete_user = await Users.findByIdAndDelete(id);
		res.status(200).json({ message: "User deleted successfully" });
	} catch (err) {
		res
			.status(500)
			.json({ message: "failed to delete user", error: err.message });
	}
};
export {
	createUserController,
	viewUserController,
	updateUserController,
	deleteUserController,
};
