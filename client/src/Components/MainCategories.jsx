import { Link } from "react-router-dom";

const MainCategories = () => {
	return (
		<div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
			{/* links*/}
			<div className="flex-1 flex items-center justify-between flex-wrap">
				<Link
					to="/posts"
					className="bg-blue-800 text-white rounded-full px-4 py-2 "
				>
					All Posts
				</Link>
				<Link
					to="/posts?cat=web-design"
					className="hover:bg-blue-50 rounded-full px-4 py-2 "
				>
					Web Design
				</Link>
				<Link
					to="/posts?cat=development"
					className="hover:bg-blue-50 rounded-full px-4 py-2 "
				>
					Development
				</Link>
				<Link
					to="/posts?cat=databases"
					className="hover:bg-blue-50 rounded-full px-4 py-2 "
				>
					Databases
				</Link>
				<Link
					to="/posts?cat=seo"
					className="hover:bg-blue-50 rounded-full px-4 py-2 "
				>
					Search Engine
				</Link>
				<Link
					to="/posts?cat=marketing"
					className="hover:bg-blue-50 rounded-full px-4 py-2 "
				>
					Marketing
				</Link>
			</div>

			<span className="text-xl font-medium">|</span>

			{/* search */}
			<div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
				<svg
					className="w-4 h-4 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>

				<input
					type="text"
					placeholder="search a post..."
					className="bg-transparent focus:outline-none"
				/>
			</div>
		</div>
	);
};

export default MainCategories;
