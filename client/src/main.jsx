import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import HomePage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/Loginpage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/posts",
		element: <PostListPage />,
	},
	{
		path: "/:slug",
		element: <SinglePostPage />,
	},
	{
		path: "/write",
		element: <Write />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
