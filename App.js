import React from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style= {styles.screen}>
        <View style = {styles.items}>

         <TextInput placeholder='Digite su nombre' style= {styles.text} />
         <Button title= 'ADD' />

        </View>
        <View />

    </View>

  );
}

const styles = StyleSheet.create({
 screen: {
  padding: 50
 },
 items: {
  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
 },
 text: {
  width: 200, borderColor:'black', borderWidth: 1, padding: 10
 }
  
});
