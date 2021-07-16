
//import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


const { width: windowWidth } = Dimensions.get('window');
export const HomeScreen = () => {

    const { nowPlayingMovies, isLoading } = useMovies();
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
                        data={nowPlayingMovies}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                {/* Popular movies */}
                <View style={{ backgroundColor: '#ccc', height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10 }}>Now Playing</Text>
                    <FlatList
                        data={nowPlayingMovies}
                        renderItem={({ item }: any) =>
                            (<MoviePoster movie={item} width={140} height={200} />)
                        }
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                

            </View>
        </ScrollView>

    )
}
