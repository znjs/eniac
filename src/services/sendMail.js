import nodemailer from "nodemailer";

const sendMailToUsers = (...users) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_SUDO_EMAIL,
      pass: process.env.REACT_APP_SUDO_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.REACT_APP_SUDO_EMAIL,
    to: users.join(","),
    subject: "Test mail",
    html: `
    <div>
      <h3>Hey from Team NeoPortal</h3>
      <p style="color: purple;">
        Your interview has been scheduled at 27th May, 3PM
      </p>
      <p>Best Regards</p>
      <p>Team NeoPortal</p>
      <p style="color: red;">
        ***This is a machine generated mail, DONOT REPLY
      </p>
    </div>`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.error("Error Occurs");
    } else {
      console.error("Email sent successfully");
    }
  });
};

export { sendMailToUsers };
