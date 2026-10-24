require("dotenv").config();
const mailSvc = require("../services/mail.services");
const authSvc = require("./service");
const { sending } = require("./dto");

// User input goes into HTML emails, so escape it.
const esc = (v = "") =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const row = (label, value) =>
  value ? `<tr><td style="padding:4px 16px 4px 0;color:#666"><strong>${label}</strong></td><td>${esc(value)}</td></tr>` : "";

class AuthController {
  register = async (req, res, next) => {
    try {
      // Validates (422 on bad input) and strips unknown fields.
      const data = await sending.validateAsync(req.body, { abortEarly: false, stripUnknown: true });
      const saved = await authSvc.createUser(data);
      const isQuote = saved.type === "quote";

      // 1) Confirmation to the customer.
      await mailSvc.sendEmail(
        saved.email,
        isQuote ? "We received your quote request" : "Thank you for reaching out",
        `
        <p>Dear ${esc(saved.name)},</p>
        <p>Thank you for contacting <strong>Code &amp; Concrete Construction</strong>. ${
          isQuote
            ? "We have received your quote request and will review the details."
            : "We have received your message."
        } We will get back to you shortly with the next steps.</p>
        ${
          isQuote
            ? `<table>${row("Service", saved.service)}${row("Location", saved.location)}${row("Budget", saved.budget)}${row("Timeline", saved.timeline)}</table>`
            : ""
        }
        <p>Best regards,<br/><strong>Code &amp; Concrete Construction Team</strong></p>
        <hr/>
        <p><small><em>Please do not reply to this email directly. For urgent matters, call or WhatsApp us on the numbers on our website.</em></small></p>
        `
      );

      // 2) Notification to the company (set ADMIN_EMAIL in .env; falls back to SMTP_FROM).
      const admin = process.env.ADMIN_EMAIL || process.env.SMTP_FROM;
      if (admin) {
        await mailSvc.sendEmail(
          admin,
          `${isQuote ? "New QUOTE request" : "New message"}: ${saved.name}${saved.service ? " · " + saved.service : ""}`,
          `
          <h3>${isQuote ? "New quote request" : "New message"}</h3>
          <table>
            ${row("Name", saved.name)}
            ${row("Email", saved.email)}
            ${row("Phone", saved.phone)}
            ${row("Service", saved.service)}
            ${row("Location", saved.location)}
            ${row("Budget", saved.budget)}
            ${row("Timeline", saved.timeline)}
          </table>
          <p><strong>Details:</strong></p>
          <p style="white-space:pre-wrap">${esc(saved.message)}</p>
          `,
          [],
          saved.email // hitting Reply answers the customer
        );
      }

      res.json({
        result: saved,
        message: isQuote ? "Quote request sent successfully." : "Message sent successfully.",
        meta: null,
      });
    } catch (exception) {
      console.error("Error in sending message:", exception);
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
