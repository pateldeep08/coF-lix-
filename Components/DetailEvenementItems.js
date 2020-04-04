import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image,ScrollView} from 'react-native'
import CreerEvenement from './CreerEvenement'
import EvenementItems from './EvenementItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class DetailEvenementItems extends React.Component {
  render() {

    const titre = this.props.route.params.titre
    const heure = this.props.route.params.heure
    const description = this.props.route.params.description
    const minutes = this.props.route.params.minutes
    const date = this.props.route.params.date
    const lieu = this.props.route.params.lieu
    return (
       
        <ScrollView style={styles.scrollview_container}>
          
          <Text style={styles.title_text}>{titre}</Text>
          <Text style={styles.description_text}>{description}</Text>
          <Text style={styles.default_text}>Date : {date}</Text>
          <Text style={styles.default_text}>Horaire : {heure}h {minutes}min</Text>
          <Text style={styles.default_text}>Lieu : {lieu}</Text>
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



export default DetailEvenementItems