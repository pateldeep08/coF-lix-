import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Components/Register'
import Login from './Components/Login'
//import { render } from 'react-dom'; cette ligne là est inutile, render existe déja dans la classe parent (Component).

/*
 * D'un point de vue écriture de code, je trouve ça plus classe d'écrire class App extends Component {
 * Ne pas oublier du coup d'importer Component et faire à la toute fin export default App;
 */
export default class App extends React.Component {
  render(){
    return (

       
        <Login/> 
      
   

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

