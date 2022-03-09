import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Picker} from "@react-native-picker/picker";

export default function WeatherPicker({ unitsSystem, setUnitsSystem }) {


    function changeUnit(props) {
        if('metric'){
            setUnitsSystem('metric');
        } else {
            setUnitsSystem('imperial')
        }
    }
    return (
        <View style={styles.weatherPicker}>
            <Picker
                selectedValue={unitsSystem}
                mode="dropdown"
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setUnitsSystem(itemValue)}
            >
                <Picker.Item label="C" value="metric" />
                <Picker.Item label="F" value="imperial" />
            </Picker>
        </View>
    )

    // return (
    //     <View style={styles.weatherPicker}>
    //         <Text style={{color: '#fff', fontSize: 18}}>o</Text>
    //         <View style={styles.weatherPickerBoxFirst}>
    //             <Text style={[styles.weatherPickerText, styles.weatherDynamic]} onPress={() => changeUnit('metric')}>C</Text>
    //         </View>
    //         <View style={styles.weatherPickerBoxSecond}>
    //             <Text style={styles.weatherPickerText} onPress={() => changeUnit('imperial')}>F</Text>
    //         </View>
    //     </View>
    // )
}
const styles = StyleSheet.create({
    weatherPicker: {
        flexDirection: 'row',
        width: 94,
    },
    weatherPickerBoxFirst: {
        marginLeft: 7,
        flexDirection: 'row',
        borderColor: '#fff',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    weatherPickerBoxSecond: {
        borderLeftWidth: 0,
        borderColor: '#fff',
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
    weatherDynamic: (type = 'metric') => {
        if(props === 'metric'){
            return {
                backgroundColor: '#ccc',
            }
        }
        return {backgroundColor: '#ccc',}
    },
})