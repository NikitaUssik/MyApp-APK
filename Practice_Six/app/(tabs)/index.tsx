import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
// Путь к data.js, теперь он в корневой папке
import { facts } from '../../data'; // Путь к data.js

const FactCard = ({ title, image, description, date }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.date, { color: colors.text }]}>{date}</Text>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.description, { color: colors.text }]}>{description}</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <FlatList
      data={facts}
      renderItem={({ item }) => (
        <FactCard
          title={item.title}
          image={item.image}
          description={item.description}
          date={item.date}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  date: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
});
