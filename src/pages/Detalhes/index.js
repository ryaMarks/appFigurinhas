import React from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  ImageBackground, 
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import Imagem from '../../../assets/BG.png';
import { Link } from '@react-navigation/native';



export default function Detalhes({navigation, route}) {
  const data = route.params.item
  return(
    <ImageBackground source={Imagem} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Ionicons 
            name="chevron-back"
            size={40}
            color="white"
            onPress={() => navigation.pop()}
          />
          <Text style={styles.text}>Resultados</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image 
            style={{flex: 1}}
            source={{ uri: data.images.original.url}}
            resizeMode='contain'
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <TouchableOpacity onPress={() => {Linking.openURL(data.images.original.url)}}>
            <Ionicons
              name="globe"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    text:{
      color: 'white',
      fontSize: 22,
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    imgContainer:{
      width: '100%',
      height: '50%',
      backgroundColor: "rgba(171,171,171,0.8)",
    },
    textTitle:{
      color: 'white',
      fontSize: 18,
      width: '80%',
      justifyContent: 'center',
      padding: 10,
    }
})