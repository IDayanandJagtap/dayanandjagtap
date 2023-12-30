import "@/styles/contact.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
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
                        />
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="hokage@konoha.com"
                        />
                        <textarea
                            name="msg"
                            id=""
                            rows={5}
                            placeholder="Just saying hii !"
                        />
                        <button className="btn">Send</button>
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
        </section>
    );
};

export default Contact;
