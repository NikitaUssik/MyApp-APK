import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';

export default function LocationsScreen({ navigation }) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(res => res.json())
      .then(json => {
        setLocations(json.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <FlatList
      data={locations}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          subtitle={`${item.type} — ${item.dimension}`}
          onPress={() => navigation.navigate('Детали', { item })}
        />
      )}
    />
  );
}
