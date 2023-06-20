import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FitlyticsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitlytics</Text>
      </View>
     
   
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#008080',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FitlyticsHeader;












