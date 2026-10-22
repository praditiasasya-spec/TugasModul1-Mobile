import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman About</Text>
      <Text style={styles.subtext}>Ini adalah halaman informasi (Tab 2)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  subtext: {
    marginTop: 8,
    color: '#666',
  },
});