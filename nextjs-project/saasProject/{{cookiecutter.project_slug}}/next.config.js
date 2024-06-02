const { withContentlayer } = require("next-contentlayer");


/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = withContentlayer({
  headers: [
    {
      key: 'Access-Control-Allow-Origin',
      value: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "resend.com",
        port: "",
      },
    ],
  },
});
module.exports = nextConfig;