import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';

export default function EpisodesScreen({ navigation }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(json => {
        setEpisodes(json.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;

  return (
    <FlatList
      data={episodes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.name}
          subtitle={`${item.episode} — ${item.air_date}`}
          onPress={() => navigation.navigate('Детали', { item })}
        />
      )}
    />
  );
}
