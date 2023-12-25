import Link from "next/link";
import "@/styles/navbar.css";
export const NavDrawer = ({
    handleNavOnClose,
    handleOnThemeChange,
    navList,
    theme,
}) => {
    return (
        <div className="nav-drawer flex flex-col justify-between align-center">
            <h1 className="nav-drawer-closeBtn" onClick={handleNavOnClose}>
                X
            </h1>
            <div className="nav-drawer-links flex flex-col justify-between align-center">
                {navList.map((e) => {
                    return (
                        <Link key={e.link} href={e.link} className="link">
                            {e.name}
                        </Link>
                    );
                })}
            </div>

            <div className="nav-drawer-themeSelecter">
                <h3>Theme :</h3>
                <div className="radio-group flex justify-between align-center">
                    <div className="radio-input">
                        <input
                            type="radio"
                            name="themeMobile"
                            value={"hyuga"}
                            onChange={handleOnThemeChange}
                            checked={theme == "hyuga"}
                        />
                        Hyuga
                    </div>
                    <div className="radio-input">
                        <input
                            type="radio"
                            name="themeMobile"
                            value={"naruto"}
                            onChange={handleOnThemeChange}
                            checked={theme == "naruto"}
                        />{" "}
                        Naruto
                    </div>
                    <div className="radio-input">
                        <input
                            type="radio"
                            name="themeMobile"
                            value={"uchiha"}
                            onChange={handleOnThemeChange}
                            checked={theme == "uchiha"}
                        />
                        Itachi
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavDrawer;
