import { cookies } from 'next/headers';
export default function AboutPage() {
	const theme = cookies().get('theme') || '';

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Cookie</h1>
					<p className="py-6">{JSON.stringify(theme)}</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
}
