
//import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');
export const HomeScreen = () => {

    const { nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="green" size={100} />
            </View>
        )
    }

    return (

        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Principal carousel */}
                <View>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                {/* Popular movies */}
                <HorizontalSlider title="Popularr" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upcoming} />

            </View>
        </ScrollView>

    )
}
