import React from 'react';
import { 
  View,
  StyleSheet,
  Text
} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';


export default function TextInfo({showInfo}) {

  return showInfo ? (
    <View style={styles.headerContainer}>
        <Ionicons name="arrow-up" size={40} color='white' />
        <Text style={styles.headerText}>Use a barra de Pesquisa para encontrar o que busca</Text>
    </View> 
  ) : null;
}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: 'center',
        margin: 20,
    },
    headerText:{
        color: 'white',
        fontSize: 16,
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
    }
})