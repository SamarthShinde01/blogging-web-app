import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, searchParams) => {
	const searchParamsObj = Object.fromEntries([...searchParams]);

	// console.log(searchParamsObj);

	const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
		params: { page: pageParam, limit: 2, searchParamsObj },
	});
	return res.data;
};

const PostsList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ["posts"],
		queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) =>
			lastPage.hasMore ? pages.length + 1 : undefined,
	});

	// console.log(data);

	if (isFetching) return <Loading />;

	if (error) return "An error has occured: " + error.message;

	const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

	return (
		<InfiniteScroll
			dataLength={allPosts.length}
			next={fetchNextPage}
			hasMore={!!hasNextPage}
			loader={<Loading />}
			endMessage={
				<p className="my-3 flex items-center justify-center">
					<b className="text-slate-500">All posts loaded!</b>
				</p>
			}
		>
			{allPosts.map((post) => (
				<PostListItem key={post._id} post={post} />
			))}
		</InfiniteScroll>
	);
};

export default PostsList;
