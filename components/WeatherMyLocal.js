import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function WeatherMyLocal({load}) {
  return (
    <View>
      <Text style={styles.weatherMyLocal} onPress={() => load()}>Мое местоположение</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    weatherMyLocal: {
        color: '#fff',
        opacity: 0.6,
    },
  });