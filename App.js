import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Register from './Components/Register'
import Login from './Components/Login'
import { render } from 'react-dom';
import Model from './Components/Model/Model'

import {Provider} from 'react-redux'
//import Store from './Store/configStore'
import {useSelector} from 'react-redux' 

import firebase from 'firebase'

import 'react-native-gesture-handler';

//import {Provider } from 'react-redux'
//import {store} from './Redux/app.redux'



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Accueil from './Components/Accueil'
import init from './Components/init'
import JePropose from './Components/JePropose'

import ChoisirPhoto from './Components/ChoisirPhoto'
import PagePublication from './Components/PagePublication'


import stackAccueil from "./Components/stackAccueil"
import { createStore } from 'redux';

//import allReducers from './Redux/reducers/reducersIndex'
import JeDemande from './Components/JeDemande';
import JeConsulte from './Components/JeConsulte';
import PageDemande from './Components/PageDemande';
import DemandeItems from './Components/DemandeItems';
import JeRencontre from './Components/JeRencontre';
import CreerEvenement from './Components/CreerEvenement';
import EvenementItems from './Components/EvenementItems'
//import ChoisirPhotoEvenement from './Components/ChoisirPhotoEvenement'
import ChoisirTemps from './Components/ChoisirTemps'



//const store = createStore(allReducers)

/*
life cycle 
https://www.w3schools.com/react/react_lifecycle.asp
*/

/*

https://www.youtube.com/watch?v=_z9DS9gpujY&t=287s

// Store = Global State


// Action toggle_isInit 

const toFalse = () =>{
  return{
    type : 'TOFALSE'
  }
}


//reducer 

const toggle_isInit = (state = true , action ) => {
  switch (action.type) {
    case 'TOFALSE':
      return false
      
      
  

  }
}

let store = createStore(toggle_isInit)

//Display it on console 

store.subscribe(()=>console.log(store.getState()))

// Dispatch
store.dispatch(toFalse())


*/



const Stack = createStackNavigator()

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoadingComplete:false 
    }

  }


  onAuthStateChanged = (user) => {}

  render(){
    return (



          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="init" component={init} />
              <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
              <Stack.Screen name="Accueil" component={Accueil} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="JePropose" component={JePropose} />
              <Stack.Screen name="ChoisirPhoto" component={ChoisirPhoto} />
              <Stack.Screen name="PagePublication" component={PagePublication} />
              <Stack.Screen name="JeDemande" component={JeDemande} />
              <Stack.Screen name="JeConsulte" component={JeConsulte} />
              <Stack.Screen name="PageDemande" component={PageDemande} />
              <Stack.Screen name="JeRencontre" component={JeRencontre} />
              <Stack.Screen name="EvenementItems" component={EvenementItems} />
              <Stack.Screen name="CreerEvenement" component={CreerEvenement} initialParams={{heure : null}, {minutes : null}}/>

              <Stack.Screen name="ChoisirTemps" component={ChoisirTemps} />



              
            </Stack.Navigator>
          </NavigationContainer>


   

    

      


      );
   }
}


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      

    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

    </View>
  );
}






/*
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
