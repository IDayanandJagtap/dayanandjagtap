// Font :
import { Baloo_2 } from "next/font/google";
import "../styles/global.css";

const baloo = Baloo_2({ subsets: ["latin"] });

export const metadata = {
    title: "Dayanand Jagtap",
    description:
        "Web developer | Front-end | Back-end | Developer | Programmer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={baloo.className}>{children}</body>
        </html>
    );
}
