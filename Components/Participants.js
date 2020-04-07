import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';

import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'
import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons,MaterialIcons} from '@expo/vector-icons';


class Participants extends React.Component {
   
    render(){

        return(

            <View style={styles.description_icon}>
                <FontAwesome name="check-circle" size={32} color="green" style={styles.icon} />
                <Text> {this.props.participants.nom}</Text>
            </View>



        ) 
    } 
}

export default Participants 


const styles = StyleSheet.create({
    
    description_icon : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    
    icon : {
        marginLeft : 5,
        alignItems : 'center',
        marginRight:5
    }, 
})
    