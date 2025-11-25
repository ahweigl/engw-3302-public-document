export function ArticleHero() {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-primary font-semibold uppercase tracking-wide">Leadership</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">12 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            The Future of Leadership in a Digital Age
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
            How modern leaders are adapting to technological disruption and creating sustainable competitive advantage
            in an increasingly digital world.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div>
                <div className="font-semibold text-foreground">Dr. Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Professor of Management</div>
              </div>
            </div>
            <span className="text-muted-foreground">•</span>
            <time className="text-sm text-muted-foreground">January 24, 2025</time>
          </div>
        </div>
      </div>
    </div>
  )
}
