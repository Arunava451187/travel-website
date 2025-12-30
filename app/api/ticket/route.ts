import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const screenshot = formData.get("screenshot") as File

    if (!screenshot) {
      return NextResponse.json({ error: "Screenshot is required" }, { status: 400 })
    }

    const bytes = await screenshot.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Content = buffer.toString("base64")

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arunavamukherjee45118@gmail.com",
      subject: "New Ticket Payment Screenshot - DreamTrips",
      html: `
        <h2>New Payment Screenshot Received</h2>
        <p>A customer has submitted their payment screenshot for ticket verification.</p>
        <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
        <p>Please verify the payment and send the ticket to the customer.</p>
      `,
      attachments: [
        {
          filename: screenshot.name,
          content: base64Content,
        },
      ],
    })

    if (error) {
      console.error("[v0] Email error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Ticket upload error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
