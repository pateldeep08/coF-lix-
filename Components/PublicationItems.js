import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import publications from '../BDD/JeProposeDB'


class PublicationItems extends React.Component {
  render() {

    const publications = this.props.publications

    return (
      <View style={styles.container}>

        <View style={styles.title_page}>
           <View> 
              <Text>Publications</Text>
           </View>
        </View>
        
        <Text style={styles.title_page}>{publications.titre}</Text>
        <Text style={styles.title_page}>{publications.description}</Text>
        <Text style={styles.title_page}>{publications.duree}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    title_page:{
      fontWeight: 'bold',
      fontSize: 20,
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
    },
});

export default PublicationItems