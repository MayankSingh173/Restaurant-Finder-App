import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({navigation}) => {
    const result = navigation.getParam('resid');

    // const [result, setResult] = useState([]);

    // const getResult = async (id) =>{
    //     const response = await zomato.get(`/restaurant?res_id=${id}`)
    //     setResult(response.data);
    //     console.log(response.data);
    // };

    // useEffect(() => {
    //     getResult(id);
    // }, [])

    if(!result){
        return null;
    }

    return (
        <>
            <ScrollView style={{marginLeft: 15}}>
                <Image style={styles.image} source={{ uri: result.thumb }}/>
                <Text style={styles.title}>{result.name}</Text>
                <View>
                    <Text style={styles.locationStyle}>Location</Text>
                    <Text style={styles.addressStyle}>{result.location.address}</Text>
                </View>
                <View>
                    <Text style={styles.locationStyle}>Timings</Text>
                    <Text style={styles.addressStyle}>{result.timings}</Text>
                </View>
                <View>
                    <Text style={styles.locationStyle}>Cuisines</Text>
                    <Text style={styles.addressStyle}>{result.cuisines}</Text>
                </View>
                <View>
                    <Text style={styles.locationStyle}>Average Cost For Two</Text>
                    <Text style={styles.addressStyle}>Rs.{result.average_cost_for_two}</Text>
                </View>
                <View>
                    <Text style={styles.locationStyle}>Highlights</Text>
                    <FlatList 
                        data={result.highlights}
                        keyExtractor={it => it}
                        renderItem={({item}) => {
                            return <Text style={styles.listStyle}>{item}</Text>
                        }}
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10}}>Contact No. </Text>
                    <Text style={styles.addressStyle}>{result.phone_numbers}</Text>
                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 15,
        marginTop: 20
    },
    locationStyle: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    addressStyle: {
        marginTop: 2,
        fontSize: 15,
        marginBottom: 10,
        flex: 1
    },
    listStyle: {
        fontSize: 15,
        flex: 1
    }
});

export default ResultsShowScreen;