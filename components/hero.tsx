"use client"

import { MapPin, Plane } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[url('/beautiful-indian-landscape-mountains.jpg')] bg-cover bg-center opacity-20" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <MapPin className="w-12 h-12 text-accent opacity-60" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float-delayed">
        <Plane className="w-16 h-16 text-secondary opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse">
        <div className="w-20 h-20 rounded-full bg-accent/30 blur-xl" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-pulse-delayed">
        <div className="w-32 h-32 rounded-full bg-secondary/30 blur-xl" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight text-balance">
            Explore the Beauty of India
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Discover unforgettable destinations with our carefully curated travel packages
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#destinations"
              className="px-6 py-3 text-sm md:text-base bg-accent text-accent-foreground rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm md:text-base bg-primary-foreground text-primary rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-background fill-current">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
