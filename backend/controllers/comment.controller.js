import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
	const comments = await Comment.find({ post: req.params.postId })
		.populate("user", "username img")
		.sort({ createdAt: -1 });

	return res.status(200).json(comments);
};

export const addComment = async (req, res) => {
	const clerkUserId = req.auth.userId;
	const postId = req.params.postId;

	if (!clerkUserId) {
		return res.status(401).json({ message: "Not authenticated!" });
	}

	const user = await User.findOne({ clerkUserId });

	const newComment = new Comment({
		...req.body,
		user: user._id,
		post: postId,
	});

	const savedComment = await newComment.save();

	return res.status(200).json(savedComment);
};

export const deleteComment = async (req, res) => {
	const clerkUserId = req.auth.userId;
	const id = req.params.id;

	if (!clerkUserId) {
		return res.status(401).json({ message: "Not authenticated!" });
	}

	const role = req.auth.sessionClaims?.metaData?.role || "user";

	if (role === "admin") {
		await Comment.findByIdAndDelete(id);
		return res.status(200).json({ message: "Comment has been deleted" });
	}

	const user = await User.findOne({ clerkUserId });

	const deletedComment = await Comment.findOneAndDelete({
		_id: id,
		user: user._id,
	});

	if (!deletedComment) {
		return res
			.status(403)
			.json({ message: "You can delete only your comments!" });
	}

	return res.status(200).json({ message: "Comment deleted!" });
};
