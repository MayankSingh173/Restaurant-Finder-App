import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={{ uri: result.thumb }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.user_rating.aggregate_rating} Star,  {result.all_reviews_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 10,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
    }
});

export default ResultsDetail;