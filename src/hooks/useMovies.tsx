import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])

    const getMovies = async () => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const movies = resp.data.results;
        setNowPlayingMovies(movies);
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        nowPlayingMovies,
        isLoading
    }
}
