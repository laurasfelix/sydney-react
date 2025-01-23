/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Ensures proper routing for GitHub Pages
  assetPrefix: './', // Adjusts asset paths for GitHub Pages
  images: {
    unoptimized: true, // Disables Next.js Image Optimization
  },
};

module.exports = nextConfig;