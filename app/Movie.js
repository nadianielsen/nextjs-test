import Image from "next/image"
import Link from "next/link" // - you can customize etc... 


export default function Movie({ title, id, poster_path, release_date}) {
    
    const imagePath = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                {/* width and height decides on how high the quality the images should be */}
                <Image src={imagePath + poster_path} width={800} height={800} alt={title} className="rounded-3xl hover:scale-110 transition-all -z-50"/>
            </Link>
        </div>
    )
}

