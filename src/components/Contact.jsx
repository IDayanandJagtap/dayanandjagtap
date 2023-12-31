import "@/styles/contact.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendMail } from "../../lib/emailJs";
import { useState } from "react";
import Toast from "./Toast";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
    const [onSubmitMsg, setOnSubmitMsg] = useState({
        status: "",
        msg: "Thank you for contacting me 😄. I'll reply you soon...",
    });
    const [isToastVisible, setIsToastVisible] = useState(0);

    const emailRegx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleOnInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showToast = (msg, status) => {
        setOnSubmitMsg({ status, msg });
        setIsToastVisible(1);
        setTimeout(() => {
            setIsToastVisible(0);
        }, 4000);
    };

    const handleOnFormSubmit = async (e) => {
        e.preventDefault();
        document.body.style.cursor = "wait";

        try {
            if (!formData.email.match(emailRegx)) {
                throw new Error("Email is not valid!");
            }

            const response = await sendMail(
                formData.name,
                formData.email,
                formData.msg
            );

            const msg =
                "Thank you for contacting me 😄. I'll reply you soon...";

            showToast(msg, "success");
        } catch (e) {
            showToast(e.message, "error");
            // console.log(e);
        } finally {
            document.body.style.cursor = "default";
        }
    };

    return (
        <section id="contact">
            <h1>Contact</h1>
            <div>
                <section className="contact-form">
                    <form className="flex flex-col justify-start">
                        <input
                            type="text"
                            name="name"
                            id=""
                            placeholder="Naruto Uzumaki"
                            onChange={handleOnInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="hokage@konoha.com"
                            onChange={handleOnInputChange}
                        />
                        <textarea
                            name="msg"
                            id=""
                            rows={10}
                            placeholder="Just saying hii !"
                            onChange={handleOnInputChange}
                        />
                        <button className="btn" onClick={handleOnFormSubmit}>
                            Send
                        </button>
                    </form>
                </section>
                <section className="contact-links">
                    {/* <h3>Socials</h3> */}
                    <div className="flex">
                        <Link
                            href={"https://github.com/IDayanandJagtap"}
                            target="_blank"
                            className="c-link"
                        >
                            <FaGithub size={32} />
                            <span>GitHub</span>
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/dayanand-jagtap-485502281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                            target="_blank"
                            className="c-link"
                        >
                            <FaLinkedin size={32} />
                            <span>LinkedIn</span>
                        </Link>
                        <Link
                            href={
                                "https://x.com/IDayanandJagtap?t=9whRp6I0Wb169Kqp-OMA7Q&s=09"
                            }
                            target="_blank"
                            className="c-link"
                        >
                            <FaXTwitter size={32} />
                            <span>Twitter ( X )</span>
                        </Link>
                    </div>
                </section>
            </div>
            {isToastVisible ? (
                <Toast message={onSubmitMsg.msg} status={onSubmitMsg.status} />
            ) : (
                <></>
            )}
        </section>
    );
};

export default Contact;
