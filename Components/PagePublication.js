import 'react-native-gesture-handler';

import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import publications from '../BDD/JeProposeDB'
import PublicationItems from './PublicationItems'
import JePropose from './JePropose'


class PagePublication extends React.Component {
  render() {
    return (  
      <View style={styles.main_container}> 
          <View style={styles.title_page}>
              <View> 
                 <Text> </Text>
                 <Text>Liste des publications</Text>
              </View>
          </View>
          <FlatList
             data={publications}
             renderItem={({item}) => <PublicationItems publications={item}/>}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    justifyContent: 'space-evenly',
  },
  title_page:{
    fontWeight: 'bold',
    fontSize: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
export default PagePublication

