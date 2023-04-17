import FetchComponent from "../components/FetchComponent";

export default function Movies() {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const date = new Date()

    const month = date.getMonth()

    return (
       <div>
        <FetchComponent url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`} headline={"Upcoming Movies"}/>
        <FetchComponent url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`} headline={`Top Rated Movies This ${monthNames[month]}`}/>
       </div>
    )
}