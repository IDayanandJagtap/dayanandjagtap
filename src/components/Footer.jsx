import { MdArrowUpward } from "react-icons/md";
import "@/styles/footer.css";
import Link from "next/link";
const Footer = () => {
    return (
        <section id="footer" className="flex justify-between align-center">
            <h3>Dayanand Jagtap</h3>
            <p>Since Aug, 2003</p>
            <Link href={"#home"} className="flex center">
                <MdArrowUpward size={20} />
            </Link>
        </section>
    );
};

export default Footer;
