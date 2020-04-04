import React from 'react'
import { StyleSheet, Text, View, Alert, ImageBackground,TextInput, Button, TouchableOpacity } from 'react-native';
//import { TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
//import tabNom from '../BDD/UserDB'
import data from '../BDD/UserDB'
import Toaster, { ToastStyles } from 'react-native-toaster'
import { Toast } from 'react-native-toast-with-button'
import Confetti from "react-native-confetti"
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/Entypo'
import { Input } from 'react-native-elements';
import bg from "../assets/fond.png"
import username from "../assets/name.png"
import 'react-native-gesture-handler';
import firebase from 'firebase'
import { connect} from 'react-redux'
import {useSelector} from 'react-redux' 
import { BorderlessButton } from 'react-native-gesture-handler';





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
            navigation.navigate('Accueil', {userName : user.displayName})
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

                <KeyboardAvoidingView style = {styles.mainContainer} behavior="padding"  >

                    <View style = {styles.mainContainer}>

                        <View style = {styles.container}>


                        

                        
                            <Text style = {styles.textH}>Résidence St-Félix</Text>

                            <View > 
                                <Input
                                    style = {styles.Input}
                                    placeholder="Mail"
                                    onChangeText={(text) => this.setState({ mail: text })}
                                    value={this.state.mail}
                                    label="Mail"
                                    mode="outlined"
                                    leftIcon={{ type: 'entypo', name: 'mail' }}
                                // multiline="true"
                                />

                                <View style = {styles.space2}></View>
                                
                                <Input
                                    style = {styles.Input}
                                    placeholder="  Mot de passe"
                                    onChangeText={(text) => this.setState({ password: text })}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    label="Mot de Passe"
                                    mode="outlined"
                                    leftIcon={{ type: 'evil-icons', name: 'lock' }}
                                />
                            
                            </View>

                            

                            <View >
                                <Toast
                                    ref="toast"
                                    textStyle={{ color: 'red' }}
                                    style={{ backgroundColor: 'red' }}
                                />
                            </View>

                            <View style = {styles.space}></View>


                            <View style = {styles.buttonContainer}>

                                <TouchableOpacity 
                                    style = {styles.buttonRegister}
                                    onPress={()=>this.props.navigation.navigate('Register')}>
                                    <Text>S'enregistrer</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style = {styles.buttonVal}
                                    onPress={() => this._validerLog()}>
                                    <Text>Connexion</Text>
                                </TouchableOpacity>

                            </View>
        
                        </View>

                    </View>

                </KeyboardAvoidingView>


        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor : "#98d2c1",
    },
    container : {
        backgroundColor : "white",
        margin : '5%',
        marginTop : '10%',
        justifyContent: 'center',
        height : '92%'
        
        
    },
    textH:{
        fontSize : 30,
        fontWeight: "bold",
        color : "#98d2c1",
        padding : 10,
        marginBottom : 50,
        
    },
    buttonVal:{
        margin : "5%",
        backgroundColor : "#98d2c1",
        borderRadius : 100,
        height : 50,
        width : 150,
        justifyContent: 'center',
        alignItems : 'center',
        paddingBottom : 11,
        elevation : 10,
        paddingRight : 10
    
    },
    buttonRegister:{
        margin : "5%",
        //backgroundColor : "#98d2c1",
        borderRadius : 100,
        height : 50,
        width : 150,
        justifyContent: 'center',
        alignItems : 'center',
        borderColor : "#98d2c1",
        borderWidth : 2,
        paddingBottom : 11,
        elevation : 5
    },
    buttonContainer:{
        flexDirection : 'row',
        margin : "5%",
        alignItems : 'center',
        paddingRight : 200,
        marginTop : 30,

    },
    Input:{
        marginBottom : 20
    },
    space: {
        height : 200
    },
    space2:{
        height : 30

    }

})


/*
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
     //   justifyContent: 'space-around',
        backgroundColor :"#98d2c1",
       // height : 
    },
    input: {

        fontSize: 16,
        width: 100,
        justifyContent: 'center',
        height: '20%',
        paddingLeft : 10,
        width : 40
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
        //flex:1,
        width:20

    },
    mainContainer:{
        backgroundColor : "white",
        margin : "10%",
        width : 400,
        justifyContent: 'space-around',
        borderRadius : 200
        


    }
});

*/
export default Login
