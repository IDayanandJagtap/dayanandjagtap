"use client";

import { BiMenuAltRight } from "react-icons/bi";
import "@/styles/navbar.css";
import NavDrawer from "./NavDrawer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/portfolioContent";

export const Navbar = ({ theme, updateTheme }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const sectionIds = navLinks.map((item) => item.link);
        const sectionElements = sectionIds.map((id) => document.querySelector(id));

        if (!sectionElements.some(Boolean)) {
            return undefined;
        }

        const updateActiveFromScroll = () => {
            const probeLine = window.scrollY + window.innerHeight * 0.34;
            let current = sectionIds[0];

            sectionElements.forEach((section, index) => {
                if (!section) {
                    return;
                }

                if (section.offsetTop <= probeLine) {
                    current = sectionIds[index];
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", updateActiveFromScroll, {
            passive: true,
        });
        window.addEventListener("resize", updateActiveFromScroll);
        updateActiveFromScroll();

        return () => {
            window.removeEventListener("scroll", updateActiveFromScroll);
            window.removeEventListener("resize", updateActiveFromScroll);
        };
    }, []);

    const handleNavOnOpen = () => {
        setIsNavOpen(true);
    };
    const handleNavOnClose = () => {
        setIsNavOpen(false);
    };

    const handleOnThemeChange = (event) => {
        updateTheme(event.target.value);
        handleNavOnClose();
    };

    const handleThemeSelect = (value) => {
        updateTheme(value);
        handleNavOnClose();
        setIsThemeMenuOpen(false);
    };

    const handleOnNavLinkClick = (link) => {
        setActiveSection(link);
    };

    return (
        <nav className={"navbar flex justify-between align-center"}>
            <Link href="#home" className="brand">
                DJ
            </Link>
            {/* for small screens */}
            <NavDrawer
                isOpen={isNavOpen}
                handleNavOnClose={handleNavOnClose}
                handleOnThemeChange={handleOnThemeChange}
                handleThemeSelect={handleThemeSelect}
                activeSection={activeSection}
                handleOnNavLinkClick={handleOnNavLinkClick}
                navList={navLinks}
                theme={theme}
            />
            <div className="nav-menu center">
                <BiMenuAltRight
                    className="nav-menuIcon"
                    size={32}
                    onClick={handleNavOnOpen}
                />
            </div>

            {/* for large screens */}
            <div className="nav-drawer-links nav-links justify-around align-center">
                {navLinks.map((e) => {
                    return (
                        <Link
                            key={e.link}
                            href={e.link}
                            className={
                                activeSection === e.link
                                    ? "link active"
                                    : "link"
                            }
                            onClick={() => handleOnNavLinkClick(e.link)}
                        >
                            {e.name}
                        </Link>
                    );
                })}
            </div>

            <div className={"nav-btns flex align-center justify-end"}>
                <button
                    className={"btn nav-blog-btn "}
                    disabled={true}
                >
                    Writing soon
                </button>
                <div className="nav-themeSelect">
                    <button
                        type="button"
                        className="btn nav-themeSelectBtn flex justify-center align-center"
                        onClick={() => setIsThemeMenuOpen((prev) => !prev)}
                    >
                        {theme === "clarity" ? "Clarity" : "Fire"}
                    </button>
                    {isThemeMenuOpen && (
                        <div className="nav-themeMenu">
                            <button
                                type="button"
                                className={
                                    theme === "clarity"
                                        ? "nav-themeOption active"
                                        : "nav-themeOption"
                                }
                                onClick={() => handleThemeSelect("clarity")}
                            >
                                Clarity
                            </button>
                            <button
                                type="button"
                                className={
                                    theme === "fire"
                                        ? "nav-themeOption active"
                                        : "nav-themeOption"
                                }
                                onClick={() => handleThemeSelect("fire")}
                            >
                                Fire
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
