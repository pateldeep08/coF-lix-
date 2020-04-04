import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, TextInput} from 'react-native';


import {KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import bg from "../assets/fond.png"
import { Toast } from 'react-native-toast-with-button'
//import ChoisirPhoto from './ChoisirPhoto'
import ChoisirPhoto from './ChoisirPhoto'
import { onSessionWasInterrupted } from 'expo/build/AR';
import DatePicker from 'react-native-datepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';


class JePropose extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titre : "", 
            description : "",  
            duree : "", 
            image:"",
            id_user: "",      
            json:{}                  
        }
    }

    Proposition(){

        //On check si tous les champs sont remplis
        if (this.state.titre != "" && this.state.description != "" && this.state.duree != ""){

            firebase.database().ref().child('propositions').push({

                titre: this.state.titre,
                description : this.state.description,
                duree : this.state.duree
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
            this.props.navigation.navigate('JeConsulte')
   

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

                <KeyboardAvoidingView style={styles.container}>

                    <View style={styles.container2} >

                        <View style={{ flexDirection: 'row'}} >

                            <TextInput 
                                style = {styles.input}
                                placeholder = "  Titre" 
                              
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


                        <View style={{ flexDirection: 'row'}} >

                            <DatePicker
                                style={styles.date}
                                date={this.state.duree}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2020-01-01"
                                maxDate="2333-01-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                
                                }}
                                onChangeText = {(text) => this.setState({duree : text})}
                            />

                        </View>

                        <View >
                            <Toast
                                ref="toast"
                                textStyle={{ color: 'green' }}
                                style={{ backgroundColor: 'green' }}
                            />
                        </View>
                        
                        <View style = {styles.buttonContainer}>

                            <TouchableOpacity 
                                style = {styles.buttonPhoto}
                                onPress = {()=>this._AjouterPhoto()}>
                                <Text>Ajouter une Photo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style = {styles.buttonVal}
                                onPress = {()=>this.Proposition()} >
                                <Text>Valider</Text>
                            </TouchableOpacity>

                        </View>
                        

                    </View>

                </KeyboardAvoidingView>


        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',

      //opacity:1,
      backgroundColor:"#98d2c1"
    },
    container2 : {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor : 'white',
        margin : "5%",
        alignItems: 'center',



    },
    input : {
        //borderRadius : 20,
        fontSize : 16,
        width : 320,
        justifyContent: 'space-between',
        //borderWidth: 20,
   
        backgroundColor : '#fff',
        //padding:'center',
        height:60,
       // textAlign: 'center',
       paddingLeft : 10,
        
        borderRadius : 20,
        //flex : 1
        borderWidth :2,
        borderColor : "#98d2c1",
        margin : "5%",
        //textAlign: 'center',
       // flex : 1

       
       //backgroundColor :'rgb(59,22,4)'
      // backgroundColor : 'rgb(255,255,255)'
        }, 

    input2 : {
        borderRadius : 20,
        fontSize : 16,
        width : 320,
        //justifyContent: 'center',
        textAlignVertical: 'top',
        //borderWidth: 0.5,
        //opacity:3,
        backgroundColor : '#fff',
        //padding:'center',
        height:200,
        //flex : 1
        borderWidth :2,
        borderColor : "#98d2c1",
        margin : "5%",
        //textAlign: 'center',
       // justifyContent: 'center',
       paddingLeft : 10,
       paddingTop : 14,

           
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
    },
    date : {
        width : 200,
        borderRadius : 20,
        borderColor : "#98d2c1",
        margin : '5%'
    },
    buttonContainer:{
        flexDirection : 'row',
        margin : "5%",

    },
    buttonVal:{
        margin : "5%",
        backgroundColor : "#98d2c1",
        borderRadius : 25,
        height : 50,
        width : 150,
        justifyContent: 'center',
        alignItems : 'center',
        paddingBottom : 11,
        elevation : 10
    
    },
    buttonPhoto:{
        margin : "5%",
        //backgroundColor : "#98d2c1",
        borderRadius : 25,
        height : 50,
        width : 150,
        justifyContent: 'center',
        alignItems : 'center',
        borderColor : "#98d2c1",
        borderWidth : 2,
        paddingBottom : 11,
        elevation : 5
    }

  });

export default JePropose