import Link from "next/link";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 7);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              OpenClaw Hub
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              发现最新 Skills、教程与社区动态
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                浏览文章
              </Link>
              <Link
                href="/skills"
                className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
              >
                探索 Skills
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            🔥 精选文章
          </h2>
          <Link href={`/article/${featuredArticle.slug}`}>
            <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">🦞</span>
                </div>
                <div className="p-6 md:w-1/2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold">
                    阅读更多 →
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </section>

        {/* Recent Articles Grid */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              📰 最新资讯
            </h2>
            <Link
              href="/articles"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            📂 分类浏览
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Skills 推荐", icon: "🛠️", count: 4, path: "skills" },
              { name: "使用教程", icon: "📚", count: 6, path: "jiaocheng" },
              { name: "新闻", icon: "📰", count: 1, path: "xinwen" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.path}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {cat.count} 篇文章
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* WeChat Promotion */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              💬 联系我们
            </h2>
            <p className="text-lg opacity-90 mb-6">
              有问题？想要部署自己的网站？
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-sm opacity-80 mb-2">
                📱 微信添加
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                gabol_lu
              </p>
            </div>
            
            <div className="space-y-2 text-sm opacity-90">
              <p>✅ 免费咨询 OpenClaw 部署问题</p>
              <p>✅ 获得一对一技术指导</p>
              <p>✅ 加入 OpenClaw 爱好者交流群</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
