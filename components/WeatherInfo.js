import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function WeatherInfo({currentWeather}) {
  
  const {
    main: {temp},
    weather: [details],
  } = currentWeather;
  const { icon, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <View style={styles.weatherRow}>
        <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
        <Text style={styles.textPrimary}>{Math.round(temp)}°</Text>
      </View>
      <Text style={styles.weatherDescription}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 90,
    color: '#ffffff',
  },
  weatherDescription: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#ffffff',
  },
});