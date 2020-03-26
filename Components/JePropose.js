import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import bg from "../assets/fond.png"
import { Toast } from 'react-native-toast-with-button'
//import ChoisirPhoto from './ChoisirPhoto'
import ChoisirPhoto from './ChoisirPhoto'
import { onSessionWasInterrupted } from 'expo/build/AR';


class JePropose extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titre : "a", 
            description : "a",  
            duree : "a", 
            image:"",
            id_user: "",
            json:{}
        }
    }

    Proposition(){

        //On check si tous les champs sont remplis
        if (this.state.titre != "" && this.state.description != "" && this.state.duree != ""){

            firebase.database().ref().child('proposition').push({

                titre: this.state.titre,
                //description: this.state.description,
                //duree: this.state.duree,
                //userId: 'test'
    
            }).then(() => {
                //success callback
                //console.log('data ', data)
            }).catch(() => {
                //error callback
                //console.log('error ', error)
            })
        }
        else Alert.alert('Pop Pop Pop ! Tous les champs ne sont pas remplis !')

        this.setState({
            titre : "",
            description : "",
            duree : ""
        })

        this.show()

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        sleep(1000).then(()=>{

            this.props.navigation.navigate('Accueil')

        })

        this.getProposition()

        
    
    }

    getProposition(){

        

       // var userId = this.props.route.params.userName

        /*
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = (snapshot.val() && snapshot.val().displayName) || 'Anonymous';
     
            console.log(username)
           // ...
        });

        */

      //  console.log(userId)

        const json = this.state
        const aff = this
        
        firebase.database().ref().child('Proposition').on('value', (data) => {
          var a;
          // console.log(data.toJSON())
          //aff.setState({json : data})
          json.json = data.toJSON()
          //   resultat = a;
          console.log(json.json)
         //   console.log("premier");
         //   //console.log(a)
         //   aff.affichageJSON(json.json)
         //   console.log(json.json);
        });
        
            
       //console.log(this.state.json)
      
      //console.log("------------")
      //console.log(a)
      //console.log(propositions)
     
    }
    
    affichageJSON(json){
        //parse le json pour le lire
        const obj = JSON.stringify(json)
        const obj1 = JSON.parse(obj)
         console.log(json)
        // const resultat = obj1[0]
        // console.log("afficahe json ")
        // console.log(resultat);
        // this.state.json = resultat
        
    }

    show() {
        this.refs.toast.show("Ajouté ✓", 1000, null, () => this.refs.toast.close(), null)
    }

    _AjouterPhoto(){
        this.props.navigation.navigate('ChoisirPhoto')
    }

    render() {
        
        return(

            <ImageBackground source = {bg} style = {styles.bg}>

                 
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                    <Button title = "Ajouter Photos" onPress={()=>this._AjouterPhoto()} />
                    
                    <View style={{ flexDirection: 'row'}} >

                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Titre" 
                            placeholderTextColor="#fff" 
                            onChangeText = {(text) => this.setState({titre : text})} 
                            value = {this.state.titre}
                            label = "Titre"
                            mode = "outlined"
                        />
                    </View>


                    <View>
                        <TextInput 
                            style = {styles.input2}
                            placeholder = "  Description" 
                            onChangeText = {(text) => this.setState({description : text})} 
                            value = {this.state.description}
                            label = "Description"
                            mode = "outlined"
                        />
                    </View>


                    <View>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "  Durée"
                            onChangeText = {(text) => this.setState({duree : text})}
                            value = {this.state.duree}
                            label = "Durée"
                            mode = "outlined"
                        />
                    </View>

                    <View >
                        <Toast
                            ref="toast"
                            textStyle={{ color: 'green' }}
                            style={{ backgroundColor: 'green' }}
                           
                        />
                    </View>
                    

                    

                       

                    <Button title = "Valider" onPress={()=>this.Proposition()} />

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },
    input : {
        //borderRadius : 20,
        fontSize : 16,
        width : 320,
        justifyContent: 'space-between',
        //borderWidth: 20,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:45,
       // flex : 1

       
       //backgroundColor :'rgb(59,22,4)'
       backgroundColor : 'rgb(255,255,255)'
        }, 

    input2 : {
        borderRadius : 20,
        fontSize : 16,
        width : 320,
        justifyContent: 'center',
        textAlignVertical: 'top',
        //borderWidth: 0.5,
        opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:200,
        //flex : 1

           
       //backgroundColor :'rgb(59,22,4)'
       backgroundColor : 'rgb(255,255,255)'
        },

    input_titre: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
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

export default JePropose