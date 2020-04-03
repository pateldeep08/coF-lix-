import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'

import bg from "../assets/fond.png"
import username from "../assets/name.png"

import DemandeItems from './DemandeItems'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PublicationItems from './PublicationItems'

import PageDemande from './PageDemande'

import InvertedFlatlist from 'react-native-inverted-flat-list';

class JeConsulte extends React.Component {

    constructor(props){
        super(props)
        this.state = {

            demandes : [],
            propositions : [],
            demProp : false

        }
    }



    componentDidMount(){

        const THIS = this
    
        firebase.database().ref().child('demandes').on('value', (childSnapshot) => {
    
          const demandes = []
          childSnapshot.forEach((doc) => {
            demandes.push({
                  key : doc.key,
                  description : doc.val().description,
                  titre : doc.val().titre ,
                  dateFin : doc.val().dateFin


                }
            );
          })
    
          this.setState({
            demandes : demandes
          })
    

    
        })

        firebase.database().ref().child('propositions').on('value', (childSnapshot) => {
    
            const propositions = []
            childSnapshot.forEach((doc) => {
              propositions.push({
                    key : doc.key,
                    description : doc.val().description,
                    titre : doc.val().titre ,
                    dateFin : doc.val().duree
  
  
                  }
              );
            })
      
            this.setState({
              propositions : propositions
            })
      
        })
    
    }

    demProp(a){

        if(a == 1){
            
            this.setState({demProp : true})
        }


        if(a == 2){
            this.setState({demProp : false})
        }
    }

    _afficherDetailDemande = (titre,description,dateFin)=>{
        this.props.navigation.navigate("DetailDemandeItems",{titre:titre,description: description,dateFin:dateFin})
    }

    _afficherDetailProposition = (titre,description,dateFin)=>{
        this.props.navigation.navigate("DetailPropositionItems",{titre:titre,description: description,dateFin:dateFin})
    }

    demandes(){

        return(

            <InvertedFlatlist
                data={this.state.demandes}
                renderItem={({item}) => <DemandeItems demandes={item} DetailDemande={this._afficherDetailDemande}/>}
            />
        )
    }

    propositions(){

        return(

            <InvertedFlatlist
                data={this.state.propositions}
                renderItem={({item}) => <PublicationItems publications={item} DetailProposition={this._afficherDetailProposition}/>}
            />
        )
    }


    render() {
      



        return(

            //<ImageBackground source = {bg} style = {styles.bg}>

                <View style={styles.main_container}> 
                
                    <View style={styles.title_page}>
                        <View> 
                            <Text> </Text>
                             <Text>Liste des évènements</Text>
                          </View>
                    </View>

                    <View style={styles.button}>

                        <Button title = "Demandes" onPress={()=>this.demProp(1)} />
                        <Button title = "Propositions" onPress={()=>this.demProp(2)} />

                    </View>

                   
                    {this.state.demProp ? this.demandes() : this.propositions()}

                    
            
                




                </View>


            // </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
    justifyContent: 'space-evenly',
    },
  
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },
   
    bg : {
        flex :1,
        width : null,
        height : null,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title_page:{
    fontWeight: 'bold',
    fontSize: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    },
    button:{
    alignItems: 'center',
    // back: 20,
  },
  });

export default JeConsulte