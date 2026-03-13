import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // 获取相关文章（同分类或同标签）
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .filter((a) => 
      a.category === article.category || 
      a.tags?.some(tag => article.tags?.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center text-orange-600 mb-6 hover:underline"
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

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {article.date}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-orange dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-medium">
              {article.excerpt}
            </p>

            {/* 文章正文内容 */}
            <div 
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content || '' }}
            />

            {/* 相关文章推荐 */}
            {relatedArticles.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  📖 相关文章推荐
                </h2>
                <ul className="space-y-3">
                  {relatedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/article/${a.slug}`}
                        className="text-orange-600 hover:text-orange-700 hover:underline font-medium"
                      >
                        {a.icon} {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Author */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {article.author?.charAt(0) || "A"}
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {article.author || "Openclaw小龙虾最新资讯"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Openclaw小龙虾最新资讯内容团队
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* More Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            更多精彩文章
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 3)
              .map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
