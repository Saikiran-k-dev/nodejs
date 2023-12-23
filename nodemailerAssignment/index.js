// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  const r1 = readline.createInterface(
    {
      input: process.stdin,
      output:process.stdout,
    }
  );

  r1.question("please enter your email ",async (userInput)=>{
    

  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"codingninjas2k16@gmail.com",
      pass:"slwvvlczduktvhdj"
    },
  }) ;
  const mailOptions = {
    from:"codingninjas2k16@gmail.com",
    to:userInput,
    subject:"Coding Ninjas",
    text:"The world has enough coders; be a coding ninja!",
  }
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Success Email sent to "+userInput)
  } catch (error) {
    console.log("mail not sent"+error)
  }
  r1.close()
  })
};

export default Solution;
