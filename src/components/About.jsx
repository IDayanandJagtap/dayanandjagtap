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
                    alt="itachi-image"
                    id="aboutImg"
                />
            </section>
            <div className="about-text">
                <section className="about-text-header">
                    <h1>About me :</h1>
                    <p>
                        Peek behind the code! Im not just a developer; Im a tech
                        enthusiast on a mission. My journey? From curious coder
                        to creating dynamic web experiences. Lets build
                        something extraordinary together! Skills: Diving deep
                        into the tech ocean with skills like React for sleek
                        interfaces, Node.js for powerful backends, and MongoDB
                        for data magic. My toolkit is a blend of precision and
                        creativity.{" "}
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
