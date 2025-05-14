// data/places.ts
export const places = [
    {
      id: 1,
      name: "Байтерек",
      category: "Достопримечательности",
      description: "Символ Астаны...",
      imageUrl: require('../assets/images/baiterek.jpg'),
      rating: 4.8
    },
    {
      id: 2,
      name: "Центральный парк",
      category: "Парки",
      description: "Зелёная зона для отдыха...",
      imageUrl: require('../assets/images/park.jpg'),
      rating: 4.5
    },
    {
      id: 3,
      name: "Ресторан Zaman",
      category: "Рестораны",
      description: "Вкусная кухня...",
      imageUrl: require('../assets/images/restaurant.jpg'),
      rating: 4.7
    },
    // добавь остальные места в каждую категорию
  ];
  
  export const categories = [
    "Достопримечательности",
    "Парки",
    "Рестораны"
  ];
  