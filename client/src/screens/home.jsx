import React from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { SCREEN_NAMES } from '../navigation/navigation-constants';
import { generalStyles } from '../theme/general-styles';


export const HomeScreen = (props) => {
  const { navigation } = props;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={[generalStyles.sectionDescription, { width: '50%', alignSelf: 'center' }]}>
          <View style={{ paddingBottom: 5 }}>
            <Button title={'Button test'} onPress={() => navigation.navigate(SCREEN_NAMES.TEST)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

});