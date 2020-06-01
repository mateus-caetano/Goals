import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';

export default function Menu({ navigation }) {

  return (
    <View style={styles.container}>

      <Button
      title="Formulario" 
      onPress={() => navigation.navigate('Category')}
      />

    </View>
  );
}


Menu.navigationOptions = {
    title: 'Menu'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },

});
