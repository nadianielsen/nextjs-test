// "use client" 
// use client does work now, i think.
//I may have done something wrong while making the first next js project, idk?!
import Link from "next/link";

const Navigation = () => {

    return ( 
        <nav className="w-full h-12 flex absolute">
            <Link className="text-white" href={"/about"}>About</Link>        
            <Link className="text-white" href={"/projects"}>Projects</Link>        
            <Link className="text-white" href={"/contact"}>Contact</Link>        
        </nav>
     );
}
 
export default Navigation;