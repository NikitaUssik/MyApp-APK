// MovieGallery.tsx
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const gallery = [
    {
      title: 'Дюна',
      author: 'Дени Вильнёв',
      year: 2021,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/f/f1/%D0%94%D1%8E%D0%BD%D0%B0_%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
      description: 'Эпическая научная фантастика по роману Фрэнка Герберта.',
    },
    {
      title: 'Бегущий по лезвию 2049',
      author: 'Дени Вильнёв',
      year: 2017,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/9/9b/%D0%91%D0%B5%D0%B3%D1%83%D1%89%D0%B8%D0%B9_%D0%BF%D0%BE_%D0%BB%D0%B5%D0%B7%D0%B2%D0%B8%D1%8E_2049.jpg',
      description: 'Продолжение культового фильма о киборгах и будущем человечества.',
    },
    {
      title: 'Матрица',
      author: 'Лана и Лилли Вачовски',
      year: 1999,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Matrix-DVD.jpg',
      description: 'Культовый фильм о виртуальной реальности и осознании себя.',
    },
    {
      title: 'Люди Икс: Дни минувшего будущего',
      author: 'Брайан Сингер',
      year: 2014,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/5/5e/X-Men_Days_of_Future_Past.jpg',
      description: 'Фантастический боевик о путешествиях во времени.',
    },
    {
      title: 'Тёмный рыцарь',
      author: 'Кристофер Нолан',
      year: 2008,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/f/f4/%D0%A2%D1%91%D0%BC%D0%BD%D1%8B%D0%B9_%D1%80%D1%8B%D1%86%D0%B0%D1%80%D1%8C_%282008%29_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg',
      description: 'История борьбы Бэтмена с Джокером.',
    },
    {
      title: 'Стражи Галактики',
      author: 'Джеймс Ганн',
      year: 2014,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/a/a7/Guardians_of_the_Galaxy_film.jpg',
      description: 'Захватывающая история космических приключений.',
    },
    {
      title: 'Аватар',
      author: 'Джеймс Кэмерон',
      year: 2009,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg',
      description: 'Фильм о связи человека с природой и другом миром.',
    },
    {
      title: 'Марсианин',
      author: 'Ридли Скотт',
      year: 2015,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/6/67/The_Martian.jpg',
      description: 'История выживания на Марсе.',
    },
  ];
  
  
  
  export default function MovieGallery() {
    const [index, setIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
  
    const current = gallery[index];
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{current.title}</Text>
        <TouchableOpacity onLongPress={() => setModalVisible(true)}>
          <Image source={{ uri: current.imageUrl }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.details}>{current.author} • {current.year}</Text>
  
        <View style={styles.buttonRow}>
          <Button title="Предыдущий" onPress={() => setIndex(index - 1)} disabled={index === 0} />
          <Button title="Следующий" onPress={() => setIndex(index + 1)} disabled={index === gallery.length - 1} />
        </View>
  
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text>{current.description}</Text>
              <Button title="Закрыть" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    image: {
      width: 220,
      height: 320,
      borderRadius: 12,
      marginBottom: 10,
    },
    details: {
      fontSize: 16,
      marginBottom: 20,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      gap: 10,
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalContent: {
      backgroundColor: 'white',
      margin: 20,
      padding: 20,
      borderRadius: 10,
    },
  });
  