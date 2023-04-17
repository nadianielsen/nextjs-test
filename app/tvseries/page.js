import FetchComponent from "../components/FetchComponent";

export default function Tvseries() {
    return (
        <article>
            <FetchComponent url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`} headline={`Top Rated Tv Series`}/>
            <FetchComponent url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}`} headline={`Tv Series on air right now`}/>
        </article>
    )
}