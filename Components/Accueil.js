
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';

import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'


export default class Accueil extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            mail: "",
            password: "",
            isLog: false,
        }
    }
   
    render(){
        return(

            <View style={styles.container}>

                <View style={styles.top}> 
                    <View style={styles.profileimage}>
                        <Text>Ta tof</Text>
                    </View>
                </View>

                <View style = {styles.center} >
                    <Text>Salut !</Text>
                </View>

                <View style = {styles.bottom}>
                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Je Propose</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Je Demande</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Je Consulte</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Je Rencontre</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Mon espace Perso</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomItem}>
                        <TouchableOpacity style={styles.bottomItemInner}>
                            <Text>Paramètre</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        ) 
    } 
}


const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    top:{
        height:'35%',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#98d2c1"
    },
    profileimage:{
        width:140,
        height:140,
        borderRadius:100,
        borderWidth:4,
        borderColor:'#fff',
        backgroundColor:"#eee",
        justifyContent:"center",
        alignItems:'center',
    },
    center:{
        height:'10%',
        backgroundColor:'#7fbcac',
        justifyContent:"center",
        alignItems:'center',
    },
    bottom:{
        height:'55%',
        backgroundColor:'#292929',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
    },
    bottomItem:{
        width: '50%',
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




