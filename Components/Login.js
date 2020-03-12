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



/*console.log(data)
data.push({
   Tel : "06..",
   Mail : "skcbqkfbkuqa@sdksl"
})
console.log(data)*/


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            mail: "deep.patel@edu.ece.fr",
            password: "azerty",
            isLog: false,
            isInitialize : true
        }
    }

    _text() {

        if (this.state.isLog == false) {
            return "not log"
        }
        if (this.state.isLog == true) {
            return ""
        }

    }

    nav(){
        this.props.navigation.navigate('Accueil')

    }

    _validerLog() {

        /*
            Fonctionnalités manquantes : 
                - 
        
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


       
        firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password).then(function(){

            console.log("log")
            //nav()

            var user = firebase.auth().currentUser;

            console.log(user)

            
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("erricic")
            // ...
          });




        /*
        for (i = 0; i < data.length; i++) {

            if ((this.state.mail == data[i].mail) && (this.state.password == data[i].password)) {

                //Alert.alert('login')
                //this.show()
                this.state.isLog = true
                this.props.navigation.navigate('Accueil')
            }
        }

        if (this.state.isLog != true) {
            this.show()
        }
        //Alert.alert('login')

        /*
        if(this.state.password == data[verifEmail].password){

            this.state.isLog = true
            Alert.alert('Bienvenu poto')

        } 
        else(this.state.isLog = false) 
*/

    }

    show() {
        this.refs.toast.show("! Email ou Mot de Passe incorrect", 1000, null, () => this.refs.toast.close(), null)
    }

    render() {

        return (

            <ImageBackground source={bg} style={styles.bg}>

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                    <View style={{ flex: 1,justifyContent: 'space-evenly', width:250 }}>

                        <Text style={{ flex: 2 }}></Text>

                        <Text style={{ flex: 1 }}>S'authentifier</Text>

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
