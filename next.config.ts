import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const normalizedBasePath = rawBasePath
  ? rawBasePath.startsWith('/')
    ? rawBasePath.replace(/\/$/, '')
    : `/${rawBasePath.replace(/\/$/, '')}`
  : ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? normalizedBasePath : '',
  assetPrefix: isProd ? `${normalizedBasePath}/` : '',
}

export default nextConfig;
