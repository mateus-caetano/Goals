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

      <View onTouchEnd={() => navigation.navigate('InicioCategory')} style={styles.bmgestao}>
      <Text style={styles.bmgestaotexto}>Conheça o BMGestão de Metas</Text>

      </View>

      <View onTouchEnd={() => navigation.navigate('Menu')} style={styles.listItem}>
        <Text style={styles.itemText}>Meu perfil</Text>
      </View>

       <View onTouchEnd={() => navigation.navigate('Menu')} style={styles.listItem}>
        <Text style={styles.itemText}>Configurações de Conta</Text>
      </View>

      <View onTouchEnd={() => navigation.navigate('Menu')} style={styles.listItem}>
        <Text style={styles.itemText}>Mais Informações</Text>
      </View>

      <View onTouchEnd={() => navigation.navigate('Menu')} style={styles.listItem}>
        <Text style={styles.itemText}>Atendimento</Text>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bmgestao: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 70,
    backgroundColor: '#FAA831',
    width: Dimensions.get('window').width - 100,
    height: 100,
    borderRadius: 10,
  },
  bmgestaotexto: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 30,
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 15,
    height: 60,
    width: Dimensions.get('window').width - 100,
    justifyContent: 'center',
    marginVertical: 15,

  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#b2b2b2',
    lineHeight: 30,
    paddingVertical: 120,
  },

});
