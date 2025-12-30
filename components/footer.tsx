import { Mail } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted travel partner for unforgettable journeys across India's most beautiful destinations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#destinations"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Packages
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="mailto:birbhumboy28@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:birbhumboy28@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>birbhumboy28@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70">© {new Date().getFullYear()} DreamTrips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
