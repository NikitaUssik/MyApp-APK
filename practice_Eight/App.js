import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreen from './screens/CharactersScreen';
import LocationsScreen from './screens/LocationsScreen';
import EpisodesScreen from './screens/EpisodesScreen';
import DetailScreen from './screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Персонажи" component={CharactersScreen} />
      <Tab.Screen name="Локации" component={LocationsScreen} />
      <Tab.Screen name="Эпизоды" component={EpisodesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rick & Morty" component={Tabs} />
        <Stack.Screen name="Детали" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
