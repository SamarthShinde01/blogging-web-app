import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

const fetchComments = async (postId) => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/comments/${postId}`
	);
	return res.data;
};

const Comments = ({ postId }) => {
	const { user } = useUser();
	const { getToken } = useAuth();

	const { isPending, data, error } = useQuery({
		queryKey: ["comment", postId],
		queryFn: () => fetchComments(postId),
	});

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (newComment) => {
			const token = await getToken();
			return axios.post(
				`${import.meta.env.VITE_API_URL}/comments/${postId}`,
				newComment,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comment", postId] });
		},
		onError: (error) => {
			toast.error(error.response.data || "failed creating comment!");
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const data = { desc: formData.get("desc") };

		mutation.mutate(data);
	};

	return (
		<div className="flex flex-col gap-8 lg:w-3/5 mb-12">
			<h1 className="text-xl text-gray-500 underline">Comments</h1>
			<form
				onSubmit={handleSubmit}
				className="flex items-center justify-between gap-8 w-full"
			>
				<textarea
					required
					name="desc"
					placeholder="Write a comment..."
					className="w-full p-4 rounded-xl"
				/>
				<button
					type="submit"
					className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl"
				>
					Send
				</button>
			</form>

			{isPending ? (
				"Loading..."
			) : error ? (
				"Error loading comments!"
			) : (
				<>
					{mutation.isPending && (
						<Comment
							comment={{
								desc: `${mutation.variables.desc} (Sending...)`,
								createdAt: new Date(),
								user: {
									username: user.username,
									img: user.imageUrl,
								},
							}}
						/>
					)}

					{data?.map((comment) => (
						<Comment key={comment._id} comment={comment} postId={postId} />
					))}
				</>
			)}
		</div>
	);
};

export default Comments;
