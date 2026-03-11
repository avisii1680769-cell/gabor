import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除静态导出，使用Vercel默认构建
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
