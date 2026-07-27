"use client";

import { useEffect, useState } from "react";

// Shared theme state: reads the persisted choice, applies it to the document
// root, and keeps localStorage in sync. Used by the home page and every
// case-study page so the theme stays consistent across routes.
export function useTheme() {
    const [theme, setTheme] = useState("Dark");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("portfolio-theme");
        if (storedTheme === "Dark" || storedTheme === "Light") {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    return [theme, setTheme];
}

export default useTheme;
