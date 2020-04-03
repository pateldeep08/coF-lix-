import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import PageDemande from './PageDemande'
import DemandeItems from './DemandeItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class DetailDemandeItems extends React.Component {
  render() {

    const titre = this.props.route.params.titre
    const description = this.props.route.params.description
    const dateFin = this.props.route.params.dateFin
    
    return (
       
        <ScrollView style={styles.scrollview_container}>
          <Text style={styles.title_text}>{titre}</Text>
          <Text style={styles.description_text}>{description}</Text>
          <Text style={styles.default_text}>Date : {dateFin}</Text>
        </ScrollView>


      /*
      <View style={styles.main_container}>
        <Text> heure {minutes}  </Text>

        <Text> titre {titre} {lieu} {date}</Text>

      </View>
      
      <Image
          style={styles.image}
          source={{uri: evenements.image}}
        />


      */
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})



export default DetailDemandeItems