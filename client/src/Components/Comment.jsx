import Image from "./Image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
	return (
		<div className="p-4 bg-slate-50 rounded-xl ">
			<div className="flex items-center gap-4">
				<Image
					src={comment?.user.img || "profile.jpeg"}
					className="w-10 h-10 rounded-full object-cover"
				/>
				<span className="font-medium">{comment?.user.username}</span>
				<span className="text-sm text-gray-500">
					{format(comment?.createdAt)}
				</span>
			</div>
			<div className="mt-4">
				<p>{comment?.desc}</p>
			</div>
			w
		</div>
	);
};

export default Comment;
