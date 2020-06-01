import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function Category({ navigation }) {
  const data = [
    {
      id: 1,
      category: 'Viagem',
    },
    {
      id: 2,
      category: 'Festas',
    },
    {
      id: 3,
      category: 'Imóvel',
    },
    {
      id: 4,
      category: 'Automóvel',
    },
    {
      id: 5,
      category: 'Pagar dívidas',
    },
    {
      id: 6,
      category: 'Empreender',
    },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.progresso} />
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ marginVertical: 60 }}>
        <Text style={styles.mainText}>Agora precisamos entender seu sonho</Text>
        <Text style={styles.subHeader}>
          Em qual categoria ele se encaixa melhor?
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1, marginBottom: 25 }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((category) => (
          <View key={category.id} style={styles.listItem} onTouchEnd={() => navigation.navigate('EspecificarCategory')} style={styles.listItem}>
            <Text style={styles.subHeader}>{category.category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },

  mainText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#343434',
    lineHeight: 30,
  },

  subHeader: {
    fontSize: 18,
    lineHeight: 25,
    color: '#000',
    marginVertical: 10,
  },

  listItem: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 15,
    height: 60,
    width: Dimensions.get('window').width - 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  progresso: {
    width: Dimensions.get('window').width,
    height: 7,
    backgroundColor: '#FAA831',
  },
});
