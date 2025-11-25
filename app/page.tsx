import { Header } from "@/components/header"
import { ArticleHero } from "@/components/article-hero"
import { ArticleContent } from "@/components/article-content"
import { ArticleSidebar } from "@/components/article-sidebar"
import { Footer } from "@/components/footer"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ArticleHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ArticleContent />
          </div>
          <aside className="lg:col-span-4">
            <ArticleSidebar />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
