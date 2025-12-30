"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"
import { WhatsAppModal } from "./whatsapp-modal"

const destinations = [
  {
    name: "Digha",
    price: "₹3,000",
    image: "/digha-beach-sunset-india.jpg",
    description: "Serene beaches and stunning sunsets await you",
  },
  {
    name: "Puri",
    price: "₹4,000",
    image: "/puri-jagannath-temple-beach.jpg",
    description: "Sacred temples and pristine coastline",
  },
  {
    name: "Darjeeling",
    price: "₹4,000",
    image: "/darjeeling-tea-gardens-mountains.jpg",
    description: "Majestic mountains and world-famous tea gardens",
  },
  {
    name: "Sundarban",
    price: "₹4,000",
    image: "/sundarban-mangrove-forest-bengal-tiger.jpg",
    description: "Mysterious mangrove forests and incredible wildlife",
  },
  {
    name: "Mayapur, Bankura & Purulia",
    price: "₹5,500",
    image: "/mayapur-iskcon-temple-bengal.jpg",
    description: "Spiritual heritage and cultural treasures",
  },
]

export function DestinationCards() {
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false)

  const handleWhatsApp = () => {
    setWhatsappModalOpen(true)
  }

  const handleEmail = () => {
    window.location.href = "mailto:birbhumboy28@gmail.com"
  }

  return (
    <>
      <section id="destinations" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Destinations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose your next adventure from our handpicked destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={destination.name}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-slide-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">{destination.name}</h3>
                      <p className="text-xs md:text-sm text-white/90">{destination.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl md:text-3xl font-bold text-primary">{destination.price}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 pb-6">
                  <Button
                    onClick={handleWhatsApp}
                    className="flex-1 text-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Details
                  </Button>
                  <Button
                    onClick={handleEmail}
                    variant="outline"
                    className="flex-1 text-sm gap-2 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppModal open={whatsappModalOpen} onOpenChange={setWhatsappModalOpen} />
    </>
  )
}
