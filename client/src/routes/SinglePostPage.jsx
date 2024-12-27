import { Link, useParams } from "react-router-dom";
import Image from "../Components/Image";
import PostMenuActions from "../Components/PostMenuActions";
import Search from "../Components/Search";
import Comments from "../Components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import { format } from "timeago.js";
import he from "he";

const fetchPost = async (slug) => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
	return res.data;
};

const SinglePostPage = () => {
	const { slug } = useParams();

	const { isPending, data, error } = useQuery({
		queryKey: ["post", slug],
		queryFn: () => fetchPost(slug),
	});

	if (isPending) return <Loading />;
	if (error) return <p>Something went wrong: ${error.message}</p>;
	if (!data) return <p>Post not found!</p>;

	return (
		<div className="flex flex-col gap-8">
			{/* detail */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
						{data?.title}
					</h1>
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>Written by</span>
						<Link className="text-blue-800">{data?.user.username}</Link>
						<span>on</span>
						<Link className="text-blue-800">{data?.category}</Link>
						<span>{format(data?.createdAt)}</span>
					</div>

					<p className="text-gray-500 font-medium">{data?.desc}</p>
				</div>

				<div className="hidden lg:block w-2/5">
					{data?.img ? (
						<Image src={data?.img} w="600" className="rounded-2xl" />
					) : (
						<></>
					)}
				</div>
			</div>

			{/* content */}
			<div className="flex flex-col md:flex-row gap-12">
				{/* text */}
				<div className="lg:text-lg flex flex-col gap-6 text-justify">
					{data?.content && he.decode(data.content)}
				</div>

				{/* menu */}
				<div className="px-4 h-max sticky top-8">
					<h1 className="mb-4 text-sm font-medium">Author</h1>

					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-8 ">
							{data?.user.img && (
								<Image
									src={data?.user.img ? data?.user.img : "userImg.jpeg"}
									className="w-12 h-12 rounded-full object-cover"
									w="48"
									h="48"
								/>
							)}

							<Link className="text-blue-800">{data?.user.username}</Link>
						</div>
						<p className="text-sm text-gray-500">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="flex gap-2">
							<Link>
								<Image src="facebook.svg" />
							</Link>
							<Link>
								<Image src="instagram.svg" />
							</Link>
						</div>
					</div>
					<PostMenuActions post={data} />

					<h1 className="mt-8 mb-4 text-sm font-medium">Cagtegories</h1>
					<div className="flex flex-col gap-2 text-sm">
						<Link className="underline">All</Link>
						<Link className="underline" to="/">
							Web Design
						</Link>
						<Link className="underline" to="/">
							Development
						</Link>
						<Link className="underline" to="/">
							Databases
						</Link>
						<Link className="underline" to="/">
							Search Engines
						</Link>
						<Link className="underline" to="/">
							Marketing
						</Link>
					</div>

					<h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
					<Search />
				</div>
			</div>

			<Comments postId={data?._id} />
		</div>
	);
};

export default SinglePostPage;
