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

            if (!formData.name.trim() || !formData.msg.trim()) {
                throw new Error("Name and message are required.");
            }

            await sendMail(
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
        <section id="contact" className="contact section-shell">
            <header className="section-heading">
                <p className="eyebrow">Contact</p>
                <h2>If you have a hard problem, send it over.</h2>
                <p>
                    I respond best to work that needs a clear system shape, a
                    practical plan, or a careful tradeoff discussion.
                </p>
            </header>
            <div className="contact-layout">
                <section className="contact-form">
                    <form className="contact-card flex flex-col justify-start" onSubmit={handleOnFormSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                            onChange={handleOnInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@company.com"
                            required
                            onChange={handleOnInputChange}
                        />
                        <label htmlFor="msg">Message</label>
                        <textarea
                            name="msg"
                            id="msg"
                            rows={10}
                            placeholder="What are you trying to build or fix?"
                            required
                            onChange={handleOnInputChange}
                        />
                        <button className="btn" type="submit">
                            Send
                        </button>
                    </form>
                </section>
                <section className="contact-links">
                    <div className="contact-note">
                        <h3>Signals I keep active</h3>
                        <p>
                            I am usually around backend engineering, cloud
                            architecture, data flows, and security-minded
                            systems work.
                        </p>
                    </div>
                    <div className="flex contact-socialRow">
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
