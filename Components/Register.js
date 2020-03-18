import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/UserDB'

import Confetti from "react-native-confetti" //uniformer les import, soit c'est '', soit c'est "", mais pas les 2

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'

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
            nom : "", 
            prenom : "",
            mail : "",
            confMail : "",
            tel : "",
            password : "",
            confPassword : ""
            
        }
    }
    //Je ne suis pas fan des fonctions avec des _ au début, je ne vois pas l'interet à par alourdir.
    //Si le but de cette fonction est de faire de la valider de type blindage, renommer là par exemple validateRegister. C'est bcp plus explicite.
   _validerReg(){

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
        //si c'est de la doc, ça se met juste au dessus de la déclaration de la fonction.
        //Si il y a encore des fonctionnalités à développer, préferez TODO, car certains IDE peuvent le reconnaitre, ça donnerait :
        /*
         * TODO : 
           - verification des formats tél
           - verification des formats mail 
         */
        */

        //On check si tous les champs sont remplie
        if (this.state.nom != "" && this.state.prenom != "" && this.state.mail != "" && this.state.confMail != "" && this.state.tel != "" && this.state.password != "" && this.state.confPassword != "" ){
            // vous avez trop de saut de ligne inutile sur la plupart de vos codes.
            //On check si les mails sont corrects 
            if(this.state.mail == this.state.confMail){
                //On check si les mdp sont correct 
                if(this.state.password == this.state.confPassword){
                   Alert.alert('Félicitation !!!! Vous êtes un St-Felicien !')
                   if (this._confettiView) {
                    this._confettiView.startConfetti();
                  }

                  data.push({
                      nom : this.state.nom,
                      prenom : this.state.prenom,
                      mail : this.state.mail,
                      tel: this.state.tel,
                      password : this.state.password
                  })

                  console.log(data)
                }
                else Alert.alert('Error Mdp')
            }
            else Alert.alert('Error Mail')
        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')
    }
   // c'est quand meme mieux non ?
   
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



