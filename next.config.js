/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/example",
          destination: "https://cryptoconverter-frontend.vercel.app/",
        },
        {
          source: "/letter",
          destination: "https://valentinesletter.vercel.app/",
        },
      ],
    };
  },
};

module.exports = nextConfig;
