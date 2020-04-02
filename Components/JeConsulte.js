import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'
import PagePublication from './PagePublication'
import PageDemande from './PageDemande'

import bg from "../assets/fond.png"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class JeConsulte extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            texte : ""
        } 
    }

    render(){

        return(

            <ImageBackground source = {bg} style = {styles.bg}>
              
                <View style = {styles.bottom}>
                    <View style={styles.bottomItem}>
                        <TouchableOpacity  style={styles.bottomItemInner}>
                            <Text>Je Propose</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.bottomItem}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PageDemande')}style={styles.bottomItemInner}>
                            <Text>Je Demande</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                 
            </ImageBackground>

        ) 

    } 

}

const styles = StyleSheet.create({

    bg : {
        flex :1,
        width : null,
        height : null,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottom:{
        height:'55%',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
    },

    bottomItem:{
        width:'50%',
        height:'33%',
        padding: 7,
        borderRadius:100
    },

    bottomItemInner:{
        flex:1,
        backgroundColor : "white",
        justifyContent:"center",
        alignItems:'center',
    }
})