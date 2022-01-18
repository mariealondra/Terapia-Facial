import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView} from 'react-native';

export default function App() {
  const [user, setUser]= useState ('');
  const [elementoAlma, setElementoAlma ]= useState ([]);
  
  function entradaRegistroUsuario (userInput){
    setUser(userInput);

  }

  const addUser = () => {
    setElementoAlma([...elementoAlma, user]);

  };

  return (

    <View style= {styles.screen}>
        <View style = {styles.items}>

         <TextInput placeholder='Digite su nombre' 
         style= {styles.text} 
         onChangeText={entradaRegistroUsuario}
         value= {user}
         />

         <Button title= 'ADD' onPress={addUser} />

        </View>

        <ScrollView>
          {elementoAlma.map((element)=> 
            <View key= {element} style= {styles.lista}>
              <Text>{element}</Text>
            </View>
          )}
        </ScrollView>

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
 },
 lista: {
   padding: 10,
   margin: 10,
   backgroundColor:'#b0c4de',
   borderColor: 'black',
   borderWidth: 1
 }
  
});
