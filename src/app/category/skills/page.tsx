import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function SkillsCategoryPage() {
  const categoryName = "Skills 推荐";
  const categorySlug = "skills";
  const icon = "🛠️";
  const description = "热门技能推荐与使用指南";
  
  const filteredArticles = articles.filter(
    (article) => article.category === "Skills" || article.category === "技能"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link href="/articles" className="inline-flex items-center text-orange-600 hover:underline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回文章列表
          </Link>
        </div>

        <div className="mb-8 text-center">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">{categoryName}</h1>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">共 {filteredArticles.length} 篇文章</p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 dark:text-gray-400">该分类下暂无文章</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
