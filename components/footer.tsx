export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  The Latest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  All Topics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Magazine Archive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  The Big Idea
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Store</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Article Reprints
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Advertise with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Information for Booksellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Media Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Manage My Account</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  My Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Topic Feeds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Account Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 Business Review Publishing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
