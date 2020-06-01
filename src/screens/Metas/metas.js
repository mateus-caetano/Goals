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

export default function Metas({ navigation }) {

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#fff'}}>

            <View style={styles.container}>
    
                <View style={styles.bmgestao}>
                    <Text style={styles.header}>BMGestão de Metas</Text>
                </View>

            </View>

            <Text style={styles.titulo}>Meus Objetivos</Text>

            <ScrollView 
            horizontal={true} 
            showsVerticalScrollIndicator={false}
            >
                <View style={styles.meta} onTouchEnd={() => navigation.navigate('DetalharMetas')}>

                    <Text style={styles.mainText}>Festa de Casamento</Text>
                    
                    <View style={styles.linha}>
                        <Text style={styles.subTexto}>Faltam</Text>
                        <Text style={styles.valor}>R$ 31.000,00</Text>
                    </View>
                    
                    <View style={styles.linha}>
                        <View style={styles.progresso} />
                        <View style={styles.progressoFalta} />
                    </View>

                    <View style={{alignItems: 'center'}}>
                    <Text style={styles.detalhes}>Ver Detalhes ></Text>
                    </View>

                </View>


            </ScrollView>
        </View>

        <View style={{backgroundColor: '#FAA831'}}>

            <View style={styles.pontosContainer}>
                <Text style={styles.titulo}>Meus Pontos</Text>
                <Text style={styles.pontuacao}>140 pontos</Text>
                <Text style={styles.detalhesPontuacao}>Ver Detalhes ></Text>
                </View>


            
            <View style={styles.comunidadeContainer}>

                <Text style={styles.tituloComunidade}>Comunidade</Text>
                <Text style={styles.txtComunidade}>Troque dicas e experiências com pessoas que estão buscando sonhos como os seus ou que ja os realizaram.</Text>

                <Button title='Saiba Mais'></Button>
            </View>
        </View>
    </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FAA831',
    },
    comunidadeContainer: {
        flex: 1,
        backgroundColor: '#FAA831',
        height: 260,
    },
    pontosContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        borderBottomLeftRadius: 100,
        height: 260
    },
    pontuacao: {
        fontSize: 35,
        color: '#FAA831',
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft:40,
    },
    txtComunidade: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginVertical: 15,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    detalhesPontuacao: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        marginVertical: 30,
        position: 'absolute',
        right: 30,
        bottom: 30,
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
        paddingTop: 30,
        fontSize: 25,
        color: '#000',
        fontWeight: 'normal',
        left:40,
    },
    tituloComunidade: {
        paddingTop: 30,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'normal',
        left:40,
    },
    mainText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    subTexto: {
        fontSize: 13,
        color: '#919191',
        fontWeight: 'normal',
        marginVertical: 30,
        marginLeft:15,
    },
    valor: {
        fontSize: 25,
        color: '#00BFA5',
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft:15,
    },
    detalhes: {
        fontSize: 13,
        color: '#000',
        fontWeight: 'normal',
        marginVertical: 30,
        marginLeft:15,
    },
    meta: {
        width: 340,
        height: 200,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#DBDBDB',
        marginHorizontal: 40,
        marginVertical: 20,
        marginBottom: 40,

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