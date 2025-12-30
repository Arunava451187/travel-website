import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, members, trip, mobile, gender, foodPreference, travelWith, suggestions } = body

    // Validate required fields
    if (!name || !members || !trip || !mobile || !gender || !foodPreference || !travelWith) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    // Create email content
    const emailSubject = `New Travel Inquiry from ${name}`
    const emailBody = `
New Travel Inquiry Received

Customer Details:
-------------------
Name: ${name}
Mobile Number: ${mobile}
Number of Members: ${members}
Gender: ${gender}

Trip Details:
-------------------
Selected Package: ${trip}
Traveling With: ${travelWith}
Food Preference: ${foodPreference}

${suggestions ? `Additional Suggestions:\n${suggestions}` : "No additional suggestions provided."}

-------------------
Please contact the customer at ${mobile} to confirm the booking.
    `.trim()

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "DreamTrips <onboarding@resend.dev>",
        to: "arunavamukherjee45118@gmail.com",
        reply_to: "birbhumboy28@gmail.com",
        subject: emailSubject,
        text: emailBody,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
