

require("dotenv").config();
const mailSvc = require("../services/mail.services");
const authSvc = require("./service");

class AuthController {
  register = async (req, res, next) => {
    try {
      console.log("Incoming Request Body:", req.body);

      const data = authSvc.transformRegisterData(req);
      console.log("Transformed Data for Registration:", data);

      const registeredData = await authSvc.createUser(data);

     
      await mailSvc.sendEmail(
        registeredData.email,
        "Thank You for Reaching Out!",
        `
        <p>Dear ${registeredData.name || "Valued Client"},</p>
        <p>Thank you for contacting <strong>Code & Concrete Construction</strong>. We appreciate your interest in collaborating with us.</p>
        <p>Our team has received your message and will review your request carefully. We will get back to you shortly with the next steps or any additional information needed.</p>
        <p>We look forward to the opportunity to work with you.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Code & Concrete Construction Team</strong></p>
        <hr/>
        <p><small><em>Please do not reply to this email directly. For further assistance, contact us at [your support email/phone].</em></small></p>
        <br/>
        <h3>📩 New Inquiry Details (for Admin)</h3>
        <p><strong>Name:</strong> ${registeredData.name || "N/A"}</p>
        <p><strong>Email:</strong> ${registeredData.email || "N/A"}</p>
        <p><strong>Message:</strong> ${req.body.message || "No message provided"}</p>
        `,
        ["nehushah12@gmail.com"] 
      );

      res.json({
        result: registeredData,
        message: "Message sent successfully.",
        meta: null,
      });
    } catch (exception) {
      console.error("Error in sending message:", exception);
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;


// // controller.js

// require("dotenv").config()
// const mailSvc = require('../services/mail.services')
// const authSvc = require("./service");


// class AuthController {


//     register = async (req, res, next) => {
//         try {

//             console.log("Incoming Request Body:", req.body);

//             const data = authSvc.transformRegisterData(req);
//             console.log("Transformed Data for Registration:", data);


//             const registeredData = await authSvc.createUser(data);


//             await mailSvc.sendEmail(
//                 registeredData.email,
//                 "Thank You for Reaching Out!",
//                 `Dear ${registeredData.name || "Valued Client"},<br/><br/>

// Thank you for contacting Code & Concrete Construction. We appreciate your interest in collaborating with us.<br/><br/>
// Our team has received your message and will review your request carefully. We will get back to you shortly with the next steps or any additional information needed.<br/><br/>
// We look forward to the opportunity to work with you.<br/><br/>
// Best regards,<br/>
// <p>Code & Concrete Construction Team</p>
// <p><small><em>Please do not reply to this email directly. For further assistance, contact us at [your support email/phone].</em></small></p>`

//             );


//             res.json({
//                 result: registeredData,
//                 message: "Message success",
//                 meta: null,
//             });
//         } catch (exception) {
//             console.error("Error in sending message:", exception);
//             next(exception);
//         }
//     };
// }
// const authCtrl = new AuthController()
// module.exports = authCtrl



// controller.js
