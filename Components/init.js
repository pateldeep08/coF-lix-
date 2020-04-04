import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

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

import DetailDemandeItems from './DetailDemandeItems'




class init extends React.Component {

    constructor(props) {

        
        super(props)

   
        this.state = {

            isLoading : false,
            userTest : 'deep'

        }

    }

  

    dbInit(){

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

      


        this.props.navigation.navigate('Login')

    }

    

    



    render() {

        //Permet d'enlever les warnings jaune 
        console.disableYellowBox = true


        
        
        return (


            
            <ImageBackground source={bg} style={styles.bg}>

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                    <View style={{ flex: 1,justifyContent: 'space-evenly', width:250 }}>

                        { this.dbInit()}



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


export default init
