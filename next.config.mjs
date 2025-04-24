/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mighty.tools',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
