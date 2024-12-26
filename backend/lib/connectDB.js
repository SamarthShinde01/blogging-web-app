import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL || "");
		console.log("MONGODB CONNECTED...");
	} catch (error) {
		console.error(error);
	}
};

export default connectDB;
