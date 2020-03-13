import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/UserDB'

import Confetti from "react-native-confetti"

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'

import firebase from 'firebase'

/*console.log(data)
data.push({
   Tel : "06..",
   Mail : "skcbqkfbkuqa@sdksl"
})
console.log(data)*/


class Register extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nom : "patel", 
            prenom : "deep",
            mail : "deep.patel@edu.ece.fr",
            confMail : "deep.patel@edu.ece.fr",
            tel : "0140139906",
            password : "azerty",
            confPassword : "azerty",
            isInitialize : true,
            isLog : false,
            user : {} ,
            
        }
    }

    _validerReg(){

        isLog = this.state.isLog
        
        /*
            Fonctionnalités manquantes : 
                - verification des formats tél
                - verification des formats mail 
                - Blindage du mdp 
                - hashage du mdp 
                - Reflechir au phrase d'erreur UX
                - Possibilité de validé avec le button validé du clavier 
                - Une fois validé faire redesendre le clavier 
                - S'authetification avec fb 
                - Envoie d'un mail de confirmation 
        
        */

       var config = {
        apiKey: "AIzaSyDArU_Nwqm5_EsceAtGDriieaTffCg7YYo",
        authDomain: "cofelix2-f996a.firebaseapp.com",
        databaseURL: "https://cofelix2-f996a.firebaseio.com",
        projectId: "cofelix2-f996a",
        storageBucket: "cofelix2-f996a.appspot.com",
        messagingSenderId: "825876108801",
        appId: "1:825876108801:web:b5526a9619b62b79821200"
    };

    if(this.state.isInitialize ==true){
        firebase.initializeApp(config);
        this.state.isInitialize = false
    }

        //On check si tous les champs sont remplie
        if (this.state.nom != "" && this.state.prenom != "" && this.state.mail != "" && this.state.confMail != "" && this.state.tel != "" && this.state.password != "" && this.state.confPassword != "" ){
            
            //On check si les mails sont corrects 
            if(this.state.mail == this.state.confMail){


                //On check si les mdp sont correct 
                if(this.state.password == this.state.confPassword){

                    const update = {
                        displayName : this.state.prenom,
                        //phoneNumber : "0614762321",
                        photoURL : "0652345676",

                    }

                    const phoneUp = {
                        phoneNumber : '12345609876'
                    }

                
                    //var user = firebase.auth().currentUser;

                    firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password).then(function(user) {
                        // [END createwithemail]
                        // callSomeFunction(); Optional
                        var user = firebase.auth().currentUser;
                    
                        //console.log(this)
                        user.updateProfile(update).then(function() {
                            // Update successful.
                            console.log(user)
                        }, function(error) {
                            // An error happened.
                        })
                        
                        
                        
                        ;        
                    }, function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            console.error(error);
                        }
                        // [END_EXCLUDE]
                    });

                    const isLog = {
                        displayName : this.state.prenom,
                        //phoneNumber : "0614762321",
            
                    }

                    const test = this.props.navigation


                    firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                          console.log("------------------------------------------------")
                          console.log(user)
                          test.navigate('Login')

                          


                        } else {
                          // No user is signed in.
                        }
                      });
                    

                   Alert.alert('Félicitation !!!! Vous êtes un St-Felicien !')
                  // console.log(user)
                   if (this._confettiView) {
                    this._confettiView.startConfetti();
                  }



                  /*

                  data.push({
                      nom : this.state.nom,
                      prenom : this.state.prenom,
                      mail : this.state.mail,
                      tel: this.state.tel,
                      password : this.state.password

                  })

                  console.log(data)

                  */
                
                
                }
                else Alert.alert('Error Mdp')

            }
            else Alert.alert('Error Mail')

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
                        <Text>S'inscire</Text>
                    </View>
                    

                    <Confetti
                        confettiCount={100}
                        timeout={30}
                        duration={3000}
                        ref={node => (this._confettiView = node)}
                    />

                    <View style={{ flexDirection: 'row'}} >

                        <TextInput 
                            style = {styles.input}
                            placeholder = "Nom" 
                            placeholderTextColor="#fff" 
                            onChangeText = {(text) => this.setState({nom : text})} 
                            value = {this.state.nom}
                            label = "Nom"
                            mode = "flat"
                        />
                    </View>

                    <View>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Prenom" 
                            onChangeText = {(text) => this.setState({prenom : text})} 
                            value = {this.state.prenom}
                            label = "Prénom"
                            mode = "outlined"
                        />
                    </View>

                    <View>
                        <TextInput                    
                            style = {styles.input}
                            placeholder = "  mail" 
                            onChangeText = {(text) => this.setState({mail : text})} 
                            value = {this.state.mail} 
                            label = "Mail"
                            mode = "outlined"
                        />
                    </View>

                    <View>
                        <TextInput                   
                            style = {styles.input}
                            placeholder = "  Confirmation de votre mail" 
                            onChangeText = {(text) => this.setState({confMail : text})} 
                            value = {this.state.confMail} 
                            label = "Confirmez Votre Mail"
                            mode = "outlined"
                        />
                    </View>

                    <View>
                        <TextInput                     
                            style = {styles.input}
                            placeholder = "  Téléphone" 
                            onChangeText = {(text) => this.setState({tel : text})} 
                            value = {this.state.tel} 
                            label = "Téléphone"
                            mode = "outlined"
                        />
                    </View>

                    <View> 
                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Mot de passe" 
                            onChangeText = {(text) => this.setState({password : text})} 
                            secureTextEntry={true}
                            value = {this.state.password}
                            label = "Mot de Passe"
                            mode = "outlined"
                        /> 
                    </View>

                    <View>
                        <TextInput  
                            style = {styles.input}
                            placeholder = "  Confirmez votre mot de passe" 
                            onChangeText = {(text) => this.setState({confPassword : text})} 
                            secureTextEntry={true}
                            value = {this.state.confPassword}
                            label = "Confirmez Votre Mot de Passe"
                            mode = "outlined"
                        />
                    </View>

                    <Button title = "Valider" onPress={()=>this._validerReg()} />

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },
    input : {
        //borderRadius : 20,
        fontSize : 16,
        width : 220,
        justifyContent: 'center',
        //borderWidth: 0.5,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:45,
       // flex : 1
       
       
       //backgroundColor :'rgb(59,22,4)'
       backgroundColor : 'rgb(255,255,255)'
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

export default Register



