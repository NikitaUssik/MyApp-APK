import React, { createContext, useContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { places, categories } from '../data/places';

const initialState = {
  places,
  categories,
  selectedCategory: null,
  selectedPlace: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SELECT_PLACE':
      return { ...state, selectedPlace: action.payload };
    case 'SAVE_PLACES':
      AsyncStorage.setItem('@places', JSON.stringify(state.places));
      return state;
    default:
      return state;
  }
};

const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PlacesContext.Provider value={{ state, dispatch }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => useContext(PlacesContext);
