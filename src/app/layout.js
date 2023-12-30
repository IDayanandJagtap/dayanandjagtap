// Font :
import { Inter, Ubuntu } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
    subsets: ["latin", "cyrillic-ext"],
    weight: ["300", "400"],
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
