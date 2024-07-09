const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
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

module.exports = withMDX(nextConfig);
