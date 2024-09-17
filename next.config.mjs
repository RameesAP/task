/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['magento.demo.ceymox.net'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://magento.demo.ceymox.net/:path*', // Proxy to Magento API
      },
    ];
  },
};

export default nextConfig;
