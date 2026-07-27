"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Execution from "@/components/Execution";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import ProjectSection from "@/components/ProjectSection";
import { Navbar } from "@/components/header/Navbar";
import { useTheme } from "@/lib/useTheme";
import { useEffect } from "react";

export default function Page() {
    const [theme, setTheme] = useTheme();

    useEffect(() => {
        // Setup scroll-triggered animations with Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections that have fade-in class for scroll-triggered animations
        const sections = document.querySelectorAll("section.section-shell.fade-in");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const updateTheme = setTheme;

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
