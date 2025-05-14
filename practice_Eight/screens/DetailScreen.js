import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
      <Text style={styles.title}>{item.name}</Text>

      {/* Персонажи */}
      {item.status && <Text>Статус: {item.status}</Text>}
      {item.species && <Text>Раса: {item.species}</Text>}
      {item.gender && <Text>Пол: {item.gender}</Text>}

      {/* Локации */}
      {item.type && <Text>Тип: {item.type}</Text>}
      {item.dimension && <Text>Измерение: {item.dimension}</Text>}

      {/* Эпизоды */}
      {item.episode && typeof item.episode === 'string' && <Text>Код эпизода: {item.episode}</Text>}
      {item.air_date && <Text>Дата выхода: {item.air_date}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 8
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
