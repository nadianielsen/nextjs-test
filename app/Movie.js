import Image from "next/image"
import Link from "next/link" // - you can customize etc... 


export default function Movie({ title, id, poster_path}) {
    
    const imagePath = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            <Link href={`/${id}`} className="relative">
                {/* width and height decides on how high the quality the images should be */}
                <Image src={imagePath + poster_path} width={800} height={800} alt={title} className="rounded-3xl hover:scale-110 transition-all hover:border-2 hover:border-white -z-50"/>
                <div>{}</div>
            </Link>
        </div>
    )
}

