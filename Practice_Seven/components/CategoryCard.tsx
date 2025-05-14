import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function CategoryCard({ title }) {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
