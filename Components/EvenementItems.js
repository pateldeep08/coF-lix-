import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import CreerEvenement from './CreerEvenement'
import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons,MaterialIcons} from '@expo/vector-icons';


class EvenementItems extends React.Component {
  render() {

    const evenements = this.props.evenements
    const DetailEvenement = this.props.DetailEvenement

    console.log(evenements.key)


  

    return (
      
      <TouchableOpacity
        onPress={() => DetailEvenement(evenements.heure,evenements.titre,evenements.description,evenements.minutes,evenements.date,evenements.lieu, evenements.key) }
        style={styles.main_container}>

        <Image
          style={styles.image}
          source={{uri: evenements.image}}
        />

        <View style={styles.content_container}>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>{evenements.titre}</Text>
          </View>

          <View style={styles.description_container}>
            <Entypo name="text" size={32} color="#98d2c1"/>
            <Text style={styles.description_text} numberOfLines={3}>  {evenements.description}</Text>
          </View>

          <View style = {styles.calendar}>
            <Entypo name="calendar" size={32} color="#98d2c1" style={styles.icon}/>
            <Text style={styles.date_text}>    Le {evenements.date} à {evenements.heure}h {evenements.minutes}min</Text>
          </View>

          <View style={styles.lieu}>
            <MaterialIcons name="place" size={32} color="#98d2c1" style={styles.icon} />
            <Text style={styles.lieu_text}>    {evenements.lieu}</Text>
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
   // flex: 1,
    margin: 5
  },
  header_container: {
    //flex: 1,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20 ,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
   // flex: 5,
    flexDirection:'row',
    alignItems:'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin:10,
    //marginLeft:
  },
  date_container: {
    flex: 1
  },
  lieu_text: {
    textAlign: 'right',
    fontSize: 14
  },
  date_text: {
    textAlign: 'left',
    fontSize: 14,
    
  },
  calendar:{
    flexDirection:'row',
    alignItems:'center',
    margin : 10
  },
  lieu:{
    flexDirection:'row',
    alignItems:'center',
    margin : 10
  }
})



export default EvenementItems