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

          {/* Article Content Placeholder */}
          <div className="prose prose-orange dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {article.excerpt}
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 mb-8 border-l-4 border-orange-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>本文内容正在完善中...</strong> 由于篇幅限制，完整内容将陆续更新，敬请期待！
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              文章概要
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              这是一篇关于 {article.category} 的文章，涵盖了 {article.tags?.join("、")} 相关内容。
              预计阅读时间 {article.readTime}。
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              相关资源
            </h2>

            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li className="text-gray-600 dark:text-gray-300">
                <Link
                  href="https://docs.openclaw.ai"
                  className="text-orange-600 hover:underline"
                  target="_blank"
                >
                  OpenClaw 官方文档
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <Link
                  href="https://clawhub.com"
                  className="text-orange-600 hover:underline"
                  target="_blank"
                >
                  ClawHub 技能商店
                </Link>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <Link
                  href="https://github.com/openclaw/openclaw"
                  className="text-orange-600 hover:underline"
                  target="_blank"
                >
                  OpenClaw GitHub 仓库
                </Link>
              </li>
            </ul>
          </div>

          {/* Author */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {article.author?.charAt(0) || "A"}
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {article.author || "匿名作者"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  OpenClaw Hub 贡献者
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* More Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            更多文章
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
