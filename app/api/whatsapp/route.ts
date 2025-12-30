import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_WHATSAPP = "8597504298"

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arunavamukherjee45118@gmail.com",
      subject: "New WhatsApp Contact Request - DreamTrips",
      html: `
        <h2>New Contact Request</h2>
        <p>A customer has requested to be contacted via WhatsApp:</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><a href="https://wa.me/${phone}" style="display: inline-block; padding: 10px 20px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px;">Contact on WhatsApp</a></p>
        <hr>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    })

    if (error) {
      console.error("[v0] Email error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] WhatsApp request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
