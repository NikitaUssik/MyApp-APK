import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const numColumns = 2;
const CARD_WIDTH = Dimensions.get('window').width / numColumns - 20;

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;

  return (
    <FlatList
      data={characters}
      numColumns={numColumns}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{item.name}</Text>

            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}>{item.status}</Text>

            <Text style={styles.label}>Species:</Text>
            <Text style={styles.value}>{item.species}</Text>

            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value} numberOfLines={1}>{item.location.name}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#1e1e2f',
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: '#666',
  },
  image: {
    height: 150,
    width: '100%',
  },
  info: {
    padding: 8,
  },
  label: {
    color: '#ccc',
    fontSize: 12,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
