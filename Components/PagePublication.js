import 'react-native-gesture-handler';

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

    //this.itemsRef = this.getRef().child('proposition')




  }

  /*
  getRef(){

    return firebase.database().ref()

  }

  componentWillMount(){
    this.getItems(this.itemsRef)
  }

  componentDidMount(){
    this.getItems(this.itemsRef)
  }

  getItems(itemsRef){
    itemsRef.on('value', (snap)=>{
      let items = [];
      snap.forEach((child)=>{

        items.push({
          title : child.val().title,
          _key : child.key
        })

      })
    })
  }

*/
  componentDidMount(){

    const THIS = this

    firebase.database().ref().child('proposition').on('value', (childSnapshot) => {

      const propositions = []
      childSnapshot.forEach((doc) => {
        propositions.push({

          key : doc.key,
          description : doc.val().titre
    
        });
        
       // this.setState({
         // propositions : propositions
        //})

        //console.log(this.state.propositions)   // J'obtiens l'Array désiré 
   

      })

      this.setState({
        propositions : propositions
      })


      //console.log(this.state.propositions)

    })

    //console.log(this.state.propositions) //J'obtiens un array vide 
  }





  render() {
    console.log("t'es ici mon bro ");
    console.log(this.state.propositions[0]['description'])  


    return (  
      <View style={styles.main_container}> 
          <View style={styles.title_page}>
              <View> 
                 <Text> </Text>
                 <Text>Liste des publications</Text>
              </View>
          </View>
          <FlatList
             data={[{title: 'Title Text', key: 'item1'}]}
             renderItem = {({item, index}) => {

              return ( 
                <Text>

                     {item.title}
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
  },
  title_page:{
    fontWeight: 'bold',
    fontSize: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
export default PagePublication