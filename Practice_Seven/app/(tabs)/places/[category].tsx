// app/tabs/places/[category].tsx
import { useLocalSearchParams, Link } from 'expo-router';
import { ScrollView } from 'react-native';
import { usePlaces } from '../../../context/PlacesContext';
import PlaceItem from '../../../components/PlaceItem';

export default function PlacesScreen() {
  const { category } = useLocalSearchParams(); // Получаем категорию
  const { state } = usePlaces();
  const placesInCategory = state.places.filter(p => p.category === category); // Фильтруем места по категории

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {placesInCategory.map((place) => (
        <Link
          key={place.id}
          href={{
            pathname: "/(tabs)/places/[id]",
            params: { id: place.id }
          }}
          asChild
        >
          <PlaceItem place={place} />
        </Link>
      ))}
    </ScrollView>
  );
}
