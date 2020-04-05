import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
//import tabNom from '../BDD/UserDB'

import firebase from 'firebase'

import Confetti from "react-native-confetti"

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-datepicker'
//import PageDemande from './PageDemande'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class JeDemande extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titre : "", 
            description : "",  
            dateFin : "", 
            image : "",
        }
    }


    

    _validerJeDemande(){

        firebase.database().ref().child('demandes').push({

            titre: this.state.titre,
            description : this.state.description,
            dateFin : this.state.dateFin,
            prenom : firebase.auth().currentUser.displayName,
            numTel : firebase.auth().currentUser.photoURL 
            //description: this.state.description,
            //duree: this.state.duree,
            //userId: 'test'

        }).then(() => {
            //success callback
            //console.log('data ', data)
        }).catch(() => {
            //error callback
            //console.log('error ', error)
        })

        /*
        //On check si tous les champs sont remplis
        if (this.state.titre != "" && this.state.description != ""){

            data.push({
                titre : this.state.titre,
                description : this.state.description,
                date : this.state.date,
                image : this.state.date,
                  })

          //  this.props.navigation.navigate('PageDemande')
            console.log(data)
        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')

        */

    }


    render() {
        
        //console.log
       // console.log(data)


        return(

            <ImageBackground source = {bg} style = {styles.bg}>

                 
                <KeyboardAvoidingView style={styles.container}>

                    
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
                        <Text>Date de fin</Text>
                    </View>


                    <View style={{ flexDirection: 'row'}} >

                        <DatePicker
                        style={{width: 200}}
                        date={this.state.dateFin}
                        mode="date"
                        placeholder="date de fin"
                        format="YYYY-MM-DD"
                        minDate="2020-01-01"
                        maxDate="2333-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                          
                        }}
                        onDateChange={(date) => {this.setState({dateFin: date})}}
                    />
                    </View>

                    <Button title = "Valider" onPress={()=>this._validerJeDemande()} />
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

export default JeDemande