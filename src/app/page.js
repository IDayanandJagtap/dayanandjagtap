"use client";

import Home from "@/components/Home";
import { Navbar } from "@/components/header/Navbar";
import { useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState("naruto");

    const updateTheme = (currTheme) => {
        const root = document.documentElement;
        if (currTheme == "naruto") {
            root.style.setProperty("--primaryColor", "#fc4f00");
            root.style.setProperty("--secondaryColor", "#f1f1f1");
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
            root.style.setProperty("--primaryBackground", "#fafafa");
            root.style.setProperty("--secondaryBackground", "#e1e1e1");
            setTheme("hyuga");
        }
    };

    return (
        <>
            <Navbar updateTheme={updateTheme} theme={theme} />
            <Home />
            <div style={{ height: "1366px" }}></div>
        </>
    );
}
