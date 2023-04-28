import React from 'react';
import { 
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function Loading({isLoading}) {
  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator
          color= 'white'
          size= {40}
          style={{margin: 20}}
      />
    </View>
  ): null;
}

const styles = StyleSheet.create({
  loader:{
    flex: 1,
    padding: 10,
  },
})