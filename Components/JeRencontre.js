import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import {KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase'
import CreerEvenement from './CreerEvenement'
import bg from "../assets/fond.png"
import username from "../assets/name.png"
import DetailEvenementItems from './DetailEvenementItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EvenementItems from './EvenementItems'
import InvertedFlatlist from 'react-native-inverted-flat-list';

class JeRencontre extends React.Component {

    constructor(props){
        super(props)
        this.state = {

            evenements : [],
            //description:"",
            //titre :"",

        }
    }



    componentDidMount(){

        const THIS = this
    
        firebase.database().ref().child('evenements').on('value', (childSnapshot) => {
    
          const evenements = []
          childSnapshot.forEach((doc) => {
            evenements.push({
                  key : doc.key,
                  description : doc.val().description,
                  titre : doc.val().titre ,
                  heure : doc.val().heure,
                  minutes : doc.val().minutes,
                  lieu : doc.val().lieu,
                  date : doc.val().date


                }
            );
          })
    
          this.setState({
            evenements : evenements
          })
        })
    
  
    }

   _afficherDetailEvenement = (heure,titre,description,minutes,date,lieu)=>{
      this.props.navigation.navigate("DetailEvenementItems",{heure: heure,titre:titre,description: description,minutes:minutes,date:date,lieu:lieu})
   }

    _validerJeRencontre(){
        this.props.navigation.navigate('CreerEvenement')

    }

    render() {
      



        return(

            //<ImageBackground source = {bg} style = {styles.bg}>

                <View style={styles.main_container}> 
                
                      <View style={styles.title_page}>
                          <View> 
                             <Text> </Text>
                             <Text>Listes des évènements</Text>
                          </View>
                      </View>
                      <InvertedFlatlist
                         data={this.state.evenements}
                         renderItem={({item}) => <EvenementItems evenements={item} DetailEvenement = {this._afficherDetailEvenement}/>}
                      />
                      <View style={styles.button}>

                        <Button title = "Créer un évènement" onPress={()=>this._validerJeRencontre()} />

                      </View>

                </View>


            // </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
    justifyContent: 'space-evenly',
    },
  
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },
   
    bg : {
        flex :1,
        width : null,
        height : null,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title_page:{
    fontWeight: 'bold',
    fontSize: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    },
    button:{
    alignItems: 'center',
    // back: 20,
  },
  });

export default JeRencontre