import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';


import firebase from 'firebase'

import JeRencontre from './JeRencontre'
import ChoisirTemps from './ChoisirTemps'
import ChoisirPhotoEvenement from './ChoisirPhotoEvenement'

import bg from "../assets/fond.png"
import username from "../assets/name.png"

import DatePicker from 'react-native-datepicker'
import DateTimePicker from 'react-native-simple-time-picker'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



class CreerEvenement extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            titre : "", 
            date : "",    
            description : "",
            lieu : "", 
            heure : null,
            minutes : null,
        }
    }



    _chooseTime(){
        this.props.navigation.navigate('ChoisirTemps')
    }

    _choosePhoto(){
        this.props.navigation.navigate('ChoisirPhotoEvenement')
    }


    _validerCreerEvenement(){

        //On check si tous les champs sont remplis
        if (this.state.date != "" && this.state.titre != "" && 
            this.state.description != "" && this.state.lieu != ""){

                firebase.database().ref().child('evenements').push({

                    titre : this.state.titre, 
                    date : this.state.date,    
                    description : this.state.description,
                    lieu : this.state.lieu, 
                    heure : this.props.route.params.heure,
                    minutes : this.props.route.params.minutes,
        
                }).then(() => {
                    //success callback
                    //console.log('data ', data)
                }).catch(() => {
                    //error callback
                    //console.log('error ', error)
                })


            /*
            data.push({
                titre : this.state.titre,
                date : this.state.date,
                description : this.state.description,
                lieu : this.state.lieu,
                heure : this.props.route.params.heure,
                minutes : this.props.route.params.minutes,
                image : this.props.route.params.urlphoto,
                  })

            console.log(data)
            this.props.navigation.navigate('JeRencontre')

            */
           this.props.navigation.navigate('JeRencontre')

        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')

    }
    

    render() {
      



        return(

            <ImageBackground source = {bg} style = {styles.bg}>

                 
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    
                    <View style={{ flexDirection: 'row'}} >

                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Titre" 
                            placeholderTextColor="#fff" 
                            onChangeText = {(text) => this.setState({titre : text})} 
                           // maxLength = '30'
                            value = {this.state.titre}
                            label = "Titre"
                            mode = "outlined"
                        />
                    </View>

                    <View style={{ flexDirection: 'row'}} >

                        <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
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
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    </View>
                        
                    <Button title = "Choisir Horaire" onPress={()=>this._chooseTime()} 

                    />

                    <View> 
                        <Text>Heure : {this.props.route.params.heure}h {this.props.route.params.minutes}min</Text>
                    </View>




                    <View>
                        <TextInput 
                            style = {styles.input2}
                            placeholder = "  Description" 
                            onChangeText = {(text) => this.setState({description : text})} 
                           // maxLength = '250'
                            value = {this.state.description}
                            label = "Description"
                            mode = "outlined"
                        />
                    </View>


                    <View>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Lieu"
                            onChangeText = {(text) => this.setState({lieu : text})}
                          //  maxLength = '20'
                            value = {this.state.lieu}
                            label = "Lieu"
                            mode = "outlined"
                        />
                    </View>

                    <Button title = "Choisir Photo" onPress={()=>this._choosePhoto()} />

                    <Button title = "Valider" onPress={()=>this._validerCreerEvenement()} />
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
        //textAlignVertical: 'top',
        //borderWidth: 0.5,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:130,
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

export default CreerEvenement