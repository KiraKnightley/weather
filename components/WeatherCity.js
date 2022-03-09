import React from "react";
import {Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';


export default function WeatherCity({ cityName, setCityName, loadCity }) {

    return (
        <SafeAreaView style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setCityName}
                placeholder="Введите город"
            />
            <Text style={styles.inputText} onPress={() => loadCity(cityName)} >OK</Text>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 18,
    },
    input: {
        color: '#000000',
        fontSize: 15,
    },
    inputText: {
        color: '#1086FF',
        fontSize: 15,
    },
   });