import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ContactForm } from "@/components/contact-form"
import { DestinationCards } from "@/components/destination-cards"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactForm />
      <DestinationCards />
      <Services />
      <Footer />
    </main>
  )
}
