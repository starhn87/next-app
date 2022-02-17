/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
