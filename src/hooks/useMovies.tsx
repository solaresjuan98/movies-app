import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    //const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])
    //const [popularMovies, setPopularMovies] = useState<Movie[]>([])

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });


    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        const responses = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upcoming: responses[3].data.results
        })



        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading,
    }
}
