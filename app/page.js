// import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { FiArrowRight } from "react-icons/fi"

import Movie from "./components/Movie"

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  subsets: ['latin'] })


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const films = await data.json()
  console.log(films)

  return (
    <article className={`${poppins.className} mx-5`}>
      <h2 className='py-5 flex gap-x-2'>Popular Movies<FiArrowRight className='text-xl mt-0.5'/></h2>
      <article className="grid gap-16 grid-cols-fluid">
        {films.results.map(movie => (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
        ))}
      </article>
    </article>
  )
}
