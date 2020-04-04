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
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                  dateFin : doc.val().dateFin,
                  prenom : doc.val().prenom,
                  numTel : doc.val.numTel
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

    _afficherDetailDemande = (titre,description,dateFin,prenom,numTel)=>{
        this.props.navigation.navigate(
            "DetailDemandeItems",
            {titre:titre,description: description,dateFin:dateFin, prenom:prenom, numTel:numTel})
    }

    _afficherDetailProposition = (titre,description,dateFin)=>{
        this.props.navigation.navigate(
            "DetailPropositionItems",
            {titre:titre,description: description,dateFin:dateFin})
    }

    demandes(){

        return(
            
            

            <InvertedFlatlist
                style = {styles.flat}
                data={this.state.demandes}
                renderItem={({item}) => <DemandeItems demandes={item} DetailDemande={this._afficherDetailDemande}/>}
            />
        )
    }

    propositions(){

        return(

            <InvertedFlatlist
                style = {styles.flat}
                data={this.state.propositions}
                renderItem={({item}) => <PublicationItems publications={item} DetailProposition={this._afficherDetailProposition}/>}
            />
        )
    }


    render() {
      

        console.log(this.state.demandes)


        return(

            //<ImageBackground source = {bg} style = {styles.bg}>

                <View style={styles.main_container}> 

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            onPress={()=>this.demProp(1)}
                            style={styles.button}>
                        
                            <Text> Les demandes </Text>
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>this.demProp(2)}
                            style={styles.button}>
                        
                            <Text> Les Propositions </Text>
                            
                        </TouchableOpacity>

                       
                    </View>

                    <View style={styles.center}></View>

                   
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
        backgroundColor : "white",
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom : 10,
        borderRadius : 25,
        minHeight : 50,
        justifyContent: 'center',
        alignItems : 'center',
        elevation : 10,
        width : 140
        
  },
  center:{
    //height:'2%',
    backgroundColor:'#7fbcac',
    justifyContent:"center",
    alignItems:'center',
},
  buttonContainer : {
      flexDirection : 'row',
      justifyContent: 'center',
      backgroundColor : "#98d2c1",
  },
  flat : {
      backgroundColor : "#98d2c1"
  }
  });

export default JeConsulte