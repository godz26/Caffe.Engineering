import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Setup multer middleware
const upload = multer();

export const config = {
  api: {
    bodyParser: false, // Required for multer to process multipart/form-data
  },
};

// Main handler function
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Wrap multer in a promise
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

  const mailOptions = {
    from: {
      name: "Caffe Engineering",
      address: process.env.EMAIL_USER,
    },
    to: ["gestardo134@gmail.com", "hrdept.caffeengineering2024@gmail.com"],
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

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
}
