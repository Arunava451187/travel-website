"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"

interface WhatsAppModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WhatsAppModal({ open, onOpenChange }: WhatsAppModalProps) {
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })

      if (response.ok) {
        setSuccess(true)
        setPhone("")
        setTimeout(() => {
          setSuccess(false)
          onOpenChange(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Request Callback
          </DialogTitle>
          <DialogDescription>Enter your WhatsApp number and our admin will contact you shortly</DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-lg font-semibold text-primary">Admin will contact you shortly!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your WhatsApp number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{10}"
                maxLength={10}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
