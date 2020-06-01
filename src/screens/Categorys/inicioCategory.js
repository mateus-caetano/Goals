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

export default function InicioCategory({ navigation }) {

    return (
      
      <View style={styles.container} onTouchEnd={() => navigation.navigate('Category')}>
  
        <View style={styles.bmgestao}>
        <Text style={styles.mainText}>Quer conseguir realizar seus sonhos de uma forma interativa?</Text>
        <Text style={styles.subHeader}>Chegou o BMGestão de Metas, uma forma para você conseguir realizar seus sonhos!</Text>
        </View>

        <View style={styles.containerBolinha}>

            <View style={styles.bolinhaSelec}></View>
            <View style={styles.bolinha}></View>
            <View style={styles.bolinha}></View>
            <View style={styles.bolinha}></View>
        </View>
  
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FAA831',
    },
    bmgestao: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 70,
      backgroundColor: '#FAA831',
      width: Dimensions.get('window').width - 50,
      height: 250,
      borderRadius: 10,
    },
    mainText: {
      fontSize: 33,
      color: '#fff',
      lineHeight: 40,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    subHeader: {
        paddingTop: 30,
        fontSize: 25,
        color: '#fff',
        lineHeight: 40,
        textAlign: 'center',
        fontWeight: 'normal',
    },
    containerBolinha: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
    },
    bolinha: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderRadius: 100,
        backgroundColor: '#ffffff75',
    },
    bolinhaSelec: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderRadius: 100,
        backgroundColor: '#fff',
    },
    
  
  });