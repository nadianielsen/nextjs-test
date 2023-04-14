import Image from "next/image"


export async function generateStatic() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function Crew({params}) {
    const { movie } = params
    const imagePath = "http://image.tmdb.org/t/p/original"
                                                                                                     //next and revalidate stands for how quick or slow the fetch of the things the page will be when you click the link
    const data = await fetch(`https://api.themoviedb.org/3/person/${movie}?api_key=${process.env.API_KEY}`, { next: {revalidate: 0}})  
    const res = await data.json()

    return (
        <article>
            <Image src={res.profile_path}/>
        </article>
    )
}