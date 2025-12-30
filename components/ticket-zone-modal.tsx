"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Ticket, Upload } from "lucide-react"

interface TicketZoneModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TicketZoneModal({ open, onOpenChange }: TicketZoneModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append("screenshot", file)

      const response = await fetch("/api/ticket", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSuccess(true)
        setFile(null)
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-primary" />
            Ticket Zone
          </DialogTitle>
          <DialogDescription>Upload your payment screenshot to receive your ticket</DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <p className="text-lg font-semibold text-primary">Admin will send you ticket shortly!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="screenshot">Payment Screenshot</Label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  id="screenshot"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <label htmlFor="screenshot" className="cursor-pointer">
                  {file ? (
                    <div className="space-y-2">
                      <img
                        src={URL.createObjectURL(file) || "/placeholder.svg"}
                        alt="Payment screenshot"
                        className="max-h-40 mx-auto rounded"
                      />
                      <p className="text-sm text-muted-foreground">{file.name}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload payment screenshot</p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading || !file}>
              {loading ? "Uploading..." : "Submit Screenshot"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
