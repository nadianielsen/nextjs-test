// import Image from 'next/image'
// import Bannertext from './components/BannerText'
import BannerHome from './components/BannerHome'
import FetchComponent from './components/FetchComponent'



export default async function Home() {
  return (
    <>
    {/* <Bannertext /> */}
    <BannerHome />
      <FetchComponent url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`} headline={"Popular Movies"}/>
      <FetchComponent url={`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`} headline={"Popular Tv Series"}/>
    </>
  )
}
