import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function EspecificarCategory({ navigation }) {
  const data = [
    {
      id: 1,
      category: 'Festa de aniversário',
    },
    {
      id: 2,
      category: 'Festa de casamento',
    },
    {
      id: 3,
      category: 'Debutante (15 anos)',
    },
    {
      id: 4,
      category: 'Festa de Formatura',
    },
    {
      id: 5,
      category: 'Festa religiosa',
    },
    {
      id: 6,
      category: 'Outra',
    },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.progresso} />
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={{ marginVertical: 60 }}>
      <Text style={styles.mainText}>Legal! Adoramos Festas.</Text>
        <Text style={styles.subHeader}>
          Qual das festas abaixo é a sua?
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1, marginBottom: 25 }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((category) => (
          <View key={category.id} style={styles.listItem} onTouchEnd={() => navigation.navigate('Metas')} style={styles.listItem}>
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
