// app/tabs/places/categories.tsx
import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { usePlaces } from '../../context/PlacesContext';
import CategoryCard from '../../components/CategoryCard';

export default function CategoriesScreen() {
  const { state } = usePlaces();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {state.categories.map((category) => (
        <Link
          key={category}
          href={{
            pathname: "/(tabs)/places/[category]",
            params: { category }
          }}
          asChild
        >
          <CategoryCard title={category} />
        </Link>
      ))}
    </ScrollView>
  );
}
