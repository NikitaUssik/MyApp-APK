import { Stack } from 'expo-router';
import { PlacesProvider } from '../../context/PlacesContext';
import { places, categories } from '../data/places';

export default function RootLayout() {
 return (
   <PlacesProvider>
    <Stack
     screenOptions={{
      headerStyle: {
       backgroundColor: '#fff',
     },
     headerTintColor: '#000',
     headerTitleStyle: {
      fontWeight: 'bold',
    },
   }}
  />
   </PlacesProvider>
 );
}