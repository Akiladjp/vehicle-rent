import { MailtrapClient } from "mailtrap";
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";
import { html } from "framer-motion/client";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent Successfully", response.to);
  } catch (error) {
    console.log("Email sending verification email : ", error);
  }
};


export const sendWelcomeEmail = async(email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "06fb046d-d970-4750-9456-623ac76c780e",
            template_variables: {
                contact_info_name: "Ceylon Car Rental",
                name: name,
            }
        });
    } catch (error) {
        console.log(`Error sending welocome email`, error);
    }
}


export const sendPasswordResetEmail = async(email, resetURL) => {

  try {
    
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    })

  } catch (error) {
    res.status(500).json({message:"Error in send reset code section"})
  }
}