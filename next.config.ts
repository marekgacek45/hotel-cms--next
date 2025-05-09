import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},

	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'hotel-admin.marekgacekdev.net.pl',
			},
		],
	},
}

export default nextConfig