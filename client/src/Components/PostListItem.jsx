import { Link, useParams } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
	return (
		<div className="flex flex-col xl:flex-row gap-8 mb-12">
			<div className="md:hidden xl:block xl:w-1/3">
				{post?.img ? (
					<Link to={`/${post?.slug}`}>
						<Image
							src={post?.img}
							className="rounded-2xl object-cover cursor-pointer"
							w="735"
						/>
					</Link>
				) : (
					<Image
						src="postImg.jpeg"
						className="rounded-2xl object-cover"
						w="735"
					/>
				)}
			</div>

			<div className="flex flex-col gap-4 xl:w-2/3">
				<Link to={`/${post?.slug}`} className="text-4xl font-semibold ">
					{post?.title.length > 75
						? `${post?.title.slice(0, 75)} ...`
						: post?.title}
				</Link>
				<div className="flex items-center gap-2 text-gray-400 text-sm">
					<span>Written by</span>
					<Link className="text-blue-800">{post?.user?.username}</Link>
					<span>on</span>
					<Link className="text-blue-800">{post?.category}</Link>
					<span>{format(post?.createdAt)}</span>
				</div>
				<p className="text-justify">
					{post?.desc.length > 300
						? `${post?.desc.slice(0, 300)} ...`
						: post?.desc}
				</p>
				<Link to={`/${post?.slug}`} className="underline text-blue-800 text-sm">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostListItem;
