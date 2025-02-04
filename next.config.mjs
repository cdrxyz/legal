/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    output: 'export',
    images: {
        unoptimized: true
    }
}

export default nextConfig
