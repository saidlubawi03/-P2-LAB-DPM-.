import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah dua kotak berwarna:</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 600, // Maksimal lebar kontainer
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red', // Ganti warna sesuai kebutuhan
  },
  box2: {
    backgroundColor: 'green', // Ganti warna sesuai kebutuhan
  },
});