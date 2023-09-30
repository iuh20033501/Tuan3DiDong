import { StatusBar } from 'expo-status-bar';
import {StyleSheet,View,} from 'react-native';
import FirstScreen from './demo/FirstScreen';
import Screen1_a from './demo/Screen1_a';
import Screen1_b from './demo/Screen1_b';
import Screen1_c from './demo/Screen1_c';
import Screen1_d from './demo/Screen1_d';
import Screen1_e from './demo/Screen1_e';
import Screen2_a from './demo/Screen2_a';
import ScreenXMEye from './demo/ScreenXMEye';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    {/* <FirstScreen></FirstScreen> */}
    {/* <Screen1_a></Screen1_a> */}
    {/* <Screen1_b></Screen1_b> */}
    {/* <Screen1_c></Screen1_c> */}
    {/* <Screen1_d></Screen1_d> */}
    <Screen1_e></Screen1_e>
    {/* <Screen2_a></Screen2_a> */}
    {/* <ScreenXMEye></ScreenXMEye> */}

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
