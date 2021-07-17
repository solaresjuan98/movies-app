import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import currencyFormatter from 'currency-formatter';
import { View, Text } from 'react-native';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';



interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

    //console.log(cast[0]);
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="star-outline" color="gray" size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 10 }}>
                        - {
                            movieFull.genres.map(i => i.name).join(', ')
                        }
                    </Text>
                    <Text style={{ marginLeft: 10}}>
                        {movieFull.release_date}
                    </Text>
                </View>

                {/* Movie Story  */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Movie Plot
                </Text>

                {/* Overview */}
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>


                {/* Budget */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Budget
                </Text>

                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>

                {/* Cast */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 10 }}>
                        Actors
                    </Text>
                    
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10}}
                        />

                </View>

            </View>

        </>
    )
}
