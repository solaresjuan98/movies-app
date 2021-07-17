import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
   
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    

    return (
        <View style={styles.imageContainer}>
            <Image source={{uri}} style={styles.posterImage} />
        </View>
    )
}


const styles = StyleSheet.create({
    posterImage:{
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: screenHeight *0.7
    }
});