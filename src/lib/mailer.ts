import nodemailer from "nodemailer";

export const sendMail = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: "FusionWorks <    >",
    to: process.env.GMAIL_ADDRESS,
    cc: to,
    subject,
    text,
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
