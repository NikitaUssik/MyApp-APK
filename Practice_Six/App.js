import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, useColorScheme, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import facts from './data';

export default function App() {
  const theme = useColorScheme();
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: false }));
  };

  return (
    <ScrollView style={theme === 'dark' ? styles.containerDark : styles.containerLight}>
      {facts.map((item) => (
        <View key={item.id} style={[styles.card, theme === 'dark' ? styles.cardDark : styles.cardLight]}>
          <View style={styles.imageContainer}>
            {!loadedImages[item.id] && (
              <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={theme === 'dark' ? '#fff' : '#000'} />
              </View>
            )}
            
            <FastImage
              source={{ 
                uri: item.image,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable
              }}
              style={[
                styles.image, 
                !loadedImages[item.id] && { opacity: 0 }
              ]}
              resizeMode={FastImage.resizeMode.cover}
              onLoad={() => handleImageLoad(item.id)}
              onError={() => handleImageError(item.id)}
            />
            
            {loadedImages[item.id] === false && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Изображение не загружено</Text>
              </View>
            )}
          </View>
          
          <View style={styles.textContainer}>
            <Text style={[styles.date, theme === 'dark' ? styles.textDark : styles.textLight]}>
              {item.date}
            </Text>
            <Text style={[styles.title, theme === 'dark' ? styles.textDark : styles.textLight]}>
              {item.title}
            </Text>
            <Text style={[styles.description, theme === 'dark' ? styles.textDark : styles.textLight]}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    backgroundColor: '#f5f5f5',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  card: {
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 6,
  },
  cardLight: {
    backgroundColor: '#fff',
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
  },
  imageContainer: {
    width: '100%',
    height: 240,
    position: 'relative',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebee',
  },
  errorText: {
    color: '#d32f2f',
    fontWeight: '500',
  },
  textContainer: {
    padding: 16,
  },
  date: {
    fontSize: 13,
    opacity: 0.8,
    marginBottom: 6,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 24,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.9,
  },
  textDark: {
    color: '#f0f0f0',
  },
  textLight: {
    color: '#333',
  },
});