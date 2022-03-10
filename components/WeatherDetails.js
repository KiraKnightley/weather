import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { humidity, pressure },
    wind: { speed, deg },
    clouds: { all },
  } = currentWeather
  const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} м/с` : `${Math.round(speed)} милли/ч`;
  
  function windDeg(deg){
    if (deg < 45) {
      return 'северный';
    } if (deg < 135){
      return 'восточный';
    } if (deg < 225){
      return 'южный';
    } if (deg < 315){
      return 'западный';
    } if (deg < 360){
      return 'северный';
    } 
  }

  return (
    <View style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
            <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <View style={styles.weatherDetailsItems}>
                        <Text style={styles.textFirst}>Ветер</Text>
                        <Text style={styles.textSecondary}>{windSpeed}, {windDeg(deg)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <View style={styles.weatherDetailsItems}>
                        <Text style={styles.textFirst}>Давление</Text>
                        <Text style={styles.textSecondary}>{pressure} мм рт. ст.</Text>
                    </View>
                </View>
            </View>
        </View>
          <View style={styles.weatherDetailsRow}>
            <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <View style={styles.weatherDetailsItems}>
                        <Text style={styles.textFirst}>Влажность</Text>
                        <Text style={styles.textSecondary}>{humidity} %</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <View style={styles.weatherDetailsItems}>
                        <Text style={styles.textFirst}>Облачность</Text>
                        <Text style={styles.textSecondary}>{all} %</Text>
                    </View>
                </View>
            </View>
          </View>
    </View>
)
}

const styles = StyleSheet.create({
  weatherDetails: {
      marginTop: 'auto',
      marginBottom: 6,
  },
  weatherDetailsRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
  },
  weatherDetailsBox: {
      flex: 1,
      paddingBottom: 35,
  },
  weatherDetailsItems: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
  },
  textFirst: {
      fontSize: 15,
      color: '#ffffff',
      opacity: 0.6,
  },
  textSecondary: {
      fontSize: 18,
      color: '#ffffff',
  },
})