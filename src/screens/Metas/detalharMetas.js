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

export default function DetalhasMetas({ navigation }) {

    return (

        
        
        
        <View style={styles.container}>
        <View style={styles.foto}></View>
      <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.objetivo}>
                <Text style={styles.titulo}>Meu Objetivo</Text>
                <Text style={styles.mainText}>Festa de Casamento</Text>
                <Text style={styles.titulo}>Sem descrição</Text>
                    
                <Text style={styles.subTexto}>Quanto Falta</Text>
                <Text style={styles.valor}>R$ 31.000,00</Text>
                    
                <View style={styles.linha}>
                    <View style={styles.progresso} />
                    <View style={styles.progressoFalta} />
                </View>

            </View>


        </ScrollView>
        </View>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    foto: {
        flex: 1,
        backgroundColor: '#DBDBDB',
    },
    header: {
        fontSize: 18,
        color: '#fff',
        lineHeight: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    },
    titulo: {
        fontSize: 18,
        color: '#919191',
        fontWeight: 'normal',
    },
    objetivo: {
        marginHorizontal: 30,
        marginVertical: 30,
    },
    mainText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subTexto: {
        fontSize: 13,
        color: '#919191',
        fontWeight: 'normal',
        marginTop: 15,
        marginLeft:15,
    },
    valor: {
        fontSize: 25,
        color: '#00BFA5',
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft:15,
    },
    meta: {
        width: 340,
        height: 200,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#DBDBDB',
        marginHorizontal: 40,
        marginVertical: 20

    },
    linha: {
        flexDirection: 'row',
    },
    progresso: {
        height: 10,
        backgroundColor: '#00BFA5',
        width: Dimensions.get('screen').width - 230,
        left: 10,
        borderRadius: 10,
    },
    progressoFalta: {
        height: 10,
        backgroundColor: '#DBDBDB',
        width: Dimensions.get('screen').width - 270,
        right: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
  
  });