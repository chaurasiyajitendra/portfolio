// emailService.js
const nodemailer = require("nodemailer");

/**
 * Create a transporter.
 * For production, set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS in .env.
 * For testing with Ethereal, you can keep the commented example.
 */
const transporter = nodemailer.createTransport({
  // === Use your real SMTP settings (e.g., Gmail, SendGrid) ===
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // === Or uncomment below to use Ethereal for testing ===
  /*
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "your-ethereal-user@ethereal.email",
    pass: "your-ethereal-password",
  },
  */
});

/**
 * Sends both visitor acknowledgment and admin notification emails.
 * @param {string} visitorName - Name of the person who filled the form.
 * @param {string} visitorEmail - Email address of the visitor.
 * @param {string} message - The message submitted.
 */
async function sendContactEmails(visitorName, visitorEmail, message) {
  // Prepare the HTML for visitor (acknowledgment)
  const visitorHtml = `
    <div style="background-color: #f8fafc; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Header with branding -->
        <tr>
          <td style="padding: 40px 40px 20px 40px; text-align: left;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #1e293b; letter-spacing: -0.5px;">YOUR PORTFOLIO</h1>
            <div style="height: 2px; width: 40px; background-color: #3b82f6; margin-top: 8px;"></div>
          </td>
        </tr>
        <!-- Main content -->
        <tr>
          <td style="padding: 0 40px 30px 40px;">
            <h2 style="font-size: 24px; color: #1e293b; margin-top: 0;">Thank you, ${visitorName}!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #475569;">
              I've received your message and I’m excited to connect with you. Your enquiry means a lot, and I’ll get back to you within 24 hours.
            </p>
            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
              <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; margin-top: 0; margin-bottom: 15px; letter-spacing: 1px;">Your Message</h3>
              <p style="font-size: 14px; color: #1e293b; margin: 0; font-style: italic;">“${message}”</p>
            </div>
            <div style="text-align: center; margin-bottom: 10px;">
              <a href="https://yourportfolio.com" style="display: inline-block; background-color: #1e293b; color: #ffffff; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">Visit My Portfolio</a>
            </div>
          </td>
        </tr>
        <!-- Footer with links -->
        <tr>
          <td style="padding: 0 40px 40px 40px;">
            <table width="100%" style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
              <tr>
                <td style="font-size: 13px; color: #64748b;">
                  📌 Need a quick reply? <a href="https://yourportfolio.com/contact" style="color: #3b82f6; text-decoration: none;">Send another message</a> | 
                  <a href="https://linkedin.com/in/yourprofile" style="color: #3b82f6; text-decoration: none;">Connect on LinkedIn</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Dark footer -->
        <tr>
          <td style="background-color: #1e293b; padding: 30px 40px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.8;">
              Designed with care | Your Name © 2026<br>
              Crafting digital experiences.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;

  // Prepare the HTML for admin (you)
  const adminHtml = `
    <div style="background-color: #f8fafc; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <tr>
          <td style="padding: 40px 40px 20px 40px; text-align: left;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #1e293b; letter-spacing: -0.5px;">PORTFOLIO CONTACT</h1>
            <div style="height: 2px; width: 40px; background-color: #3b82f6; margin-top: 8px;"></div>
          </td>
        </tr>
        <!-- Content -->
        <tr>
          <td style="padding: 0 40px 30px 40px;">
            <h2 style="font-size: 24px; color: #1e293b; margin-top: 0;">New Enquiry Received</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #475569;">
              Someone filled out your contact form. Details are below.
            </p>
            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
              <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; margin-top: 0; margin-bottom: 15px; letter-spacing: 1px;">Visitor Information</h3>
              <ul style="padding: 0; margin: 0; list-style: none; font-size: 14px; color: #1e293b;">
                <li style="margin-bottom: 10px;">👤 <strong>Name:</strong> ${visitorName}</li>
                <li style="margin-bottom: 10px;">📧 <strong>Email:</strong> ${visitorEmail}</li>
                <li>💬 <strong>Message:</strong> ${message}</li>
              </ul>
            </div>
            <div style="text-align: center; margin-bottom: 10px;">
              <a href="mailto:${visitorEmail}?subject=Re: Your enquiry" style="display: inline-block; background-color: #1e293b; color: #ffffff; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">Reply to ${visitorName}</a>
            </div>
          </td>
        </tr>
        <!-- Footer with links -->
        <tr>
          <td style="padding: 0 40px 40px 40px;">
            <table width="100%" style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
              <tr>
                <td style="font-size: 13px; color: #64748b;">
                  ⏱️ Received on ${new Date().toLocaleString()} | <a href="https://yourportfolio.com/admin" style="color: #3b82f6; text-decoration: none;">View all enquiries</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Dark footer -->
        <tr>
          <td style="background-color: #1e293b; padding: 30px 40px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.8;">
              Automated message from your portfolio contact form.<br>
              © 2026 Your Name – All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;

  // --- Send visitor acknowledgment ---
  await transporter.sendMail({
    from: `"Your Name" <${process.env.EMAIL_USER}>`, // replace with your "from" email
    to: visitorEmail,
    subject: "Thank you for contacting me!",
    html: visitorHtml,
    text: `Hello ${visitorName},\n\nThank you for reaching out. I've received your message and will get back to you soon.\n\nBest regards,\nYour Name`, // plain text fallback
  });

  // --- Send admin notification (to yourself) ---
  await transporter.sendMail({
    from: `"Your Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL, // your email address
    subject: `New enquiry from ${visitorName}`,
    html: adminHtml,
    text: `New enquiry from ${visitorName} (${visitorEmail}):\n\n${message}`, // plain text fallback
  });
}

module.exports = { sendContactEmails };