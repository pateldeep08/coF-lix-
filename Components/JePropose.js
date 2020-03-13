import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/JeProposeDB'
import firebase from 'firebase'

import Confetti from "react-native-confetti"

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'
import PagePublication from './PagePublication'
import ChoisirPhoto from './ChoisirPhoto'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class JePropose extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titre : "", 
            description : "",  
            durée : "", 
            image:"",
            id_user: ""
        }
    }





    Proposition(titre,description,durée, id_user){

        var config = {
            apiKey: "AIzaSyDArU_Nwqm5_EsceAtGDriieaTffCg7YYo",
            authDomain: "cofelix2-f996a.firebaseapp.com",
            databaseURL: "https://cofelix2-f996a.firebaseio.com",
            projectId: "cofelix2-f996a",
            storageBucket: "cofelix2-f996a.appspot.com",
            messagingSenderId: "825876108801",
            appId: "1:825876108801:web:b5526a9619b62b79821200"
        };

        firebase.initializeApp(config);

        //On check si tous les champs sont remplis
        if (this.state.titre != "" && this.state.description != "" && this.state.duree != ""){

            data.push({
                titre : this.state.titre,
                description : this.state.description,
                duree : this.state.duree,
                  })
            this.props.navigation.navigate('PagePublication')
            console.log(data)
        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')

        firebase.database().ref('Propositions/').push({

            titre: this.state.titre,
            description: this.state.description,
            durée: this.state.durée

        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })

        
    }


    _AjouterPhoto(){
        this.props.navigation.navigate('ChoisirPhoto')
    }


    _validerJePropose(){

        //On check si tous les champs sont remplis
        if (this.state.titre != "" && this.state.description != "" && this.state.duree != ""){

            data.push({
                titre : this.state.titre,
                description : this.state.description,
                duree : this.state.duree,
                  })
            this.props.navigation.navigate('PagePublication')
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

                    <Button title = "Ajouter Photos" onPress={()=>this._AjouterPhoto()} />
                    
                    <View style={{ flexDirection: 'row'}} >

                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Titre" 
                            placeholderTextColor="#fff" 
                            onChangeText = {(text) => this.setState({titre : text})} 
                            value = {this.state.titre}
                            label = "Titre"
                            mode = "outlined"
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
                            onChangeText = {(text) => this.setState({duree : text})}
                            value = {this.state.duree}
                            label = "Durée"
                            mode = "outlined"
                        />
                    </View>

                    <Button title = "Valider" onPress={()=>this.Proposition()} />
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
        textAlignVertical: 'top',
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