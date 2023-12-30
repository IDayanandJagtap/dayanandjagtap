// Font :
import { Ubuntu } from "next/font/google";
import "../styles/global.css";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500"],
    subsets: ["cyrillic", "latin"],
});

export const metadata = {
    title: "Dayanand Jagtap",
    description:
        "Web developer | Front-end | Back-end | Developer | Programmer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={ubuntu.className}>{children}</body>
        </html>
    );
}
