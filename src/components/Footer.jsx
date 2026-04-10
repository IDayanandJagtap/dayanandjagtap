import { MdArrowUpward } from "react-icons/md";
import "@/styles/footer.css";
import Link from "next/link";
import { footerSignal } from "@/data/portfolioContent";
const Footer = () => {
    return (
        <section id="footer" className="flex justify-between align-center">
            <p>
                Since Aug, 2003 <br></br>
                {footerSignal}
            </p>
            <Link href={"#home"} className="flex center">
                <MdArrowUpward size={20} />
            </Link>
        </section>
    );
};

export default Footer;
