import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "muhammadqqaasim@gmail.com", // 👈 yahan apna sahi Gmail
    pass: "hkuy yyni dkce izpz",       // 👈 yahan apna App Password
  },
});

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  try {
    // 👇 server side email
    await transporter.sendMail({
      from: "muhammadqqaasim@gmail.com",
      to: "muhammadqqaasim@gmail.com",  
      subject: "New Submission",
      text: `New subscriber: ${email}`,
    });

    // 👇 client side email
    await transporter.sendMail({
      from: "muhammadqqaasim@gmail.com", 
      to: email,                         
      subject: "Submission Successfull",
      text: "Thank you for your submission. We’ll contact you soon!",
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
