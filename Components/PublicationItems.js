import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons} from '@expo/vector-icons';


const COULEUR = 'rgb(130,32,70)'

class PublicationItems extends React.Component {
  render() {

    const publications = this.props.publications
    const DetailProposition = this.props.DetailProposition

    return (

      <TouchableOpacity 
        onPress={() => DetailProposition(publications.titre,publications.description,publications.dateFin) }
        style={styles.main_container}>


        <Image
          style={styles.image}
          source={{uri: "image"}}
        />
        <View style={styles.content_container}>

          <View style={styles.header_container}>
            <Text style={styles.title_text}> {publications.titre}</Text>
          </View>

          <View style={styles.description_icon}>
            <Entypo name="text" size={32} color='rgb(130,32,70)'  />
            <Text style={styles.description_text} numberOfLines={6}>   {publications.description}</Text>
          </View>

          <View style={styles.description_icon}>
              <Entypo name="calendar" size={32} color='rgb(130,32,70)' style={styles.icon} />
              <Text >    Disponible jusqu'au : {publications.dateFin}</Text>
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
    //marginTop : 10
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
    margin: 5,
    //justifyContent: 'space',
    //marginTop : 30,
    justifyContent: 'space-between',
    //alignItems : 'center'

  },
  header_container: {
   // flex: 3,
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
  },
  description_icon : {
    flexDirection : 'row',
    //flex : 1,
    alignItems : 'center',
    margin : 20,

  }
})



export default PublicationItems 