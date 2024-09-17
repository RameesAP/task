/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['magento.demo.ceymox.net'],
  },
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: 'https://magento.demo.ceymox.net/graphql', // Proxy to Magento API
      },
    ];
  },
};

export default nextConfig;
