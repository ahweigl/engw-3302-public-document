import { Button } from "@/components/ui/button"
import { Bookmark, Share2, Mail } from "lucide-react"

export function ArticleSidebar() {
  return (
    <div className="space-y-8 sticky top-24">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Bookmark className="h-4 w-4" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Mail className="h-4 w-4" />
          Email
        </Button>
      </div>

      <div className="border border-border rounded-sm p-6 bg-card space-y-4">
        <h3 className="font-bold text-lg text-foreground">About the Author</h3>
        <div className="w-20 h-20 rounded-full bg-muted" />
        <div>
          <div className="font-semibold text-foreground">Dr. Sarah Chen</div>
          <div className="text-sm text-muted-foreground mt-1">
            Professor of Management at Stanford Graduate School of Business
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Dr. Chen is a leading expert on digital transformation and organizational leadership. Her research focuses on
          how leaders adapt to technological disruption.
        </p>
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          Follow
        </Button>
      </div>

      <div className="border border-border rounded-sm p-6 bg-card space-y-4">
        <h3 className="font-bold text-lg text-foreground">Related Articles</h3>
        <div className="space-y-4">
          {[
            "Why Traditional Strategy Frameworks Are Failing",
            "The Rise of Distributed Leadership Models",
            "How AI is Reshaping Executive Decision-Making",
          ].map((title, index) => (
            <a key={index} href="#" className="block group">
              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                {title}
              </div>
              <div className="text-xs text-muted-foreground mt-1">5 min read</div>
            </a>
          ))}
        </div>
      </div>

      <div className="border-2 border-primary rounded-sm p-6 bg-card space-y-4">
        <h3 className="font-bold text-lg text-foreground">Subscribe to our newsletter</h3>
        <p className="text-sm text-muted-foreground">
          Get the latest insights on leadership, strategy, and innovation delivered to your inbox.
        </p>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe Now</Button>
      </div>
    </div>
  )
}
