import 'react-native-gesture-handler';
import InvertedFlatlist from 'react-native-inverted-flat-list';
import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import publications from '../BDD/JeProposeDB'
import PublicationItems from './PublicationItems'
import JePropose from './JePropose'
import firebase from 'firebase'

class PagePublication extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      ItemsLocal :[],
      propositions : []
    })
  }

  componentDidMount(){

    const THIS = this

    firebase.database().ref().child('proposition').on('value', (childSnapshot) => {

      const propositions = []
      childSnapshot.forEach((doc) => {
        propositions.push({

          key : doc.key,
          description : doc.val().titre

        });
      })

      this.setState({
        propositions : propositions
      })

    })
  }

  render() {
    
    return (  
      <View style={styles.main_container}> 
          <View style={styles.title_page}>
              <View> 
                 <Text>Liste des publications</Text>
              </View>
          </View>
          <InvertedFlatlist
             data={ this.state.propositions }
             renderItem = {({item, index}) => {

              return ( 
                <Text>
                     {item.description}
                
                </Text>
              )

             }

             }

            // renderItem={({item}) => <PublicationItems publications={item}/>}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    justifyContent: 'space-evenly',
    backgroundColor : "black",
    marginLeft : 10
  },
  title_page:{
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
export default PagePublication