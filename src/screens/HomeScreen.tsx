
//import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';


const { width: windowWidth } = Dimensions.get('window');
export const HomeScreen = () => {

    const { nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        //const colors = await ImageColors.getColors(uri, {});
        //console.log(colors);
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="green" size={100} />
            </View>
        )
    }

    return (

        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>

                    {/* Principal carousel */}
                    <View>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>

                    {/* Popular movies */}
                    <HorizontalSlider title="Popular" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>


    )
}
