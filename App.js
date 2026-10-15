import { Alert, Button, StyleSheet, View } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert('Pemberitahuan', 'Primakara Luar Biasa');
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Klik Saya" 
        onPress={showAlert} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});