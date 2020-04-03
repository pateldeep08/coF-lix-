import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import CreerEvenement from './CreerEvenement'


class EvenementItems extends React.Component {
  render() {

    const evenements = this.props.evenements
    const DetailEvenement = this.props.DetailEvenement


  

    return (
      
      <TouchableOpacity
        onPress={() => DetailEvenement(evenements.heure,evenements.titre,evenements.description,evenements.minutes,evenements.date,evenements.lieu) }
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
            <Text style={styles.description_text} numberOfLines={3}>{evenements.description}</Text>
            <Text style={styles.date_text}>Le {evenements.date} à {evenements.heure}h {evenements.minutes}min</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.lieu_text}>{evenements.lieu}</Text>
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
    fontSize: 20 ,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 5
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
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
    fontSize: 14
  }
})



export default EvenementItems