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

/*console.log(data)
data.push({
   Tel : "06..",
   Mail : "skcbqkfbkuqa@sdksl"
})
console.log(data)*/


class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
            mail : "",
            password : "",  
        }
    }

    _validerLog(){

        /*
            Fonctionnalités manquantes : 
                - verification des formats tél
                - verification des formats mail 
                - Blindage du mdp 
                - hashage du mdp 
                - Reflechir au phrase d'erreur UX
                - Possibilité de validé avec le button validé du clavier 
                - Une fois validé faire redesendre le clavier 
        
        */

        //On check si tous les champs sont remplie
        if (this.state.nom != "" && this.state.prenom != "" && this.state.mail != "" && this.state.confMail != "" && this.state.tel != "" && this.state.password != "" && this.state.confPassword != "" ){
            
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

    render() {
      
        //console.log
        console.log(data)


        return(

            <ImageBackground source = {bg} style = {styles.bg}>

                 
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                
                    <View style = {{backgroundColor:'red',flex:1}}> 
                        <Text>Login</Text>
                    </View>
                    



                    <View style = {{backgroundColor:'red',flex:1}}>
                        <TextInput                    
                            style = {styles.input}
                            placeholder = "  mail" 
                            onChangeText = {(text) => this.setState({mail : text})} 
                            value = {this.state.mail} 
                            label = "Mail"
                            mode = "outlined"
                        />
                    </View>

                    <View style = {{backgroundColor:'red',flex:1}}> 
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



         

                    <View style = {{flex:1,flexDirection:'row'}}>

                        <View style = {{backgroundColor:'black',flex:1}}>


                        </View>

                        <View style = {{backgroundColor:'white',flex:1}}>


                        </View>
                  
                        



                    </View>

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      //flex: 1,
     // backgroundColor: '#fff',
      //alignItems: 'center',
     // justifyContent: 'space-between',
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

export default Login



