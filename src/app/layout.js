import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/global.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata = {
    title: "Dayanand Jagtap",
    description: "Backend-focused portfolio built around systems thinking.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${plusJakartaSans.variable} ${outfit.variable}`}
        >
            <body>
                {children}
            </body>
        </html>
    );
}
