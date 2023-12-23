import nodemailer from "nodemailer"
import fs from "fs"
async function sendMail(){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"saikirank.dev@gmail.com",
            pass:"ahazvbntvwfqemga",
        }
    });
    const data = fs.readFileSync("index.html").toString()
    const mailOptions={
        from  :"saikirank.dev@gmail.com",
        to: "saikirank.dev@gmail.com",
        subject:"welcome to nodejs app",
        text:"this is a email using nodemailer in nodejs",
    }
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (err) {
        console.log("email sent failed with error"+err)
    }

}
sendMail()