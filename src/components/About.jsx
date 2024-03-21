// "use client";
import { useState } from "react";
import "@/styles/about.css";
import Image from "next/image";
import Skills from "./AboutHelpers/Skills";
import Education from "./AboutHelpers/Education";
import Certifications from "./AboutHelpers/Certifications";

const About = ({ theme }) => {
    const [selectedSection, setSelectedSection] = useState("skills");

    return (
        <div className={theme + " about"} id="about">
            <section className="about-img">
                <Image
                    src={"/itachi-about.png"}
                    width={532}
                    height={532}
                    alt="itachi-uchiha-image-near-about-section"
                    id="aboutImg"
                />
            </section>
            <div className="about-text">
                <section className="about-text-header">
                    <h1>About me :</h1>
                    <p>
                        Hii, &nbsp;My name is Dayanand Jagtap, a developer. I
                        love many things and programming is one of them.{" "}
                        <br></br>I love to be called a &nbsp;
                        <i className="italicText">Problem solver</i> &nbsp;
                        rather than a programmer or a coder or any fancy name!
                        <br />
                        <br />
                        I am interested in solving problems and developing
                        solutions be it in any field, framework or language.
                        <br />
                        The only thing you need to know about me is &nbsp;
                        &quot; If you got an idea, I&apos;ll make it real .
                        &quot;&nbsp; that&apos;s all.
                        <br />
                        <br />
                        Currently I&apos;m mastering mern stack with all the
                        necessary libraries and NextJs as well.
                        <br />
                        Also trying to cook some basic DSA problems😉.
                        <br />
                    </p>
                    {/* Switching */}
                    <div className="about-buttonGroup">
                        <button
                            className={
                                selectedSection == "skills"
                                    ? "focusedBtn btn"
                                    : "btn"
                            }
                            onClick={() => setSelectedSection("skills")}
                        >
                            Skills
                        </button>
                        <button
                            className={
                                selectedSection == "education"
                                    ? "focusedBtn btn"
                                    : "btn"
                            }
                            onClick={() => setSelectedSection("education")}
                        >
                            Education
                        </button>
                        <button
                            className={
                                selectedSection == "certifications"
                                    ? "focusedBtn btn"
                                    : "btn"
                            }
                            onClick={() => setSelectedSection("certifications")}
                        >
                            Certifications
                        </button>
                    </div>
                </section>
                <section className="about-switchSection">
                    {selectedSection == "skills" && <Skills />}
                    {selectedSection == "education" && <Education />}
                    {selectedSection == "certifications" && <Certifications />}
                </section>
            </div>
        </div>
    );
};

export default About;
