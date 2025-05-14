import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CharacterDetail() {
  const { character } = useLocalSearchParams();
  const data = JSON.parse(character);

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>Status: {data.status}</Text>
      <Text>Species: {data.species}</Text>
      <Text>Gender: {data.gender}</Text>
      <Text>Origin: {data.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});