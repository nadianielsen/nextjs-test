import Image from "next/image"

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
const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: {revalidate: 10}})  
const res = await data.json()

const hours = Math.floor(res.runtime / 60)
const minutes = res.runtime % 60;

    return (
        <article>
            <div>
                <div className="w-full h-[35rem] sm:h-[30rem] relative bg-gradient-to-b from-transparent to-black">
                    <Image className="absolute w-full h-full object-cover -z-10" src={imagePath + res.backdrop_path} width={1000} height={1000} priority/>
                </div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {hours + "h" + minutes + "min"}</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md ">{res.status}</h2>
                <p>{res.overview}</p>
            </div>
        </article>
    )
}