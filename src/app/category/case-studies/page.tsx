import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function Page() {
  const filteredArticles = articles.filter(
    (article) => article.category === "案例分析"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link href="/category" className="text-orange-600 hover:underline">← 返回分类</Link>
        </div>
        <div className="mb-8 text-center">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-3xl font-bold mb-2">案例分析</h1>
          <p className="text-gray-600">真实用户使用案例</p>
          <p className="text-sm text-gray-500 mt-2">共 {filteredArticles.length} 篇文章</p>
        </div>
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500">每日自动更新中...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
