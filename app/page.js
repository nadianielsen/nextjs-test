// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Movie from "./Movie"

// const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const films = await data.json()
  console.log(films)

  return (
    <main className="">
      <article className="grid gap-16 grid-cols-fluid">
        {films.results.map(movie => (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} release_date={movie.release_date}/>
        ))}
      </article>
    </main>
  )
}
