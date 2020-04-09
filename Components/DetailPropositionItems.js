import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

import PublicationItems from './PublicationItems'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, Entypo, FontAwesome, Foundation, EvilIcons} from '@expo/vector-icons';

class DetailPropositionItems extends React.Component {
  render() {

    const titre = this.props.route.params.titre
    const description = this.props.route.params.description
    const dateFin = this.props.route.params.dateFin
    
    return (
       
      <ScrollView style={styles.scrollview_container}>

      <View style={styles.viewStyle}>
        <Text style={styles.title_text}>{titre}</Text>

        <View style={styles.description_icon}>
          <Entypo name="text" size={32} color='rgb(130,32,70)'  />
          <Text>  Description : </Text>
        </View>

        <View style={styles.descriptionDetail}>
            <Text style={styles.description_text}>{description}</Text>
        </View>

        <View style={styles.description_icon}>
          <Ionicons name="md-information-circle" size={32} color='rgb(130,32,70)' style={styles.icon} />
          <Text>  Information Pratique : </Text>
        </View>

        <View style={styles.info}>
          <FontAwesome name="user" size={32} color='rgb(130,32,70)' style={styles.icon} />
          <Text>        Proposé par :</Text>
        </View>

        <View style={styles.info}>
          <Entypo name="calendar" size={32} color='rgb(130,32,70)' style={styles.icon} />
          <Text>    Proposé jusqu'au : {dateFin}</Text>
        </View>

        <View style={styles.info}>
          <Foundation name="telephone" size={32} color='rgb(130,32,70)' style={styles.icon} />
          <Text>       +33 6 52 05 80 56</Text>
        </View>

        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.textButton}>J'aide</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
flex: 1,
backgroundColor : 'rgb(130,32,70)',
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
//color: 'black',
margin: 15,
marginBottom: 15,
color:'white'
},
default_text: {
marginLeft: 5,
marginRight: 5,
marginTop: 5,
color:'white'
},
viewStyle : {
backgroundColor :"white",
marginLeft: 10,
marginRight: 10,
marginTop: 10,
borderRadius : 25,
//borderWidth : 1,
// borderColor : "red"



},
description_icon : {
flexDirection : 'row',
//flex : 1,
alignItems : 'center'
},
descriptionDetail : {
backgroundColor : 'rgb(130,32,70)',
marginLeft: 25,
marginRight: 25,
marginTop: 25,
marginBottom : 25,
borderRadius : 25,
minHeight : 200,
justifyContent: 'center'
},
icon : {
marginLeft : 5

}, 
info : {
marginTop : 30,
marginLeft : 60,
flexDirection : 'row',
alignItems : 'center'


},
button : {
  backgroundColor : 'rgb(130,32,70)',
  marginLeft: 25,
  marginRight: 25,
  marginTop: 25,
  marginBottom : 25,
  borderRadius : 25,
  minHeight : 50,
  justifyContent: 'center',
  alignItems : 'center',
  elevation : 10
},
textButton:{
  color:"white"
}

})


export default DetailPropositionItems