import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
			required: true,
		},
		desc: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
