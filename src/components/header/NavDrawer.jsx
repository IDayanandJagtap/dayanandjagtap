import Link from "next/link";
import "@/styles/navbar.css";
export const NavDrawer = ({
    isOpen,
    handleNavOnClose,
    handleOnThemeChange,
    handleThemeSelect,
    activeSection,
    handleOnNavLinkClick,
    navList,
    theme,
}) => {
    return (
        <div className={`nav-drawer flex flex-col justify-between align-center ${isOpen ? "open" : ""}`}>
            <button className="nav-drawer-closeBtn" onClick={handleNavOnClose}>
                Close
            </button>
            <div className="nav-drawer-links flex flex-col justify-between align-center">
                {navList.map((e) => {
                    return (
                        <Link
                            key={e.link}
                            href={e.link}
                            className={
                                activeSection === e.link
                                    ? "link active"
                                    : "link"
                            }
                            onClick={() => {
                                handleOnNavLinkClick(e.link);
                                handleNavOnClose();
                            }}
                        >
                            {e.name}
                        </Link>
                    );
                })}
            </div>

            <div className="nav-drawer-themeSelecter">
                <h3>Theme</h3>
                <div className="theme-switcher">
                    <button
                        type="button"
                        className={theme == "clarity" ? "theme-chip active" : "theme-chip"}
                        onClick={() => handleThemeSelect("clarity")}
                    >
                        Clarity
                    </button>
                    <button
                        type="button"
                        className={theme == "fire" ? "theme-chip active" : "theme-chip"}
                        onClick={() => handleThemeSelect("fire")}
                    >
                        Fire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavDrawer;
