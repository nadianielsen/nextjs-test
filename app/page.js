// import Image from 'next/image'
import FetchComponent from './components/FetchComponent'

const line1 = "Welcome to MovieBase"

const sentence = {
  hidden: { opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default async function Home() {
  return (
    <>
      <FetchComponent url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`} headline={"Popular Movies"}/>
      <FetchComponent url={`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`} headline={"Popular Tv Series"}/>
    </>
  )
}
