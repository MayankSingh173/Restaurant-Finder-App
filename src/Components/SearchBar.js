import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconSize}/>
            <TextInput 
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputStyle} 
              placeholder="Search"
              value = {term}
              onChangeText = {onTermChange}
              onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgba(0,0,0,0.08)',
        height: 45,
        borderRadius: 30,
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderWidth: 1,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconSize: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;