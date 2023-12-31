import emailjs from "@emailjs/browser";

const publicKey = "HCRrJwaYobv6PvyYO";
const serviceId = "service_wafs6f3";
const templateId = "template_yyo6wrd";

export const sendMail = async (name, email, description) => {
    const templateParams = {
        user_name: name,
        user_email: email,
        message: description,
    };

    const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
    );

    return response;
};
