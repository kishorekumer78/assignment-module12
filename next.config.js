/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'build',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tecdn.b-cdn.net'
			},
			{
				protocol: 'https',
				hostname: 'roar.media'
			}
		]
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					}
				]
			}
		];
	}
};

module.exports = nextConfig;
