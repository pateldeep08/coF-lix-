//import { TextInput, Button } from "react-native-paper";

/*


    import react from 'react'
import { StyleSheet, Text, View } from 'react-native';


class Model extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(1) 
    } 
}



<Button title = "Mot de passe oublié" 
onPress={()=>this._validerLog()} 

/>

<Button 
title = "Devenir Saint-Felicien" 
onPress={()=>this._validerLog()} 

/>
*/

/*

import React, { Component } from 'react'
import { View } from 'react-native'
import Toaster, { ToastStyles } from 'react-native-toaster'

class Model extends Component {
    constructor(props) {
        super(props)
        this.state = { message: null }

        const messages = [
            { text: 'FYI' },
            { text: 'Hooray!', styles: ToastStyles.success },
            { text: 'Eek', styles: ToastStyles.warning },
            { text: 'Oh noe!', styles: ToastStyles.error }
        ]

        // Send each message 1 second apart
        messages.forEach((message, i) => {
            setTimeout(() => this.setState({ message }), i * 1000)
        })
    }

    render() {
        return (
            <View>
                <Toaster message={this.state.message} />
            </View>
        )
    }
}

export default Model 

*/

import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';

import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'


class Model extends React.Component {
   
    render(){
        return(

            <View style = {{flex:1}}>

                <TextInput style = {{flex:1}} />

                <Button  style = {{flex:1}} title = 'f' />

                <Text  style = {{flex:6}}> 1 </Text>
                <Text  style = {{flex:6}}> 2 </Text>
                <Text  style = {{flex:6}}> 3 </Text>
                <TextInput style = {{flex:1}} />







            </View>



        ) 
    } 
}

export default Model 