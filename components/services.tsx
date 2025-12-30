"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bus, Coffee, Hotel, Camera, Utensils, Shield } from "lucide-react"

const services = [
  {
    icon: Bus,
    title: "AC Bus Transportation",
    description: "Comfortable AC buses with experienced drivers for a smooth journey throughout your trip.",
  },
  {
    icon: Hotel,
    title: "Quality Accommodation",
    description: "Carefully selected hotels and resorts that offer comfort, cleanliness, and great hospitality.",
  },
  {
    icon: Utensils,
    title: "Delicious Meals",
    description: "Savor authentic local delicacies and traditional dishes at the best restaurants and eateries.",
  },
  {
    icon: Camera,
    title: "Guided Sightseeing",
    description: "Expert local guides to help you explore hidden gems and popular attractions at each destination.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Your safety is our priority. All packages include comprehensive travel insurance coverage.",
  },
  {
    icon: Coffee,
    title: "Refreshments",
    description: "Complimentary refreshments and snacks during travel to keep you energized throughout the journey.",
  },
]

const destinationDetails = [
  {
    name: "Digha",
    image: "/digha-beach-sunset-india.jpg",
    highlights:
      "Golden sandy beaches stretching along the Bay of Bengal, seafood markets, marine aquarium, and coastal temples. Perfect for a relaxing beach getaway with stunning sunrises and sunsets.",
    food: "Fresh fish fry, prawn malai curry, crab dishes, lobster preparations, and local Bengali sweets like roshogolla and sandesh.",
    specialty:
      "Known for its pristine beaches and fresh seafood. The town offers a peaceful coastal experience with beautiful views of the Bay of Bengal.",
  },
  {
    name: "Puri",
    image: "/puri-jagannath-temple-beach.jpg",
    highlights:
      "Sacred Jagannath Temple, one of the Char Dham pilgrimage sites, pristine beaches, Konark Sun Temple (UNESCO World Heritage Site), vibrant local markets, and traditional handicrafts.",
    food: "Chhena poda (baked cheese dessert), dahi vada, temple prasad, khaja, traditional Odia thali with dalma and santula.",
    specialty:
      "A holy city combining spirituality with beach beauty. Famous for the annual Rath Yatra festival and its magnificent temple architecture.",
  },
  {
    name: "Darjeeling",
    image: "/darjeeling-tea-gardens-mountains.jpg",
    highlights:
      "Lush tea gardens, Tiger Hill sunrise with Kanchenjunga views, historic Darjeeling Himalayan Railway (toy train), Himalayan Mountaineering Institute, and Buddhist monasteries.",
    food: "Steaming momos (dumplings), thukpa (noodle soup), traditional Tibetan bread, authentic Nepali cuisine, and world-famous Darjeeling tea.",
    specialty:
      "The 'Queen of Hills' offers breathtaking mountain views and tea culture. Experience colonial charm mixed with Himalayan beauty.",
  },
  {
    name: "Sundarban",
    image: "/sundarban-mangrove-forest-bengal-tiger.jpg",
    highlights:
      "UNESCO World Heritage mangrove forests, Royal Bengal tiger spotting, river cruises through dense forests, diverse wildlife including crocodiles and deer, bird watching paradise.",
    food: "Fresh river fish preparations, crab curry, prawn dishes, traditional village-style Bengali cuisine, and unique honey from Sundarban forests.",
    specialty:
      "The world's largest mangrove forest and home to the Royal Bengal Tiger. A unique ecosystem where land meets the sea.",
  },
  {
    name: "Mayapur, Bankura & Purulia",
    image: "/mayapur-iskcon-temple-bengal.jpg",
    highlights:
      "ISKCON temple complex in Mayapur, ancient terracotta temples in Bankura, tribal culture and Chhau dance in Purulia, historic sites, and traditional crafts.",
    food: "Spiritual prasadam at Mayapur temple, authentic tribal cuisine, muri-ghonto (fish head curry), traditional Bengali dishes, and local sweets.",
    specialty:
      "A cultural triangle showcasing spiritual heritage, ancient art, and tribal traditions. Experience the diversity of Bengal's rich history.",
  },
]

export function Services() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Our Services Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for a memorable journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in border-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12 animate-fade-in mt-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Explore Each Destination
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the unique experiences, specialties, and cuisine at every location
          </p>
        </div>

        <div className="space-y-12">
          {destinationDetails.map((destination, index) => (
            <Card
              key={destination.name}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-secondary" />
                      Highlights
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{destination.highlights}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-2 flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-accent" />
                      Local Cuisine
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{destination.food}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      What Makes It Special
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{destination.specialty}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
