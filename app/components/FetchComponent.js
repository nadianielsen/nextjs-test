import Movie from "./Movie"
import { Poppins } from 'next/font/google'
import { FiArrowRight } from "react-icons/fi"

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  subsets: ['latin'] })

const FetchComponent = async ({url, headline}) => {

    const data = await fetch(url)
    const res = await data.json()

    return (
    <article className={`${poppins.className} mx-5 my-2`}>
            <h2 className='py-5 flex gap-x-2 text-xl'>{headline}<FiArrowRight className='text-xl mt-1'/></h2>
            <article className="grid gap-16 grid-cols-fluid">
                {res?.results?.map(movie => (
                    <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} />
                ))}
            </article>
        </article>
    )
}

export default FetchComponent;