

import React,{useState} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App=() => {
  const [name, setName] = useState("Faan");
  const onclickHandler=()=>{
    setName("James");
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with {name}</Text>
      <View style={styles.testButton}>
      <Button title="youtube channel" onPress={onclickHandler} 
      ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    width:"100%",
    height:"50%",
    backgroundColor: "yellow",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    borderColor:"red", 
    borderWidth:5
  },
  text:{
    color:"red",
    fontSize:20,
    fontStyle:"italic"
  },
  testButton:{
    backgroundColor:"white",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:10,
    borderColor:"red",
    borderWidth:1,
    marginTop:10
  }
});

export default App;
