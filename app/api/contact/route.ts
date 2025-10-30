import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend (if API key is configured)
    let emailSent = false;
    let emailError = null;

    if (resend) {
      const { data, error } = await resend.emails.send({
      from: 'HelixPoint Contact Form <onboarding@resend.dev>',
      to: ['hello@helixpoint.co'], // Add more email addresses as needed
      subject: `New Contact Form: ${firstName} ${lastName} from ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="color: #e8e8e8; margin: 10px 0 0 0;">HelixPoint Contact Form</p>
            </div>

            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin-top: 0; color: #2c3e50;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                    <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Company:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Received:</td>
                  <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #dee2e6;">
              <h2 style="margin-top: 0; color: #2c3e50;">Message</h2>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #e8f4fd; border-radius: 8px; border: 1px solid #b3d9ff;">
              <p style="margin: 0; font-size: 14px; color: #2c3e50;">
                <strong>Quick Actions:</strong><br>
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">Reply to ${firstName}</a> |
                <a href="mailto:${email}?subject=Re: Your HelixPoint Inquiry" style="color: #007bff; text-decoration: none;">Send Response</a>
              </p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 12px;">
              <p>This email was sent from the HelixPoint contact form. Please respond promptly to maintain good customer service.</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission - HelixPoint

Contact Details:
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Received: ${new Date().toLocaleString()}

Message:
${message}

---
This email was sent from the HelixPoint contact form.
      `,
      replyTo: email, // Allows easy reply to the submitter
      });

      if (error) {
        console.error('Resend error:', error);
        emailError = error;
      } else {
        emailSent = true;
      }
    } else {
      // Fallback: log to console when API key is not configured
      console.log('Contact form submission (email not sent - API key not configured):', {
        firstName,
        lastName,
        email,
        company,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    // Log submission result
    console.log('Contact form submission processed:', {
      firstName,
      lastName,
      email,
      company,
      message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
      timestamp: new Date().toISOString(),
      emailSent,
      emailConfigured: !!resend,
    });

    if (emailError) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: emailSent
          ? 'Message sent successfully'
          : 'Message received (email notifications not configured)'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
