import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// 分类映射
const categoryMap: Record<string, { name: string; icon: string; description: string }> = {
  "skills": { name: "Skills 推荐", icon: "🛠️", description: "热门技能推荐与使用指南" },
  "使用教程": { name: "使用教程", icon: "📚", description: "OpenClaw 使用教程与最佳实践" },
  "教程": { name: "使用教程", icon: "📚", description: "OpenClaw 使用教程与最佳实践" },
  "社区动态": { name: "社区动态", icon: "💬", description: "社区最新动态与活动" },
  "更新日志": { name: "更新日志", icon: "📝", description: "版本更新与新功能发布" },
  "新闻": { name: "新闻", icon: "📰", description: "OpenClaw 最新新闻与公告" },
  "skills-推荐": { name: "Skills 推荐", icon: "🛠️", description: "热门技能推荐与使用指南" },
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  const categoryInfo = categoryMap[categorySlug];

  if (!categoryInfo) {
    notFound();
  }

  // 筛选文章
  const filteredArticles = articles.filter(
    (article) => 
      article.category.toLowerCase().replace(/\s+/g, "-") === categorySlug ||
      article.category === categoryInfo.name.replace(" 推荐", "")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/articles"
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
            返回文章列表
          </Link>
        </div>

        {/* Category Header */}
        <div className="mb-8 text-center">
          <div className="text-5xl mb-4">{categoryInfo.icon}</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            {categoryInfo.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {categoryInfo.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            共 {filteredArticles.length} 篇文章
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 dark:text-gray-400">
              该分类下暂无文章，敬请期待！
            </p>
            <Link
              href="/articles"
              className="inline-block mt-4 text-orange-600 hover:underline"
            >
              查看全部文章 →
            </Link>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            其他分类
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categoryMap)
              .filter(([slug]) => slug !== categorySlug)
              .slice(0, 5)
              .map(([slug, info]) => (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition"
                >
                  {info.icon} {info.name}
                </Link>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
