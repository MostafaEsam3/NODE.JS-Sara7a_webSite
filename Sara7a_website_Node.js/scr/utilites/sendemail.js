import nodemailer from 'nodemailer'
import template from './template.js';

export default async function sendEmail(optin) {

    const transporter = nodemailer.createTransport({
       service:"gmail",
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "mostafaesam3001@gmail.com",
          pass: "ggsw arvy tmbs aicd",
        },
      });
     
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Fred Foo 👻" <mostafaesam3001@gmail.com>', // sender address
          to: optin.email,
          subject: "Hello ✔", // Subject line
          text: "mooooooooo", // plain text body
          html: template(optin.url), // html body
        });
      
        // console.log("Message sent: %s", info.messageId);
    
}

