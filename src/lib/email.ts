import nodemailer from "nodemailer";

let _transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return null;
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return _transporter;
}

const NOTIFICATION_EMAIL = "team@rype.co.id";

interface SubmissionData {
  source: string;
  email: string;
  furthestDistance: string;
  plannedLoops: string;
  community: string;
}

function buildEmailHtml(data: SubmissionData): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const sourceLabel = data.source === "waitlist" ? "Waitlist Page" : "Homepage";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:bold;letter-spacing:2px;">
                LAST MAN STANDING
              </h1>
              <p style="margin:8px 0 0;color:#a0a0a0;font-size:13px;letter-spacing:1px;">
                NEW SUBMISSION RECEIVED
              </p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#e8f5e9;color:#2e7d32;font-size:12px;font-weight:bold;letter-spacing:1px;padding:6px 16px;border-radius:20px;">
                    ${sourceLabel.toUpperCase()}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Submission Details -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;">

                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 4px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                    <p style="margin:0;color:#1a1a1a;font-size:16px;font-weight:bold;">
                      <a href="mailto:${data.email}" style="color:#1a1a1a;text-decoration:none;">${data.email}</a>
                    </p>
                  </td>
                </tr>

                ${data.furthestDistance ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 4px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Furthest Distance</p>
                    <p style="margin:0;color:#1a1a1a;font-size:16px;">${data.furthestDistance}</p>
                  </td>
                </tr>
                ` : ""}

                ${data.plannedLoops ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 4px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Planned Loops</p>
                    <p style="margin:0;color:#1a1a1a;font-size:16px;">${data.plannedLoops}</p>
                  </td>
                </tr>
                ` : ""}

                ${data.community ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 4px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Community</p>
                    <p style="margin:0;color:#1a1a1a;font-size:16px;">${data.community}</p>
                  </td>
                </tr>
                ` : ""}

                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Submitted At</p>
                    <p style="margin:0;color:#1a1a1a;font-size:14px;">${submittedAt} (WIB)</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;color:#aaaaaa;font-size:12px;">
                This is an automated notification from the Last Man Standing website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendSubmissionEmail(data: SubmissionData): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("GMAIL_USER or GMAIL_APP_PASSWORD not set — skipping submission email");
    return;
  }

  const sourceLabel = data.source === "waitlist" ? "Waitlist" : "Homepage";

  try {
    await transporter.sendMail({
      from: `Last Man Standing <${process.env.GMAIL_USER}>`,
      to: NOTIFICATION_EMAIL,
      subject: `New ${sourceLabel} Submission — ${data.email}`,
      html: buildEmailHtml(data),
    });
  } catch (error) {
    console.error("Failed to send submission email:", error);
  }
}
