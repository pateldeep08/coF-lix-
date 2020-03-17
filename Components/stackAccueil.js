import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { render } from 'react-dom';


import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Accueil from './Accueil'


import JePropose from './JePropose'




const Stack = createStackNavigator()

export default class stackAccueil extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoadingComplete:false 
    }

  }




  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Accueil" component={Accueil} />
          <Stack.Screen name="JePropose" component={JePropose} />

        </Stack.Navigator>
      </NavigationContainer>

      );
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});