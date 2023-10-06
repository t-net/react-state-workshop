/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  transpilePackages: ['@group-ui/group-ui-react'],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
