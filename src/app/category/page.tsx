import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function CategoryIndexPage() {
  // 定义所有分类
  const categories = [
    { name: "教程", icon: "📚", path: "jiaocheng", desc: "从入门到精通" },
    { name: "Skills", icon: "🛠️", path: "skills", desc: "技能推荐与指南" },
    { name: "新闻", icon: "📰", path: "xinwen", desc: "最新动态公告" },
    { name: "技术深度", icon: "🔬", path: "tech-deep", desc: "原理架构解析" },
    { name: "最佳实践", icon: "💡", path: "best-practice", desc: "使用技巧分享" },
    { name: "案例分析", icon: "📊", path: "case-studies", desc: "真实应用案例" },
    { name: "社区动态", icon: "👥", path: "community", desc: "社区活动故事" },
    { name: "工具推荐", icon: "🔧", path: "tools", desc: "周边工具资源" },
    { name: "问答精选", icon: "❓", path: "qa", desc: "常见问题解答" },
    { name: "安全专栏", icon: "🔒", path: "security", desc: "安全最佳实践" },
    { name: "性能优化", icon: "⚡", path: "performance", desc: "性能调优技巧" },
    { name: "集成指南", icon: "🔗", path: "integration", desc: "工具集成方案" },
  ];

  // 统计每个分类的文章数量
  const getCategoryCount = (name: string) => {
    return articles.filter(a => a.category === name).length;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Back to Home */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:underline">
            ← 返回首页
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">📂</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            分类浏览
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            按分类查看 OpenClaw 相关文章 · 每日自动更新
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.name);
            return (
              <Link
                key={cat.path}
                href={`/category/${cat.path}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all group text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h2 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
                  {cat.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {cat.desc}
                </p>
                <p className="text-orange-600 font-medium">
                  {count} 篇文章
                </p>
              </Link>
            );
          })}
        </div>

        {/* All Articles Link */}
        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            查看全部文章 →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
