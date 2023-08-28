/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
        domains: ['fakestoreapi.com','placeimg.com','picsum.photos','cdns.klimg.com'],
      },
}

module.exports = nextConfig
