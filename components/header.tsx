import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 min-h-[148px]">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/HBR-logo.png"
                alt="Harvard Business Review"
                width={130}
                height={148}
                className="h-[148px] w-[130px]"
                priority
              />
            </a>
          </div>

          <div className="w-px bg-border h-full min-h-[148px]" />

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between py-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>

              <div className="flex items-center gap-4 ml-auto">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm"
                >
                  Subscribe
                </Button>
                <Button variant="ghost" size="sm" className="text-foreground">
                  Sign In
                </Button>
                <div className="h-6 w-px bg-border mx-2" />
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="border-t border-border">
              <nav className="flex items-center gap-8 py-3 overflow-x-auto">
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Latest
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Magazine
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Topics
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Podcasts
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Store
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Reading Lists
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Data & Visuals
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  Case Selections
                </a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
                  HBR Executive
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
