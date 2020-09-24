import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {

     if(!results.length){
         return null;
     }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
               showsHorizontalScrollIndicator={false}
               horizontal
               data={results}
               keyExtractor={(result) => result.restaurant.id}
               renderItem={(item) => {
                   return (
                       <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{resid: item.item.restaurant})}>
                           <ResultsDetail result={item.item.restaurant}/>
                       </TouchableOpacity>
                   );
               }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: 'rgb(100,180,100)',
        alignContent: "center",
        borderBottomColor: 'red',
        borderRadius: 5
    },
    container: {
        marginBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        paddingBottom: 8,
        borderBottomWidth:3
    }
});

export default withNavigation(ResultsList);