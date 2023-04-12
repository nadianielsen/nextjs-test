// "use client" 
// use client does work now, i think.
//I may have done something wrong while making the first next js project, idk?!
import Link from "next/link";


const Navigation = () => {

    return ( 
        <nav className="w-full ">
            <Link href="/">MovieBase</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/tvseries">Tv Series</Link>
        </nav>
     );
}
 
export default Navigation;