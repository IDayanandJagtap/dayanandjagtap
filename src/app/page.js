"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Execution from "@/components/Execution";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import ProjectSection from "@/components/ProjectSection";
import { Navbar } from "@/components/header/Navbar";
import { useEffect, useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState("fire");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("portfolio-theme");
        if (storedTheme === "fire" || storedTheme === "clarity") {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const updateTheme = (currTheme) => {
        setTheme(currTheme);
    };

    return (
        <main className={`portfolio-page theme-${theme}`}>
            <Navbar updateTheme={updateTheme} theme={theme} />
            <Home />
            <About theme={theme} />
            <ProjectSection />
            <Execution />
            <Contact />
            <Footer />
        </main>
    );
}
