import emailjs from "@emailjs/browser";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

export const sendMail = async (name, email, description) => {
    if (!publicKey || !serviceId || !templateId) {
        throw new Error(
            "Email service is not configured. Please add EmailJS environment variables."
        );
    }

    const templateParams = {
        user_name: name,
        user_email: email,
        message: description,
    };

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );

        return response;
    } catch (error) {
        const rawMessage =
            error?.text ||
            error?.message ||
            "Unable to send message right now.";
        const normalized = String(rawMessage).toLowerCase();

        if (normalized.includes("service id not found")) {
            throw new Error(
                "EmailJS Service ID is invalid or belongs to a different EmailJS account. Check Service ID and Public Key in your dashboard and .env.local."
            );
        }

        if (normalized.includes("template") && normalized.includes("not found")) {
            throw new Error(
                "EmailJS Template ID was not found. Please verify the template ID in your EmailJS dashboard."
            );
        }

        if (normalized.includes("public key") || normalized.includes("user id")) {
            throw new Error(
                "EmailJS Public Key is invalid. Please verify NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local."
            );
        }

        throw new Error(rawMessage);
    }
};
