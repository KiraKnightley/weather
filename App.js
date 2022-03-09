import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import WeatherInfo from './components/WeatherInfo';
import WeatherLocal from './components/WeatherLocal';
import WeatherDetails from './components/WeatherDetails';
import * as Location from 'expo-location';

const WEATHER_API_KEY = '3b582ba124c3286c43ecc8538083781d';
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`;

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    load();
  },[unitsSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMessage('Доступ к местоположению был отклонен');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&lang=ru&appid=${WEATHER_API_KEY}`;
    const response = await fetch(weatherUrl);
    const result = await response.json();

    if (response.ok) {
      setCurrentWeather(result);
    } else {
      setErrorMessage(result.message)
    }
  }

  async function loadCity(cityName) {
    setCurrentWeather(null);
    setErrorMessage(null);

    const weatherUrl = `${BASE_WEATHER_URL}q=${cityName}&units=${unitsSystem}&lang=ru&appid=${WEATHER_API_KEY}`;

    const response = await fetch(weatherUrl);
    const result = await response.json();
    if (response.ok) {
      setCurrentWeather(result);
    } else {
      setErrorMessage(result.message);
    }
  }

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <WeatherLocal 
          currentWeather={currentWeather}
          unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}
          cityName={cityName} setCityName={setCityName}
          loadCity={loadCity}
          load={load}/>
        </View>
        <View style={styles.main}>
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <View style={styles.footer}>
          <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
        </View>
      </View>
    );
  } else if (errorMessage) {
    return(
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color='#fff' />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7290B9',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    marginTop: 35,
    marginLeft: 19,
    marginRight: 35,
  },
  main: {
    flex: 4,
    justifyContent: 'center',
  },
  footer: {
    marginLeft: 22,
    flex: 2,
    justifyContent: 'center',
  }
});
