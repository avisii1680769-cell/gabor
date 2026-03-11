import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function CategoryIndexPage() {
  // 统计每个分类的文章数量
  const categoryStats = [
    { name: "Skills 推荐", icon: "🛠️", path: "skills", count: 4 },
    { name: "使用教程", icon: "📚", path: "jiaocheng", count: 6 },
    { name: "新闻", icon: "📰", path: "xinwen", count: 1 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:underline"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回首页
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">📂</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            分类浏览
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            按分类查看 OpenClaw 相关文章
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categoryStats.map((cat) => (
            <Link
              key={cat.path}
              href={`/category/${cat.path}`}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {cat.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {cat.count} 篇文章
              </p>
              <div className="mt-4 text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                查看 →
              </div>
            </Link>
          ))}
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
