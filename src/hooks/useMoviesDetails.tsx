import { useState, useEffect } from 'react';
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';


interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {

    const initialState: MovieDetails = {
        isLoading: true,
        movieFull: undefined,
        cast: []
    }

    const [state, setState] = useState<MovieDetails>(initialState);


    //console.log(movieId);

    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const movieCreditsPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetails, movieCredits] = await Promise.all([movieDetailsPromise, movieCreditsPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetails.data,
            cast: movieCredits.data.cast
        })
        //console.log(movieDetailsResp.data.overview);
    }

    useEffect(() => {
        getMovieDetails();

    }, []);


    return {
        ...state
    }
}
