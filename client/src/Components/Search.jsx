import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			const query = e.target.value;
			if (location.pathname === "/posts") {
				setSearchParams({ ...Object.fromEntries(searchParams), search: query });
			} else {
				navigate(`/posts?search=${query}`);
			}
		}
	};

	return (
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
				onKeyDown={handleKeyPress}
			/>
		</div>
	);
};

export default Search;
