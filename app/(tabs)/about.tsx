import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>Hello Here is about screen</Text>
    </View>
  );
}


const styles  =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#696969',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'#ff8c00',
  },
});