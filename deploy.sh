#!/bin/bash

# OpenClaw Hub Vercel 部署脚本
# 使用方法：
# 1. 确保 Node.js 已安装
# 2. 运行: bash deploy.sh

echo "🚀 OpenClaw Hub - Vercel 部署脚本"
echo "========================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 未安装 Node.js，请先安装: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js 版本: $(node --version)"
echo ""

# 进入项目目录
cd "$(dirname "$0")"

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ ! -d "dist" ]; then
    echo "❌ 构建失败，未生成 dist 目录"
    exit 1
fi

echo "✅ 构建完成！"
echo ""
echo "========================================"
echo "📝 下一步："
echo "========================================"
echo ""
echo "1. 安装 Vercel CLI:"
echo "   npm install -g vercel"
echo ""
echo "2. 登录 Vercel:"
echo "   vercel login"
echo ""
echo "3. 部署项目:"
echo "   vercel --prod"
echo ""
echo "========================================"
echo ""
echo "💡 提示：首次部署需要连接 GitHub 仓库"
echo "仓库地址: https://github.com/avisii1680769-cell/gabor"
echo ""
