import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
        {/* Image Placeholder with Gradient */}
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500" />
          <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
            {article.icon || "📄"}
          </span>
          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-orange-500/90 text-white text-xs px-3 py-1 rounded-full font-medium">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {article.date}
          </div>
          
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {article.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {article.readTime}
            </span>
            <span className="text-orange-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
              阅读 →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
