import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const upload = multer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Process file upload
  await new Promise((resolve, reject) => {
    upload.single("file")(req, {}, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });

  const { name, email, gender, jobRole } = req.body;
  const file = req.file;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Main email to HR
  const hrMailOptions = {
    from: {
      name: "Caffe Engineering",
      address: process.env.EMAIL_USER,
    },
    to: ["gestardo134@gmail.com" , "hrdept.caffeengineering2024@gmail.com"],
    subject: `${jobRole} Application`,
    html: `
      <div>
        <p>
          Hi, I'm <strong>${name}</strong>. I'm applying for the <strong>${jobRole}</strong> position.
          You can reach me at <strong>${email}</strong>. I’ve attached my resume for your review.
        </p>
      </div>
    `,
    attachments: file
      ? [
          {
            filename: file.originalname,
            content: file.buffer,
            contentType: file.mimetype,
          },
        ]
      : [],
  };

  // Auto-reply to applicant
  const autoReplyOptions = {
    from: {
      name: "Caffe Engineering",
      address: process.env.EMAIL_USER,
    },
    to: email,
    subject: `We have received your application (${jobRole})`,
    html: `
      <div>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for applying for the position <strong>${jobRole}</strong> at Caffe Engineering We are happy that you are interested in joining our company.</p>
        <p>We have received your application and will review it shortly. If you're shortlisted, we’ll contact you via this email: <strong>${email}</strong>.</p>
        <br />
        <p>Best regards,<br />Caffe Engineering HR Team</p>
        <br/>
        <p>This is a system generated email, please do not reply.
      </div>
    `,
  };

  try {
    // Send to HR
    const hrInfo = await transporter.sendMail(hrMailOptions);
    console.log("✅ Email sent to HR:", hrInfo.response);

    // Send auto-reply
    const replyInfo = await transporter.sendMail(autoReplyOptions);
    console.log("✅ Auto-reply sent to applicant:", replyInfo.response);

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
}
