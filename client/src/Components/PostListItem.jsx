import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-8">
			<div className="md:hidden xl:block">
				<Image src="postImg.jpeg" className="rounded-2xl object-cover" />
			</div>

			<div className="flex flex-col gap-4">
				<Link to="/test" className="text-4xl font-semibold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</Link>
				<div className="flex items-center gap-2 text-gray-400 text-sm">
					<span>Written by</span>
					<Link className="text-blue-800">John Doe</Link>
					<span>on</span>
					<Link className="text-blue-800">Web Design</Link>
					<span>2 days ago</span>
				</div>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
					corporis dolor in rerum ea iure voluptates dignissimos reiciendis ab
					aliquam enim nisi, a sed aut deleniti doloribus vel repellat cumque!
				</p>
				<Link to="/test" className="underline text-blue-800 text-sm">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;