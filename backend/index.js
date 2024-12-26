import express from "express";
import "dotenv/config";

/* Routes */
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comment", commentRoutes);

app.listen(PORT, () => {
	connectDB();
	console.log("server is running on PORT: ", PORT);
});
