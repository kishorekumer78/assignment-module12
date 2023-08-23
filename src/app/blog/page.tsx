import { getBlogs } from '@/services/blogSvc';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
	const posts = await getBlogs();
	return (
		<div>
			<section>
				<h2>Blog Lists</h2>
				<div className="flex justify-between flex-wrap gap-20">
					{posts &&
						posts.map((item: any, i: number) => (
							<div key={i} className="card w-80 bg-base-100 shadow-xl p-5">
								<figure>
									<Image src={`${item.img}`} width={250} height={300} alt="Shoes" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">{item.title}</h2>
									<p className="text-justify">{item.short}...</p>
									<div className="card-actions justify-end">
										<Link className="btn btn-primary" href={`/blog/${item.id}`}>
											Read More
										</Link>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
}
