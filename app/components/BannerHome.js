"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Bannertext from "./BannerText";
import Image from "next/image";
import BannerLoading from "./BannerLoading";
import Link from "next/link";


const BannerHome = ({id}) => {
    const [featured, setFeatured] = useState();
    const [backdrop, setBackdrop] = useState();
    const [reloadImage, setReloadImage] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                    // går ind og tager et tilfældigt billede 
        let randomMovie = Math.floor(Math.random() * 20)
        // hvis reloadImage, så vi får det her axios kald
        if(reloadImage) {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=75f15351c6119a96302b866663e596b0&language=en&page=1`)
            .then((response) => setFeatured(response.data.results[randomMovie]))
            .finally(() => setReloadImage(false))
        }
    }, [reloadImage]);

    useEffect(() => {
        if (featured) {
            axios(`https://api.themoviedb.org/3/movie/${featured.id}/images?api_key=75f15351c6119a96302b866663e596b0&language=en`)
            .then((response) => {
                // derfor den ikke skal return undefined, så vil der komme en blank box
                console.log(response.data)
                if (response.data.backdrops[0] !== undefined) {
                    setBackdrop(response.data.backdrops[0])
                } else {
                    setReloadImage(false)
                }
            })
            .finally(() => setLoading(false))
        }
    }, [featured]);

    // const {id} = useParams();

    // const {data: movie, error} = useAxios(`https://api.themoviedb.org/3/movie/${id}?api_key=75f15351c6119a96302b866663e596b0&language=en-US`)



    return loading ? <BannerLoading /> : ( 
        <Link href={`/${featured.id}`} >
            <div className="bg-transparent w-full sm:w-full sm:h-[80vh] flex justify-start items-end relative aspect-video bg-gradient-to-bl from-transparent to-black/95">
                <Bannertext />
                <Image src={`https://image.tmdb.org/t/p/original${backdrop?.file_path}`} alt="Banner with different movies" className="absolute w-full h-full object-cover -z-10" width={1000} height={1000}/>   
            </div>
        </Link>
     );
}
 
export default BannerHome;