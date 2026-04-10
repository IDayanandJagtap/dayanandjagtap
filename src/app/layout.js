import { Manrope, Space_Grotesk } from "next/font/google";
import "../styles/global.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
});

export const metadata = {
    title: "Dayanand Jagtap",
    description: "Backend-focused portfolio built around systems thinking.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
                {children}
            </body>
        </html>
    );
}
