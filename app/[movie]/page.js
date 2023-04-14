import Image from "next/image"
import { FaCheckCircle , FaPlay} from "react-icons/fa"

export async function generateStatic() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

// making them static, so when the page is live to the public, it´ll render them out fast - premade - prerendered - i think that is what it means or see the video again to understand!!

export default async function MovieDetail({ params }) {
const { movie } = params
const imagePath = "http://image.tmdb.org/t/p/original"
                                                                                                     //next and revalidate stands for how quick or slow the fetch of the things the page will be when you click the link
const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: {revalidate: 0}})  
const res = await data.json()


const hours = Math.floor(res.runtime / 60)
const minutes = res.runtime % 60;

    return (
        <article>
            <div>
                <div className="w-full h-[35rem] sm:h-[40rem] relative bg-gradient-to-b from-transparent to-black/95">
                    <Image className="absolute w-full h-full object-cover -z-10 bg-blend-lighten" src={imagePath + res.backdrop_path} width={1000} height={1000} priority alt={res.title}/>
                </div>
                <article className="px-14 sm:px-4">
                    <div className="relative bottom-14">
                        <h2 className="text-3xl font-semibold">{res.title}</h2>
                    </div>
                    <div className="flex relative bottom-5 gap-10 ">
                        <h2 className="font-semibold flex gap-1">{res.status} <FaCheckCircle className="mt-1 text-green-500"/></h2>
                        <h2 className="">{res.release_date}</h2>
                        <h2 className="">{hours + "h" + minutes + "min"}</h2>
                        <button className="bg-red-600 hidden p-2 sm:flex gap-x-2 items-center rounded sm:relative sm:bottom-2">Play Trailer <FaPlay className="mt-1 text-sm"/> </button>
                    </div>
                    <p className="md:w-[50%]">{res.overview}</p>
                    <div>
                    </div>
                </article>
            </div>
        </article>
    )
}