import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function Error({showError}){
  return showError ? <Text style={styles.text}>Estamos tendo problemas ao carregar os dados </Text> : null;
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize: 20,
        marginTop: 40,
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
    }
})
