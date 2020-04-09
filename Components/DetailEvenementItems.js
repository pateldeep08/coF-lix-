import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, FlatList} from 'react-native'
import CreerEvenement from './CreerEvenement'
import EvenementItems from './EvenementItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons,MaterialIcons} from '@expo/vector-icons';
import firebase from 'firebase'

import Participants from './Participants'

const COULEUR = 'rgb(5,105,136)'



class DetailEvenementItems extends React.Component {

  constructor(props){
    super(props)
    this.state = {

      press : false ,
      key : this.props.route.params.key,
      participants : [],
      isParticipe : false 


    }
  }

  componentDidMount(){

    const THIS = this

    firebase.database().ref().child('evenements/'+ this.state.key + '/participants').on('value', (childSnapshot) => {

      const participants = []
      childSnapshot.forEach((doc) => {
        participants.push({
              key : doc.key,
              nom : doc.val().nom,
            }
        );
      })

      this.setState({
        participants : participants
      })
    })
  }


  jeParticipe(){

    firebase.database().ref().child('evenements/'+ this.state.key + '/participants').push({

      nom : firebase.auth().currentUser.displayName, 

    }).then(() => {
      //success callback
      //console.log('data ', data)
    }).catch(() => {
      //error callback
      //console.log('error ', error)
    })

    this.setState({isParticipe:true})
  }

  jeParticipePas(){

    this.setState({isParticipe:true})
  }

  render() {

    const titre = this.props.route.params.titre
    const heure = this.props.route.params.heure
    const description = this.props.route.params.description
    const minutes = this.props.route.params.minutes
    const date = this.props.route.params.date
    const lieu = this.props.route.params.lieu

    return (

      <View style = {styles.flexContainer}>
       
      <ScrollView style={styles.scrollview_container}>

      <View style={styles.viewStyle}>
        <Text style={styles.title_text}>{titre}</Text>

        <View style={styles.description_icon}>
          <Entypo name="text" size={32} color='rgb(5,105,136)'  />
          <Text>  Description : </Text>
        </View>

        <View style={styles.descriptionDetail}>
            <Text style={styles.description_text}>{description}</Text>
        </View>

        <View style={styles.description_icon}>
          <Ionicons name="md-information-circle" size={32} color='rgb(5,105,136)' style={styles.icon} />
          <Text>  Information Pratique : </Text>
        </View>

        <View style={styles.info}>
          <FontAwesome name="user" size={32} color='rgb(5,105,136)' style={styles.icon} />
          <Text>        Organisé par :</Text>
        </View>

        <View style={styles.info}>
          <Entypo name="calendar" size={32} color='rgb(5,105,136)' style={styles.icon} />
          <Text>    Le {date} à {heure}h{minutes}min</Text>
        </View>

        <View style={styles.info}>
          <MaterialIcons name="place" size={32} color='rgb(5,105,136)' style={styles.icon} />
          <Text>    A {lieu}</Text>
        </View>

        <View style={styles.participantsContainer}>
          <FontAwesome name="users" size={32} color='rgb(5,105,136)' style={styles.icon} />
          <Text>    Participants : </Text>
        </View>

        <View style = {styles.participants}>

          <FlatList
            //style = {styles.flat}   
            data={this.state.participants}
            renderItem={({item}) => <Participants participants={item}/>}
          />

        </View>

      </View>
    </ScrollView>


    { this.state.isParticipe ? null : 

    
    <View style = {styles.buttonContainer}>

      <TouchableOpacity
        style={styles.buttonParticipe}
        onPress={()=>this.jeParticipe()}>
        <Text>Je Participe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>this.jeParticipePas()}>
        <Text>Je Participe pas</Text>
      </TouchableOpacity>

    </View>}

    </View>
)
}
}

const styles = StyleSheet.create({
main_container: {
flex: 1
},
loading_container: {
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
alignItems: 'center',
justifyContent: 'center'

},
scrollview_container: {
flex: 2,
backgroundColor : COULEUR,
},
image: {
height: 169,
margin: 5
},
title_text: {
fontWeight: 'bold',
fontSize: 35,
flex: 1,
flexWrap: 'wrap',
marginLeft: 5,
marginRight: 5,
marginTop: 10,
marginBottom: 10,
color: '#000000',
textAlign: 'center',
//fontStyle : ''



},
description_text: {
// fontStyle: 'italic',
color: 'white',
margin: 15,
marginBottom: 15,
//color : 'white',

},
default_text: {
marginLeft: 5,
marginRight: 5,
marginTop: 5,
},
viewStyle : {
backgroundColor :"white",
marginLeft: 10,
marginRight: 10,
marginTop: 10,
borderRadius : 25,
//paddingBottom : 50,
marginBottom : 10
//borderWidth : 1,
// borderColor : "red"



},
description_icon : {
flexDirection : 'row',
//flex : 1,
alignItems : 'center'
},
descriptionDetail : {
backgroundColor : COULEUR,
marginLeft: 25,
marginRight: 25,
marginTop: 25,
marginBottom : 25,
borderRadius : 25,
minHeight : 100,
justifyContent: 'center'
},
icon : {
marginLeft : 5,

alignItems : 'center',
marginRight:5


}, 
info : {
marginTop : 30,
marginLeft : 60,
flexDirection : 'row',
alignItems : 'center'


},
buttonParticipe : {
backgroundColor : "white",
marginLeft: 25,
marginRight: 25,
marginTop: 25,
marginBottom : 25,
borderRadius : 25,
minHeight : 50,
justifyContent: 'center',
alignItems : 'center',
elevation : 10,
borderColor : 'green',
borderWidth : 1,
width : 150


},
button : {
  backgroundColor : "white",
  marginLeft: 25,
  marginRight: 25,
  marginTop: 25,
  marginBottom : 25,
  borderRadius : 25,
  minHeight : 50,
  justifyContent: 'center',
  alignItems : 'center',
  elevation : 10,
  borderColor : 'red',
  borderWidth : 1,
  width : 150
},
buttonContainer : {
  flexDirection : 'row',
  alignItems:'center',
  justifyContent: 'center',
  //flex : 1
  //backgroundColor:'black'
},
participantsContainer:{
  flexDirection:'row',
  alignItems:'center',
  marginTop : 20,

},
flexContainer:{
  flex:1
},
participants:{
  marginLeft: 30,
  marginTop : 10,
  marginBottom : 25
},



})


export default DetailEvenementItems