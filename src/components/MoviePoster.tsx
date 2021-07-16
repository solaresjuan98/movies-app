import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height=420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{
            width, 
            height,
            marginHorizontal: 7
            //backgroundColor: '#ccc'
        }}>

            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10
    }
});