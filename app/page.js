// import Image from 'next/image'
import FetchComponent from './components/FetchComponent'



export default async function Home() {
  return (
    <>
      <FetchComponent url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`} headline={"Popular Movies"}/>
      <FetchComponent url={`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`} headline={"Popular Tv Series"}/>
    </>
  )
}
