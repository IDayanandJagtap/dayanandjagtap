"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import ProjectSection from "@/components/ProjectSection";
import { Navbar } from "@/components/header/Navbar";
import { useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState("naruto");

    const updateTheme = (currTheme) => {
        const root = document.documentElement;
        if (currTheme == "naruto") {
            root.style.setProperty("--primaryColor", "#fc4f00");
            root.style.setProperty("--secondaryColor", "#f1f1f1");
            root.style.setProperty("--tertiaryColor", "#f1f1f185");
            root.style.setProperty("--primaryBackground", "#1e1e1e");
            root.style.setProperty("--secondaryBackground", "#111");
            setTheme("naruto");
        } else if (currTheme == "uchiha") {
            root.style.setProperty("--primaryColor", "#ff0000");
            root.style.setProperty("--secondaryColor", "#f1f1f1");
            root.style.setProperty("--primaryBackground", "#000");
            root.style.setProperty("--secondaryBackground", "#111");
            setTheme("uchiha");
        } else {
            root.style.setProperty("--primaryColor", "#a020f0");
            root.style.setProperty("--secondaryColor", "#1e1e1e");
            root.style.setProperty("--tertiaryColor", "#b4b4b4");
            root.style.setProperty("--primaryBackground", "#fafafa");
            root.style.setProperty("--secondaryBackground", "#e1e1e1");
            setTheme("hyuga");
        }
    };

    return (
        <>
            <Navbar updateTheme={updateTheme} theme={theme} />
            <Home />
            <About theme={theme} />
            <ProjectSection />
            <Contact />
            <Footer />
            {/* <div style={{ height: "400px" }}></div> */}
        </>
    );
}
