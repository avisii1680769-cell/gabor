export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  icon?: string;
  tags?: string[];
  author?: string;
}

export const articles: Article[] = [
  {
    slug: "openclaw-2026-major-update",
    title: "OpenClaw 2026重大更新：AI Agent 能力全面升级",
    excerpt: "OpenClaw 发布了2026年首个重大更新版本，新增了多项 AI Agent 能力，包括增强的上下文理解、多模态支持和自动化工作流...",
    category: "新闻",
    date: "2026-03-10",
    readTime: "5分钟",
    icon: "🚀",
    tags: ["OpenClaw", "更新", "AI"],
    author: "OpenClaw Hub",
  },
  {
    slug: "top-10-skills-2026",
    title: "2026年最受欢迎的10个 OpenClaw Skills 推荐",
    excerpt: "本文精选了2026年最受欢迎的10个 OpenClaw Skills，涵盖视频处理、自动化办公、内容创作等多个领域...",
    category: "Skills",
    date: "2026-03-09",
    readTime: "8分钟",
    icon: "🛠️",
    tags: ["Skills", "推荐", "工具"],
    author: "社区贡献",
  },
  {
    slug: "self-improving-agent-deep-dive",
    title: "深入理解 Self-Improving Agent：AI 也能自我进化",
    excerpt: "Self-Improving Agent 是一项革命性的技术，让 AI 能够自主学习、反思和改进自己的工作方式。本文详细解析其原理...",
    category: "教程",
    date: "2026-03-08",
    readTime: "10分钟",
    icon: "🧠",
    tags: ["AI", "Self-Improvement", "教程"],
    author: "技术团队",
  },
  {
    slug: "xiaohongshu-automation-guide",
    title: "小红书运营自动化完全指南",
    excerpt: "如何利用 OpenClaw 实现小红书内容创作自动化？本文提供完整的解决方案，包括内容生成、定时发布、数据分析...",
    category: "教程",
    date: "2026-03-07",
    readTime: "12分钟",
    icon: "📕",
    tags: ["小红书", "自动化", "运营"],
    author: "运营团队",
  },
  {
    slug: "browser-automation-master",
    title: "Browser Control 完全指南：从入门到精通",
    excerpt: "Browser Control 是 OpenClaw 最强大的技能之一，支持网页自动化、数据抓取、UI测试等场景。本文带你全面掌握...",
    category: "教程",
    date: "2026-03-06",
    readTime: "15分钟",
    icon: "🌐",
    tags: ["Browser", "自动化", "教程"],
    author: "技术团队",
  },
  {
    slug: "ffmpeg-video-master",
    title: "FFmpeg 视频处理终极指南",
    excerpt: "FFmpeg 是开源世界最强大的视频处理工具，本文介绍如何在 OpenClaw 中使用 FFmpeg 进行视频剪辑、转码、压缩...",
    category: "Skills",
    date: "2026-03-05",
    readTime: "10分钟",
    icon: "🎬",
    tags: ["FFmpeg", "视频", "工具"],
    author: "社区贡献",
  },
  {
    slug: "openclawnodejs-getting-started",
    title: "Node.js 开发者的 OpenClaw 入门指南",
    excerpt: "作为 Node.js 开发者，如何快速上手 OpenClaw？本文从环境配置、技能安装到实际应用，手把手教你...",
    category: "教程",
    date: "2026-03-04",
    readTime: "8分钟",
    icon: "💻",
    tags: ["Node.js", "入门", "开发"],
    author: "技术团队",
  },
  {
    slug: "multi-agent-collaboration",
    title: "多智能体协作：打造你的 AI 工作团队",
    excerpt: "OpenClaw 支持多智能体协同工作，本文介绍如何配置不同角色的 AI Agent，实现复杂任务的分工与协作...",
    category: "教程",
    date: "2026-03-03",
    readTime: "10分钟",
    icon: "👥",
    tags: ["多智能体", "协作", "AI"],
    author: "技术团队",
  },
  {
    slug: "stock-analysis-skill-guide",
    title: "股票分析 Skill 完全指南",
    excerpt: "利用 OpenClaw 的股票分析 Skill，你可以自动追踪个股行情、获取分析报告、设置价格提醒...",
    category: "Skills",
    date: "2026-03-02",
    readTime: "7分钟",
    icon: "📈",
    tags: ["股票", "金融", "分析"],
    author: "社区贡献",
  },
  {
    slug: "trending-skills-analysis",
    title: "GitHub Trending 自动化追踪指南",
    excerpt: "如何利用 OpenClaw 自动追踪 GitHub 热门项目？本文介绍 Trending Skills 的使用方法和最佳实践...",
    category: "Skills",
    date: "2026-03-01",
    readTime: "6分钟",
    icon: "🔥",
    tags: ["GitHub", "Trending", "监控"],
    author: "社区贡献",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}
