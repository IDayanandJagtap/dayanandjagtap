import emailjs from "@emailjs/browser";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

export const sendMail = async (name, email, description) => {
    const templateParams = {
        user_name: name,
        user_email: email,
        message: description,
    };
    console.log(publicKey);

    const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
    );

    return response;
};
