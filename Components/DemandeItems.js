import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import PageDemande from './PageDemande'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons} from '@expo/vector-icons';


class DemandeItems extends React.Component {
  render() {

    const demandes = this.props.demandes
    const DetailDemande = this.props.DetailDemande

    return (

      <TouchableOpacity 
      onPress={() => DetailDemande(demandes.titre,demandes.description,demandes.dateFin, demandes.prenom, demandes.numTel) }
      style={styles.main_container}>




        <View style={styles.content_container}>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>{demandes.titre}</Text>
          </View>

          <View style={styles.description_icon}>
            <Entypo name="text" size={32} color="rgb(133,105,177)"  />
            <Text style={styles.description_text} numberOfLines={2}>   {demandes.description}</Text>
          </View>

          <View style={styles.description_icon}>
              <Entypo name="calendar" size={32} color="rgb(133,105,177)" style={styles.icon} />
              <Text style={styles.date_text}>    Besoin avant le : {demandes.dateFin}</Text>
          </View>

        </View>

      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor : 'white',
    margin : 3,
    borderRadius : 25,
    justifyContent: 'center',
    alignItems : 'center',
   // marginLeft : 
  },
  image: {
    width: 120,
    height: 170,
    margin: 5,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems : 'center',
    marginLeft : 10
  },
  content_container: {
    flex: 1,
    margin: 5

  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
    marginLeft:15,
    marginTop:8
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 15
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
  },
  description_icon : {
    flexDirection : 'row',
    //flex : 1,
    alignItems : 'center',
    margin : 20,

  }
})



export default DemandeItems 