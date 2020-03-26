import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/UserDB'
import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'

import Confetti from "react-native-confetti"

import bg from "../assets/fond.png"
import username from "../assets/name.png"
import Icon from 'react-native-vector-icons/Ionicons'

import 'react-native-gesture-handler';

import firebase from 'firebase'

import { connect} from 'react-redux'

import {useSelector} from 'react-redux' 





class Login extends React.Component {

    _isMounted = false 

    constructor(props) {
        super(props)
        this.state = {

            mail: "deep.patel@edu.ece.fr",
            password: "azerty",

        }
    }

    componentDidMount(){
        this._isMounted = true 
        console.log('composant login  monté')

    }


    componentWillUnmount(){
        this._isMounted = false 
        console.log('composant login  démonté')
    }

    _validerLog() {

        /*
            Fonctionnalités manquantes : 
                - 
        
        */

        // Traitement des this non reconnu par firebase 
        const show = this 
        const navigation = this.props.navigation
        
       
        firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password).then(function(){

            var user = firebase.auth().currentUser;
            navigation.navigate('Accueil', {userName : user.uid})
            console.log(user)

        }).catch(function(error) {

            // Gestion des erreurs
            var errorCode = error.code;
            var errorMessage = error.message;
            //Appel de la fonction qui permet l'affiche d'un message pop "email ou mdp incorrect"
            show.show()    

        });
    }

    //Fonction qui permet l'affichage rouge 
    show() {
        this.refs.toast.show("! Email ou Mot de Passe incorrect", 1000, null, () => this.refs.toast.close(), null)
    }

    render() {

        return (

            <ImageBackground source={bg} style={styles.bg}>

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                    <View style={{ flex: 1,justifyContent: 'space-evenly', width:250 }}>

                        <Text style={{ flex: 2 }}></Text>

                        <Text style={{ flex: 1 }}>S'authentifier </Text>

                        <View style={{ flex: 4 }}> 
                            <TextInput
                                style={styles.input, { flex: 1 }}
                                placeholder="  mail"
                                onChangeText={(text) => this.setState({ mail: text })}
                                value={this.state.mail}
                                label="Mail"
                                mode="outlined"
                               // multiline="true"
                            />
                            
                            <TextInput
                                style={styles.input, { flex: 1 }}
                                placeholder="  Mot de passe"
                                onChangeText={(text) => this.setState({ password: text })}
                                secureTextEntry={true}
                                value={this.state.password}
                                label="Mot de Passe"
                                mode="outlined"
                            />
                        
                        </View>

                        <Text style={{ flex: 1 }}></Text>

                        <View style={{ flex: 1 }}>
                            <Toast
                                ref="toast"
                                textStyle={{ color: 'red' }}
                                style={{ backgroundColor: 'red' }}
                            />
                        </View>
                
                        <Text style={{ flex: 1 }}></Text>

                        <Button
                            title="Connection"
                            onPress={() => this._validerLog()}
                            style={{ flex: 1 }}
                        />

                        <Text style={{ flex: 1 }}></Text>

                        <Button
                            title="S'inscrire"
                            onPress={()=>this.props.navigation.navigate('Register')}
                            style={styles.inscritpionButton}
                        />

                        <Text style={{ flex: 1 }}></Text>

                    </View>

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        opacity: 1,
        width: null,
    },
    input: {
        //borderRadius : 20,
        fontSize: 16,
        width: 100,
        justifyContent: 'center',
        //borderWidth: 0.5,
        opacity: 3,
        backgroundColor: '#fff',
        //padding:'center',
        height: '20%',
        alignItems:'center'
        //flex :
        //backgroundColor :'rgb(59,22,4)'
        // backgroundColor : 'rgb(255,255,255)'
    },
    bg: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    textLog: {
        opacity: 1
    },
    inscritpionButton:{
        backgroundColor:'#fff',
        flex:1,
        width:20

    }
});


export default Login
