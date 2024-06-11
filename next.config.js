/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/cryptosh",
          destination: "https://cryptosh.rahulgajbhiye.com/",
        },
        {
          source: "/letter",
          destination: "https://letter.rahulgajbhiye.com/",
        },
      ],
    };
  },
};

module.exports = nextConfig;
