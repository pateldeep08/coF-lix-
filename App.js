import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Components/Register'
import Login from './Components/Login'
import { render } from 'react-dom';
import Model from './Components/Model/Model'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
  render(){
    return (

       
        <Navigation/> 
      
   

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
