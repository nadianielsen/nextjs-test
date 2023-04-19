// "use client" 
// use client does work now, i think.
//I may have done something wrong while making the first next js project, idk?!
"use client"
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi"
import { Montserrat } from "next/font/google"
import { useRouter } from "next/router";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const Navigation = () => {

    const router = useRouter;
    const currentRoute = router.pathname;
      
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => setIsOpen(!isOpen)

    return ( 
        <>
        <div className="w-full h-24 flex items-center justify-between md:hidden">
            <Link href="/" className={`${montserrat.className} ml-5 text-xl font-bold`}>Movie<span className="text-red-600">Base</span></Link>
            <BiMenuAltRight className="cursor-pointer text-4xl mr-5" onClick={handleMenuToggle}/>
        </div>
        <nav className={` ${isOpen ? "flex" : "hidden"} absolute top-full left-0 bg-red-600/75 backdrop-blur-[2px] w-screen py-4 flex-col gap-5 items-center md:bg-transparent md:static md:w-auto md:flex-row md:flex md:px-5 md:pt-8`}>
            <Link href="/" className={`${montserrat.className} text-2xl hidden md:block font-bold`}>Movie<span className="text-red-600">Base</span></Link>
            <Link href="/movies" className="hover:text-red-600 transition-all">Movies</Link>
            <Link href="/tvseries" className="hover:text-red-600 transition-all">Tv Series</Link>
        </nav>
        </>
     );
}
 
export default Navigation;