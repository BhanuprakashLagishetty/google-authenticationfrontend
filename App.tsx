import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Google from './components/Google';
import GoogleLogin from './components/Google';

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleLogin/>
      
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
