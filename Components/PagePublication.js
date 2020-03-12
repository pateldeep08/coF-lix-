import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import publications from '../BDD/JeProposeDB'
import PublicationItems from './PublicationItems'

class PagePublication extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        
        <FlatList
            data={publications}
            renderItem={({item}) => <PublicationItems publications={item}/>}
        />

      </View>
    )
  }
}
    

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }
});

export default PagePublication
