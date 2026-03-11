import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const skills = [
  {
    name: "browser-control",
    displayName: "Browser Control",
    description: "网页自动化、数据抓取、UI测试",
    installs: "15K+",
    icon: "🌐",
  },
  {
    name: "ffmpeg",
    displayName: "FFmpeg Video",
    description: "视频剪辑、转码、压缩处理",
    installs: "12K+",
    icon: "🎬",
  },
  {
    name: "xiaohongshu",
    displayName: "小红书运营",
    description: "小红书内容创作、自动化发布",
    installs: "8K+",
    icon: "📕",
  },
  {
    name: "stock-analysis",
    displayName: "股票分析",
    description: "个股追踪、行情报告、价格提醒",
    installs: "6K+",
    icon: "📈",
  },
  {
    name: "self-improving",
    displayName: "Self-Improving",
    description: "AI 自我进化、自动改进",
    installs: "5K+",
    icon: "🧠",
  },
  {
    name: "desktop-control",
    displayName: "Desktop Control",
    description: "桌面自动化、鼠标键盘控制",
    installs: "4K+",
    icon: "🖥️",
  },
  {
    name: "transcriptapi",
    displayName: "YouTube Transcript",
    description: "YouTube 字幕获取、视频分析",
    installs: "3K+",
    icon: "📺",
  },
  {
    name: "github-trending",
    displayName: "GitHub Trending",
    description: "追踪 GitHub 热门项目",
    installs: "3K+",
    icon: "🔥",
  },
  {
    name: "trending-skills",
    displayName: "Trending Skills",
    description: "获取技能趋势排行",
    installs: "2K+",
    icon: "📊",
  },
  {
    name: "coze-web-search",
    displayName: "Coze Web Search",
    description: "多引擎网络搜索",
    installs: "2K+",
    icon: "🔍",
  },
  {
    name: "remotion-video",
    displayName: "Remotion Video",
    description: "用代码生成视频",
    installs: "1.5K+",
    icon: "🎥",
  },
  {
    name: "automation-workflows",
    displayName: "Automation Workflows",
    description: "自动化工作流设计",
    installs: "1K+",
    icon: "⚙️",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            🛠️ OpenClaw Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            发现强大的 Skills，扩展 OpenClaw 的能力边界，让 AI 助理更好地服务于你的工作与生活。
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                    {skill.displayName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {skill.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-orange-600 font-medium">
                      {skill.installs} 安装
                    </span>
                    <Link
                      href={`/skill/${skill.name}`}
                      className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      详情 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            找不到想要的 Skill？
          </h2>
          <p className="mb-6 opacity-90">
            访问 ClawHub 发现更多社区开发的 Skills
          </p>
          <Link
            href="https://clawhub.com"
            target="_blank"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            浏览 ClawHub
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
