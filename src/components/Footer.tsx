import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦞</span>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                OpenClaw Hub
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              专注于分享 OpenClaw 最新资讯、技能与教程，让 AI 助理更好地服务于你的工作与生活。
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://discord.com/invite/clawd"
                target="_blank"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.3698C18.8962 3.7377 17.3798 3.2595 15.8032 2.9703C15.6519 3.1752 15.5167 3.4372 15.4351 3.7163C13.9117 3.4971 12.3972 3.4971 10.9257 3.7163C10.8441 3.4372 10.7044 3.1752 10.5574 2.9703C8.98081 3.2595 7.46437 3.7377 6.04365 4.3698C2.96861 8.8144 2.17812 13.2464 2.82467 17.5657C4.57908 18.8573 6.32745 19.7023 8.09132 20.2074C8.5099 19.6483 8.86573 19.0203 9.13808 18.343C8.52525 18.1176 7.94453 17.7909 7.40768 17.3787C7.5505 17.2739 7.68894 17.1431 7.82076 17.0087C11.225 18.5699 15.168 18.5699 18.5275 17.0087C18.6594 17.1431 18.7978 17.2739 18.9406 17.3787C18.4038 17.7909 17.8231 18.1176 17.2102 18.343C17.4826 19.0203 17.8384 19.6483 18.257 20.2074C20.0642 19.697 21.8408 18.8502 23.5188 17.5657C24.3192 13.1994 23.3668 8.7846 20.317 4.3698ZM8.02998 15.3264C7.29171 15.3264 6.66819 14.6424 6.66819 13.8141C6.66819 12.9858 7.29171 12.3018 8.02998 12.3018C8.77325 12.3018 9.40094 12.9858 9.39177 13.8141C9.39177 14.6424 8.76867 15.3264 8.02998 15.3264ZM16.2095 15.3264C15.4713 15.3264 14.8477 14.6424 14.8477 13.8141C14.8477 12.9858 15.4713 12.3018 16.2095 12.3018C16.9528 12.3018 17.5763 12.9858 17.5763 13.8141C17.5763 14.6424 16.9528 15.3264 16.2095 15.3264Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
              资源
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://docs.openclaw.ai"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  官方文档
                </Link>
              </li>
              <li>
                <Link
                  href="https://clawhub.com"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  ClawHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
              其他
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  隐私政策
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  使用条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} OpenClaw Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
