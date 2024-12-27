import { useAuth, useUser } from "@clerk/clerk-react";
import Loading from "../Components/Loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image as ImageIcon, Loader2, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UploadFile from "../Components/UploadFile";
import Image from "../Components/Image";

const Write = () => {
	const [value, setValue] = useState("");
	const [cover, setCover] = useState("");
	const [img, setImg] = useState("");
	const [video, setVideo] = useState("");
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		img && setValue((prev) => prev + `<p><image src="${img.url}" /></p>`);
	}, [img]);

	useEffect(() => {
		video &&
			setValue(
				(prev) => prev + `<p><iframe class="ql-video" src="${video.url}" /></p>`
			);
	}, [video]);

	const { isLoaded, isSignedIn } = useUser();
	const { getToken } = useAuth();

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async (newPost) => {
			const token = await getToken();
			return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		},
		onSuccess: (res) => {
			toast.success(res.data.message);
			navigate(`/${res.data.post.slug}`);
		},
	});

	if (!isLoaded) return <Loading />;
	if (!isSignedIn) return <p>You should logged in</p>;

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const data = {
			title: formData.get("title"),
			category: formData.get("category"),
			desc: formData.get("desc"),
			content: value,
			img: cover?.filePath || "",
		};

		mutation.mutate(data);
	};

	return (
		<div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
			<h1 className="text-xl font-light">Create a New Post</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
				<UploadFile type="image" setProgress={setProgress} setData={setCover}>
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"
						>
							Add a cover image
						</button>

						{cover?.fileType && (
							<Image
								src={cover.name}
								w={30}
								className="rounded-sm opacity-50 object-cover mt-1"
							/>
						)}
					</div>
				</UploadFile>

				<input
					type="text"
					placeholder="My Awesome Story"
					className="text-4xl font-semibold bg-transparent outline-none"
					name="title"
					required
				/>
				<div className="flex items-center gap-4">
					<label htmlFor="" className="text-sm">
						Choose a category:
					</label>
					<select
						name="category"
						id=""
						className="p-2 rounded-xl bg-white shadow-md"
					>
						<option value="general">General</option>
						<option value="web-design">Web Design</option>
						<option value="development">Development</option>
						<option value="databases">Databases</option>
						<option value="seo">Seach Engine</option>
						<option value="marketing">Marketing</option>
					</select>
				</div>

				<textarea
					name="desc"
					placeholder="A Short Description"
					className="p-4 rounded-xl bg-white shadow-md"
				/>

				<div className="flex flex-1">
					<div className="flex flex-col gap-2 mr-2">
						<UploadFile type="image" setProgress={setProgress} setData={setImg}>
							<div className="flex items-center gap-2">
								<ImageIcon width={20} height={20} className="cursor-pointer" />
							</div>
						</UploadFile>

						<UploadFile
							type="video"
							setProgress={setProgress}
							setData={setVideo}
						>
							<div className="flex items-center gap-2">
								<Video width={20} height={20} className="cursor-pointer" />
							</div>
						</UploadFile>
					</div>
					<ReactQuill
						theme="snow"
						value={value}
						onChange={setValue}
						className="flex-1 rounded-xl bg-white shadow-md"
						readOnly={progress > 0 && progress < 100}
					/>
				</div>

				<button
					disabled={mutation.isPending || (progress > 0 && progress < 100)}
					type="submit"
					className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
				>
					{mutation.isPending ? (
						<div className="flex items-center justify-center gap-2">
							<Loader2 className="w-6 h-6 animate-spin text-primary-700" />
							<span>Sending</span>
						</div>
					) : (
						"Send"
					)}
				</button>

				{"Progress: " + progress}
				{mutation.error && <span>{mutation.error.message}</span>}
			</form>
		</div>
	);
};

export default Write;
