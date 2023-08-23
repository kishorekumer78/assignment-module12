export async function getBlogs() {
	const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

	if (!res.ok) {
		throw new Error('Error fetching posts');
	}
	return await res.json();
}

export async function getBlogById(id: number) {
	const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
	if (!res.ok) {
		throw new Error('Error fetching posts');
	}
	return await res.json();
}
