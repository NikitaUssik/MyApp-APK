import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FactCard({ fact }) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{fact.date}</Text>
      <Text style={styles.title}>{fact.title}</Text>
      <Image source={fact.image} style={styles.image} />
      <Text style={styles.description}>{fact.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    elevation: 3,
  },
  date: { fontSize: 12, color: 'gray' },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  image: { width: '100%', height: 150, marginVertical: 10, borderRadius: 10 },
  description: { fontSize: 14 },
});
