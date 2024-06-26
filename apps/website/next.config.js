const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    domains: [],
    dangerouslyAllowSVG: true
  },

  webpack: (config) => {
    config.externals = [
      ...config.externals,

      {
        'utf-8-validate': 'commonjs utf-8-validate',
        bufferutil: 'commonjs bufferutil'
      },
      'canvas'
    ];
    return config;
  }
};

module.exports = withMDX(nextConfig);
