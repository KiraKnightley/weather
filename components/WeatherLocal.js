import { View, Text, StyleSheet } from 'react-native';
import React, {useCallback, useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import WeatherCity from './WeatherCity';
import WeatherMyLocal from './WeatherMyLocal';
import WeatherPicker from './WeatherPicker';

export default function WeatherLocal({ currentWeather, unitsSystem, setUnitsSystem, cityName, setCityName, loadCity, load }) {
    const { name } = currentWeather;

    const [display, setDisplay] = useState(false);

    const handleGoToOrderClick = useCallback(() => {
        setDisplay(false);
    }, []);

    if(display === false) {
        return (
            <View style={styles.weatherLocal}>
                {display && <WeatherCity cityName={cityName} setCityName={setCityName} loadCity={loadCity} onPress={() => handleGoToOrderClick()}/>}
                <View style={styles.weatherLocalRow}>
                    <View style={styles.weatherLocalBox}>
                        <View style={styles.weatherLocalRow}>
                            <View style={styles.weatherLocalItems}>
                                <Text style={{...styles.weatherSecond, fontSize: 30}}>{name}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherLocalBox}>
                        <View style={styles.weatherLocalRow}>
                            <View style={styles.weatherLocalItems}>
                                <WeatherPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherLocalRow}>
                    <View style={styles.weatherLocalBox}>
                        <View style={styles.weatherLocalRow}>
                            <View style={styles.weatherLocalItems}>
                                <Text style={styles.weatherCity} onPress={() => setDisplay(!display)}>Сменить город</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherLocalBox}>
                        <View style={styles.weatherLocalRow}>
                            <FontAwesome5 name="location-arrow" size={18} color="#fff"/>
                            <View style={{...styles.weatherLocalItems, marginLeft: 8}}>
                                <WeatherMyLocal load={load}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    } else {
        return <WeatherCity cityName={cityName} setCityName={setCityName} loadCity={loadCity} onPress={() => handleGoToOrderClick()}/>
    }
}

const styles = StyleSheet.create({
    weatherLocal: {
        marginBottom: 'auto',
    },
    weatherLocalRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    weatherLocalBox: {
        padding: 10,
    },
    weatherLocalItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    weatherLocalIcon: {
        color: '#fff',
        width: 10,
        height: 10,
    },
    weatherSecond: {
        color: '#fff',
    },
    weatherCity: {
        color: '#fff',
    },
})