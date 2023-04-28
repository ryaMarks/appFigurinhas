import React from 'react';

import { View, Text, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Imagem from '../../../assets/HomePage.png'



export default function Home(props) {

  return(
    <ImageBackground source={Imagem} style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor= "transparent"
        translucent
      />
      <Text style={styles.txtMaster}> Pesquisar por:</Text>
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={() => 
            props.navigation.navigate("Resultados", {
              choice: "gifs",
            })
          }
        >
          <Text style={styles.txtBtn}>GIF's</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => 
            props.navigation.navigate("Resultados", {
              choice: "stickers",
            })
          }
        >
          <Text style={styles.txtBtn}>Stickers</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtMaster:{
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
    buttons:{
      flexDirection: 'row',
    },
    btn:{
      width: 100,
      height: 50,
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtBtn:{
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
    }
})