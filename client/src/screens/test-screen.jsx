import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generalStyles } from '../theme/general-styles';


export const TestScreen = (props) => {
  const { navigation } = props;


  return (
    <SafeAreaView >
      <View
        style={[generalStyles.sectionDescription, styles.container]}
      >
        <Text styles={{ textAlign: 'center' }}>Esta es una pantalla de prueba</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center'
  }

});