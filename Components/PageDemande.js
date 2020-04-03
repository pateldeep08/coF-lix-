import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import DemandeItems from './DemandeItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InvertedFlatlist from 'react-native-inverted-flat-list';
import firebase from 'firebase'

class PageDemande extends React.Component {


    constructor(props){
        super(props)
        this.state = ({
          ItemsLocal :[],
          demandes : []
        })
    
        //this.itemsRef = this.getRef().child('proposition')
    }

    componentDidMount(){

        const THIS = this
    
        firebase.database().ref().child('demandes').on('value', (childSnapshot) => {
    
          const demandes = []
          childSnapshot.forEach((doc) => {
            demandes.push({
                  key : doc.key,
                  description : doc.val().description,
                  dateFin : doc.val().dateFin,
                  titre : doc.val().titre 
                  
                }
             
            );
            
           // this.setState({
             // propositions : propositions
            //})
    
            //console.log(this.state.propositions)   // J'obtiens l'Array désiré 
       
    
          })
    
          this.setState({
            demandes : demandes
          })
    
    
          // console.log("t'es ici mon bro ");
          // console.log(this.state.propositions)  
          // // const data = JSON.stringify(this.state.propositions[0])
          // // console.log("toto")
          // JSON.parse(this.state.propositions, (key, value) => {
          //   console.log("azeety")
          //   console.log(key);            // et on renvoie la valeur inchangée.
          // });
    
    
          //console.log(this.state.propositions)
    
        })
    
        //console.log(this.state.propositions) //J'obtiens un array vide 
    }


  _afficherDetailDemande = (titre,description,dateFin)=>{
      this.props.navigation.navigate("DetailDemandeItems",{titre:titre,description: description,dateFin:dateFin})
   }

  render() {
    
    return (  
      <View style={styles.main_container}> 
          <View style={styles.title_page}>
              <View> 
                 <Text> </Text>
                 <Text>Liste des demandes</Text>
              </View>
          </View>
          <InvertedFlatlist
            data={this.state.demandes}
            renderItem={({item}) => <DemandeItems demandes={item} DetailDemande={this._afficherDetailDemande}/>}
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
  bottomItemInner:{
    flex:1,
    backgroundColor : "white",
    justifyContent:"center",
    alignItems:'center',
  }
})
export default PageDemande