import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(json => {
        setCharacters(json.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={characters}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 10, borderBottomWidth: 1 }}
          onPress={() => router.push(`/details/${item.id}`)}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
            <View>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.status} — {item.species}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
