import "@/styles/contact.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendMail } from "../../lib/emailJs";
import { useRef, useState } from "react";
import Toast from "./Toast";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
    const [isSending, setIsSending] = useState(false);
    const [onSubmitMsg, setOnSubmitMsg] = useState({
        status: "",
        msg: "Thank you for contacting me 😄. I'll reply you soon...",
    });
    const [isToastVisible, setIsToastVisible] = useState(0);
    const toastTimerRef = useRef(null);

    const emailRegx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleOnInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showToast = (msg, status, duration = 4000) => {
        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
            toastTimerRef.current = null;
        }

        setOnSubmitMsg({ status, msg });
        setIsToastVisible(1);

        if (typeof duration === "number" && duration > 0) {
            toastTimerRef.current = setTimeout(() => {
                setIsToastVisible(0);
            }, duration);
        }
    };

    const handleOnFormSubmit = async (e) => {
        e.preventDefault();

        if (isSending) {
            return;
        }

        document.body.style.cursor = "wait";
        setIsSending(true);

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
                "Thanks for reaching out. I'll get back to you soon.";

            showToast(msg, "success");
            setFormData({ name: "", email: "", msg: "" });
        } catch (e) {
            console.error("Contact form submit failed:", e);
            showToast("Something went wrong while sending your msg.", "error");
        } finally {
            setIsSending(false);
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
                            value={formData.name}
                            disabled={isSending}
                            onChange={handleOnInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@company.com"
                            required
                            value={formData.email}
                            disabled={isSending}
                            onChange={handleOnInputChange}
                        />
                        <label htmlFor="msg">Message</label>
                        <textarea
                            name="msg"
                            id="msg"
                            rows={10}
                            placeholder="Just saying hi!"
                            required
                            value={formData.msg}
                            disabled={isSending}
                            onChange={handleOnInputChange}
                        />
                        <button className="btn" type="submit" disabled={isSending}>
                            {isSending ? "Sending..." : "Send"}
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
                                "https://x.com/IDayanandJagtap"
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
