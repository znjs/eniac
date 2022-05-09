import axios from "axios";

const sendMail = (name, time, user2, reply_to) => {
  var data = {
    service_id: "service_1dho54i",
    template_id: "template_sq5x7e3",
    user_id: "btvAL0UEptDbQ-O7E",
    template_params: {
      to_name: name,
      time,
      user2,
      reply_to: reply_to || "jasrikar@gmail.com",
    },
  };
  console.log(data);

  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  //   // eslint-disable-next-line no-undef
  //   fetch("https://api.emailjs.com/api/v1.0/email/send", {
  //     method: "post",
  //     body: JSON.stringify(data),
  //     headers: {
  //       contentType: "application/json",
  //     },
  //   })
  //     .then((res) => console.log(res.body))
  //     .catch((err) => console.error(err));
  //   $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
  //     type: "POST",
  //     data: JSON.stringify(data),
  //     contentType: "application/json",
  //   })
  //     .done(function () {
  //       alert("Your mail is sent!");
  //     })
  //     .fail(function (error) {
  //       alert("Oops... " + JSON.stringify(error));
  //     });
  // code fragment
};

export { sendMail };
