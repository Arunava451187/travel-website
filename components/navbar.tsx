"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Ticket, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { TicketZoneModal } from "./ticket-zone-modal"

export function Navbar() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">
                Destinations
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Button onClick={() => setTicketModalOpen(true)} className="gap-2">
                <Ticket className="w-4 h-4" />
                Ticket Zone
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t">
              <a
                href="#destinations"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#services"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                onClick={() => {
                  setTicketModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full gap-2"
              >
                <Ticket className="w-4 h-4" />
                Ticket Zone
              </Button>
            </div>
          )}
        </div>
      </nav>

      <TicketZoneModal open={ticketModalOpen} onOpenChange={setTicketModalOpen} />
    </>
  )
}
