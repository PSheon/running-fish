/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    images: {
      path: "",
      domain: ["localhost"],
    },
  },
};

module.exports = nextConfig;
