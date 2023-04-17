import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return ( 
        <footer className="w-full h-24 grid-rows-3 pt-10">
            <h3 className="flex justify-center item-center pt-2"><span className="w-20 bg-[#f2f2f24c] h-0.5 my-3 mx-2"></span> ©MovieBase {year} <span className="w-20 bg-[#f2f2f24c] h-0.5 my-3 mx-2"></span></h3>
            <article className="flex justify-center text-2xl gap-5 py-6">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
            </article>
            <article className="flex justify-center gap-x-12 pb-2 text-sm text-neutral-600">
                <Link href="/about">About Us</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/terms&conditions">Terms & Conditions</Link>
                <Link href="/privacy">Privacy</Link>
            </article>
        </footer>
     );
}
 
export default Footer;