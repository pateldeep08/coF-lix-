import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/JeProposeDB'

import Confetti from "react-native-confetti"

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'


class JePropose extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titre : "", 
            description : "",  
            duree : "", 
        }
    }

    _validerJePropose(){

        //On check si tous les champs sont remplie
        if (this.state.titre != "" && this.state.description != "" && this.state.duree != ""){

            data.push({
                titre : this.state.titre,
                description : this.state.description,
                duree : this.state.duree,
                  })

            console.log(data)

        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')

    }

    render() {
      
        //console.log
        console.log(data)


        return(

            <ImageBackground source = {bg} style = {styles.bg}>

                 
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                
                    <View> 
                        <Text>Je propose</Text>
                    </View>

                    <Button title = "Ajouter Photos" onPress={()=>{}} />
                    
                    <View style={{ flexDirection: 'row'}} >

                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Titre" 
                            placeholderTextColor="#fff" 
                            onChangeText = {(text) => this.setState({titre : text})} 
                            value = {this.state.titre}
                            label = "Titre"
                            mode = "flat"
                        />
                    </View>


                    <View>
                        <TextInput 
                            style = {styles.input2}
                            placeholder = "  Description" 
                            onChangeText = {(text) => this.setState({description : text})} 
                            value = {this.state.description}
                            label = "Description"
                            mode = "outlined"
                        />
                    </View>


                    <View>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Durée"
                            value = {this.state.duree}
                            label = "Durée"
                            mode = "outlined"
                        />
                    </View>

                    <Button title = "Valider" onPress={()=>this._validerJePropose()} />
                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },
    input : {
        //borderRadius : 20,
        fontSize : 16,
        width : 320,
        justifyContent: 'space-between',
        //borderWidth: 20,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:45,
       // flex : 1

       
       //backgroundColor :'rgb(59,22,4)'
       backgroundColor : 'rgb(255,255,255)'
        }, 

    input2 : {
        borderRadius : 20,
        fontSize : 16,
        width : 320,
        justifyContent: 'center',
        //borderWidth: 0.5,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:200,
        //flex : 1

           
       //backgroundColor :'rgb(59,22,4)'
       backgroundColor : 'rgb(255,255,255)'
        },

    input_titre: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
    },

    bg : {
        flex :1,
        width : null,
        height : null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputIcon:{
        position:'absolute',
        top:10,
        left:37
    }
  });

export default JePropose