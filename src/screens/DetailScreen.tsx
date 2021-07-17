import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { RootStackParams } from '../navigation/Navigation';
//import { Ionicons } from '@expo/vector-icons';
import { MovieDetails } from '../components/MovieDetails';
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMoviesDetails(movie.id);


    return (

        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                isLoading ?
                    <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} /> :
                    <MovieDetails movieFull={movieFull!} cast={cast} />

            }

            {/* Close button */}
            <View>
                <Ionicons
                style={styles.backButton} 
                color="black" 
                name="arrow-back-outline" 
                size={70} />
            </View>
            
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#ccc',
        //overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.7,
        //paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 1,
        color: '#ccc'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 20
    }
});