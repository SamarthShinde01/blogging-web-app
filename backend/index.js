import express from "express";
import "dotenv/config";
import cors from "cors";

/* Routes */
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import webHookRoutes from "./routes/webhook.route.js";

import connectDB from "./lib/connectDB.js";
import errorHandler from "./lib/errorHandler.js";
import { clerkMiddleware } from "@clerk/express";

const PORT = process.env.PORT;
const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhook", webHookRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comment", commentRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
	res.send("server is live");
});

app.listen(PORT, () => {
	connectDB();
	console.log("server is running on PORT: ", PORT);
});
