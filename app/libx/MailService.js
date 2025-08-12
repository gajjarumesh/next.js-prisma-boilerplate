import nodemailer from "nodemailer";
/**
 *  MailServices - Utility class to send email
 */
class MailService {
    /**
     * send mail to receiver
     * @param {string} to 
     * @param {string} subject 
     * @param {string} html 
     */
  static async sendMail(to, subject, html) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `${process.env.APP_NAME} <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
  }
}

export default MailService;
