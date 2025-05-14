import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";
import { usePlaces } from "../../../context/PlacesContext";

export default function PlaceDetails() {
  const { id } = useLocalSearchParams();
  const { state } = usePlaces();

  const place = state.places.find((p) => p.id.toString() === id);

  if (!place) return <Text>Место не найдено</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Image source={place.imageUrl} style={{ width: "100%", height: 200 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{place.name}</Text>
      <Text>{place.description}</Text>
      <Text>Рейтинг: {place.rating}</Text>
    </View>
  );
}
