import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

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