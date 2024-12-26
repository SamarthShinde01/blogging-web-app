import { Link } from "react-router-dom";
import Image from "../Components/Image";
import PostMenuActions from "../Components/PostMenuActions";
import Search from "../Components/Search";

const SinglePostPage = () => {
	return (
		<div className="flex flex-col gap-8">
			{/* detail */}
			<div className="flex gap-8">
				<div className="lg:w-3/5 flex flex-col gap-8">
					<h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit unde
						esse.
					</h1>
					<div className="flex items-center gap-2 text-gray-400 text-sm">
						<span>Written by</span>
						<Link className="text-blue-800">John Doe</Link>
						<span>on</span>
						<Link className="text-blue-800">Web Design</Link>
						<span>2 days ago</span>
					</div>

					<p className="text-gray-500 font-medium">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
						enim provident impedit saepe accusantium alias molestiae deserunt
						asperiores blanditiis molestias deleniti quod, pariatur excepturi
						quia hic harum qui maxime praesentium.
					</p>
				</div>

				<div className="hidden lg:block w-2/5">
					<Image src="postImg.jpeg" w="600" className="rounded-2xl" />
				</div>
			</div>

			{/* content */}
			<div className="flex flex-col md:flex-row gap-12">
				{/* text */}
				<div className="lg:text-lg flex flex-col gap-6 text-justify">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						impedit ut quas ratione aliquam saepe qui cumque, aperiam adipisci
						perferendis, dolorem deserunt minima nisi sapiente totam? Doloremque
						facere dolore exercitationem. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Molestias consectetur nesciunt eos quo
						alias itaque corrupti, repellat enim! Similique praesentium
						veritatis perferendis illo, nesciunt adipisci voluptas recusandae
						minima temporibus quo? Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Vitae voluptatibus odit nam officia. Ipsum
						molestiae accusamus unde repellat, ea similique assumenda molestias
						impedit exercitationem saepe sint aspernatur sequi consectetur
						alias. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Asperiores tempora alias natus incidunt, aspernatur vitae suscipit.
						Architecto molestias aperiam dolorem ab eum corrupti illum,
						quisquam, aspernatur delectus, quia aliquam omnis. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Necessitatibus asperiores
						eaque minima vel eum voluptatum molestias delectus ratione, officiis
						nihil eveniet aliquam, in enim quo qui temporibus. Accusamus, porro.
						Voluptas?
					</p>
				</div>

				{/* menu */}
				<div className="px-4 h-max sticky top-8">
					<h1 className="mb-4 text-sm font-medium">Author</h1>

					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-8 ">
							<Image
								src="userImg.jpeg"
								className="w-12 h-12 rounded-full object-cover"
								w="48"
								h="48"
							/>
							<Link className="text-blue-800">John Doe</Link>
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
					<PostMenuActions />

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
		</div>
	);
};

export default SinglePostPage;
