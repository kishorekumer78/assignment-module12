import { getBlogById } from '@/services/blogSvc';
import Image from 'next/image';

export default async function SingleBlogPage({ params }: any) {
	const post = await getBlogById(params.id);

	return (
		<>
			<h2>SingleBlogPage</h2>
			<div className="bg-base-200">
				<div className=" flex align-top">
					<Image
						src={`${post?.postDetails?.img}`}
						width={300}
						height={300}
						className="rounded-lg shadow-2xl"
						alt={''}
					/>
					<div>
						<h1 className="text-5xl font-bold">{post?.postDetails.title}</h1>
						<p className="py-6">{post?.postDetails.content}</p>
						<button className="btn btn-primary">Like</button>
					</div>
				</div>
			</div>
		</>
	);
}
