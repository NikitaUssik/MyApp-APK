import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';

export default function CharactersScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(json => {
        setData(json.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          subtitle={`${item.status} — ${item.species}`}
          image={item.image}
          onPress={() => navigation.navigate('Детали', { item })}
        />
      )}
    />
  );
}
