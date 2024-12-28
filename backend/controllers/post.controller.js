import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 2;

	const query = {};

	const cat = req.query.cat;
	const author = req.query.author;
	const searchQuery = req.query.search;
	const sortQuery = req.query.sort;
	const featured = req.query.featured;

	if (cat) {
		query.category = cat;
	}

	if (searchQuery) {
		query.title = { $regex: searchQuery, $options: "i" };
	}

	if (author) {
		const user = await User.findOne({ username: author }).select("_id");

		if (!user) {
			return res.status(404).json("No post found!");
		}

		query.user = user._id;
	}

	let sortObj = { createdAt: -1 };

	if (sortQuery) {
		switch (sortQuery) {
			case "newest":
				sortObj = { createdAt: -1 };
				break;
			case "oldest":
				sortObj = { createdAt: 1 };
				break;
			case "popular":
				sortObj = { visit: -1 };
				break;
			case "trending":
				sortObj = { visit: -1 };
				query.createdAt = {
					$gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
				};
				break;

			default:
				break;
		}
	}

	const posts = await Post.find(query)
		.populate("user", "username")
		.sort(sortObj)
		.limit(limit)
		.skip((page - 1) * limit);

	const totalPosts = await Post.countDocuments();
	const hasMore = page * limit < totalPosts;

	res.status(200).json({ posts, hasMore });
};

export const getPost = async (req, res) => {
	const post = await Post.findOne({ slug: req.params.slug }).populate(
		"user",
		"username img"
	);
	res.status(200).json(post);
};

export const createPost = async (req, res) => {
	const clerkUserId = req.auth.userId;

	if (!clerkUserId) {
		return res.status(401).json({ message: "Not authenticated" });
	}

	const user = await User.findOne({ clerkUserId });
	if (!user) {
		return res.status(401).json({ message: "User not found" });
	}

	let slug = req.body.title.replace(/ /g, "-").toLowerCase();

	let baseSlug = slug;
	let existingPost = await Post.findOne({ slug });

	let counter = 2;

	while (existingPost) {
		slug = `${baseSlug}-${counter}`;
		existingPost = await Post.findOne({ slug });
		counter++;
	}

	const newPost = new Post({ user: user._id, slug, ...req.body });

	const post = await newPost.save();
	res.status(200).json({ post, message: "Post created successfully" });
};

export const deletePost = async (req, res) => {
	const clerkUserId = req.auth.userId;

	if (!clerkUserId) {
		return res.status(401).json({ message: "Not authenticated" });
	}

	const role = req.auth.sessionClaims?.metadata?.role || "user";

	if (role === "admin") {
		await Post.findByIdAndDelete(req.params.id);
		return res.status(200).json({ message: "Post has been deleted" });
	}

	const user = await User.findOne({ clerkUserId });
	if (!user) {
		return res.status(401).json({ message: "User not found" });
	}

	const deletedPost = await Post.findByIdAndDelete({
		_id: req.params.id,
		user: user._id,
	});

	if (!deletedPost) {
		return res.status(404).json({ message: "You can delete only your posts!" });
	}

	return res.status(200).json({ message: "Post has been deleted" });
};

export const featurePost = async (req, res) => {
	const postId = req.body.postId;

	const clerkUserId = req.auth.userId;

	if (!clerkUserId) {
		return res.status(401).json({ message: "Not authenticated" });
	}

	const role = req.auth.sessionClaims?.metadata?.role || "user";

	if (role !== "admin") {
		return res.status(403).json({ message: "You cannot feature posts!" });
	}

	const post = await Post.findById(postId);

	if (!post) {
		return res.status(404).json({ message: "Post not found!" });
	}

	const isFeatured = post.isFeatured;

	const updatedPost = await Post.findByIdAndUpdate(
		postId,
		{
			isFeatured: !isFeatured,
		},
		{ new: true }
	);

	return res.status(200).json(updatedPost);
};

const imagekit = new ImageKit({
	urlEndpoint: process.env.IK_URL_ENDPOINT,
	publicKey: process.env.IK_PUBLIC_KEY,
	privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
	const result = imagekit.getAuthenticationParameters();
	res.send(result);
};
