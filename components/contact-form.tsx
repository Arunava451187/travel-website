"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    trip: "",
    mobile: "",
    gender: "",
    foodPreference: "",
    travelWith: "",
    suggestions: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: "Thank you! We'll contact you soon." })
        setFormData({
          name: "",
          members: "",
          trip: "",
          mobile: "",
          gender: "",
          foodPreference: "",
          travelWith: "",
          suggestions: "",
        })
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to submit. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-background" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Plan Your Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Fill in your details and we'll get back to you with the best travel plan
          </p>
        </div>

        <Card className="border-2 shadow-lg animate-slide-in">
          <CardHeader>
            <CardTitle className="text-xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                  />
                </div>

                {/* Members */}
                <div className="space-y-2">
                  <Label htmlFor="members">Number of Members *</Label>
                  <Input
                    id="members"
                    type="number"
                    min="1"
                    required
                    value={formData.members}
                    onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                    placeholder="How many people?"
                  />
                </div>

                {/* Trip */}
                <div className="space-y-2">
                  <Label htmlFor="trip">Which Trip? *</Label>
                  <select
                    id="trip"
                    required
                    value={formData.trip}
                    onChange={(e) => setFormData({ ...formData, trip: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select destination</option>
                    <option value="Digha - ₹3,000">Digha - ₹3,000</option>
                    <option value="Puri - ₹4,000">Puri - ₹4,000</option>
                    <option value="Darjeeling - ₹4,000">Darjeeling - ₹4,000</option>
                    <option value="Sundarban - ₹4,000">Sundarban - ₹4,000</option>
                    <option value="Mayapur, Bankura & Purulia - ₹5,500">Mayapur, Bankura & Purulia - ₹5,500</option>
                  </select>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <select
                    id="gender"
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Food Preference */}
                <div className="space-y-2">
                  <Label htmlFor="foodPreference">Food Preference *</Label>
                  <select
                    id="foodPreference"
                    required
                    value={formData.foodPreference}
                    onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select preference</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                  </select>
                </div>

                {/* Travel With */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="travelWith">Traveling With *</Label>
                  <select
                    id="travelWith"
                    required
                    value={formData.travelWith}
                    onChange={(e) => setFormData({ ...formData, travelWith: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select option</option>
                    <option value="Friends">Friends</option>
                    <option value="Family">Family</option>
                    <option value="Single Person">Single Person</option>
                  </select>
                </div>

                {/* Suggestions */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="suggestions">Any Suggestions for Us?</Label>
                  <Textarea
                    id="suggestions"
                    value={formData.suggestions}
                    onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                    placeholder="Tell us your preferences or special requirements..."
                    rows={4}
                  />
                </div>
              </div>

              {message && (
                <div
                  className={`p-4 rounded-md ${
                    message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full gap-2 text-base" size="lg">
                <Send className="w-5 h-5" />
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
