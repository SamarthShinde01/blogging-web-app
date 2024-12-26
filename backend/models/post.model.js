import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
		},
		category: {
			type: String,
			default: "generalp",
		},
		content: {
			type: String,
			required: true,
		},
		isFeatured: {
			type: Boolean,
			default: false,
		},
		visit: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
