import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Picker} from "@react-native-picker/picker";

export default function WeatherPicker({ unitsSystem, setUnitsSystem }) {

    function onBackground(){
        if (unitsSystem === 'metric'){
            return {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }
        } else {
            return {
                backgroundColor: 'none',
            }
        }
    }
    function offBackground(){
        if (unitsSystem === 'imperial'){
            return {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }
        } else {
            return {
                backgroundColor: 'none',
            }
        }
    }

    return (
        <View style={styles.weatherPicker}>
            <Text style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: 18}}>o</Text>
            <View style={[styles.weatherPickerBoxFirst, onBackground()]}>
                <TouchableOpacity onPress={() => setUnitsSystem('metric')}>
                    <Text style={styles.weatherPickerText}>C</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.weatherPickerBoxSecond, offBackground()]}>
                <TouchableOpacity onPress={() => setUnitsSystem('imperial')}>
                    <Text style={styles.weatherPickerText}>F</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherPicker: {
        flexDirection: 'row',
        width: 94,
    },
    weatherPickerBoxFirst: {
        marginLeft: 7,
        flexDirection: 'row',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    weatherPickerBoxSecond: {
        borderLeftWidth: 0,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 1,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    weatherPickerText: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 4,
        paddingBottom: 4,
        color: '#fff',
        fontSize: 18,
    },
})