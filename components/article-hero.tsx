import { User } from "lucide-react"

export function ArticleHero() {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-primary font-semibold uppercase tracking-wide">Finance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Agentic AI in Finance: Why the Future Will Reward the Cautious, Not the Fastest
          </h1>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Angela Weigl</div>
              </div>
            </div>
            <span className="text-muted-foreground">•</span>
            <time className="text-sm text-muted-foreground">November 26th, 2025</time>
          </div>
        </div>
      </div>
    </div>
  )
}
