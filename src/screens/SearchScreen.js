import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    }

    return (
        <View style={{flex: 1}}>
            <View> 
               <StatusBar translucent backgroundColor="rgba(0,0,0,0.8)"/>
            </View>
            <SearchBar 
              term={term} 
              onTermChange={setTerm}
              onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice(2)}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice(3)}
                />
                <ResultsList 
                    title="Big Spender"
                    results={filterResultsByPrice(4)}
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({});

export default SearchScreen;