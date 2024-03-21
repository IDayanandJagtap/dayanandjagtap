"use client";

import { BiMenuAltRight } from "react-icons/bi";
import "@/styles/navbar.css";
import NavDrawer from "./NavDrawer";
import { useState } from "react";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin", "cyrillic-ext"], weight: "400" });
const navList = [
    {
        link: "#home",
        name: "Home",
    },
    {
        link: "#about",
        name: "About",
    },
    {
        link: "#project",
        name: "Projects",
    },
    {
        link: "#contact",
        name: "Contact",
    },
];

export const Navbar = ({ theme, updateTheme }) => {
    const [isNavOpen, setIsNavOpen] = useState(0);

    const handleNavOnOpen = () => {
        const navDrawer = document.getElementsByClassName("nav-drawer")[0];
        if (!isNavOpen) {
            setIsNavOpen(1);
            navDrawer.style.top = 0;
        }
    };
    const handleNavOnClose = () => {
        const navDrawer = document.getElementsByClassName("nav-drawer")[0];
        if (isNavOpen) {
            setIsNavOpen(0);
            navDrawer.style.top = "-200vh";
        }
    };

    const handleOnThemeChange = (event) => {
        updateTheme(event.target.value);
        handleNavOnClose();
    };
    // Event listener

    return (
        <nav className={"navbar flex justify-between align-center"}>
            <h1>DJ</h1>
            {/* for small screens */}
            <NavDrawer
                handleNavOnClose={handleNavOnClose}
                handleOnThemeChange={handleOnThemeChange}
                navList={navList}
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
                {navList.map((e) => {
                    return (
                        <Link key={e.link} href={e.link} className="link">
                            {e.name}
                        </Link>
                    );
                })}
            </div>

            <div className={"nav-btns flex align-center justify-end"}>
                <button
                    className={ubuntu.className + " btn nav-blog-btn "}
                    disabled={true}
                >
                    Blog
                </button>
                <select
                    className={
                        ubuntu.className +
                        " btn nav-themeSelectBtn flex justify-center align-center"
                    }
                    value={theme}
                    onChange={handleOnThemeChange}
                >
                    <option value={"hyuga"}>Hyuga</option>
                    <option value={"naruto"}>Naruto</option>
                    <option value={"uchiha"}>Itachi</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
