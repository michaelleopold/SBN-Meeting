/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withTM = require('next-transpile-modules')(['@jitsi/react-sdk']);

module.exports = withTM({
  future: {
    webpack5: true,
  },
});