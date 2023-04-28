import React from 'react';
import { 
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';


let searchedText = "";

export default function HeaderSearch({navigation, text, setText, getApi}) {
  return(
    <View>
      <View style={styles.gridSearch}>
          <Ionicons 
              name="chevron-back"
              size={40}
              color="white"
              onPress={() => navigation.pop()}
          />
          <TextInput 
              style={styles.input}
              placeholder='Pesquisar'
              autoCapitalize='none'
              autoCorrect={false}
              value={text}
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {getApi(text); searchedText = text}}
          />
          <Ionicons 
              name="search"
              size={40}
              color="white"
              onPress={() => {getApi(text); searchedText = text}}
          />
      </View>
      {
        searchedText !== "" ?
          <Text style={styles.txt}>Exibindo resultados para <Text style={styles.txtMain}>{searchedText}</Text></Text>
        : 
         null
      }
    </View>
  );
}

const styles = StyleSheet.create({
    gridSearch:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },
    input:{
      flex: 1,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 25,
      fontSize: 20,
      paddingHorizontal: 20,
    },
    txt:{
      fontSize: 16,
      color: 'white',
      marginLeft: 10,
      marginTop: 15,
    },
    txtMain:{
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    }
  })