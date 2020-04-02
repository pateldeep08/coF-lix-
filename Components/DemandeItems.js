import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import PageDemande from './PageDemande'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class DemandeItems extends React.Component {
  render() {

    const demandes = this.props.demandes

    return (
      
      <TouchableOpacity 
      //onPress={() => this.props.navigation.navigate('DetailItems')} 
      style={styles.main_container}>


        <Image
          style={styles.image}
          //source={{uri: demandes.image}}
        />
  
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{demandes.titre}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={5}>{demandes.description}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Jusqu'au {demandes.dateFin}</Text>
          </View>
        </View>

      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})



export default DemandeItems