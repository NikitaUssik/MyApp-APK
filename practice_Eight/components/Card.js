import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ title, subtitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: 80,
    height: 80
  },
  textContainer: {
    padding: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
