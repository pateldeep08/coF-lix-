import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Register from './Components/Register'
import Login from './Components/Login'
import { render } from 'react-dom';
import Model from './Components/Model/Model'
import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home'
import detail from './detail'
import Accueil from './Components/Accueil'
import stackAccueil from "./Components/stackAccueil"
import JePropose from "./Components/JePropose"
import PagePublication from './Components/PagePublication';
import ChoisirPhoto from './Components/ChoisirPhoto';



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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Accueil" component={Accueil} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="JePropose" component={JePropose} />
          <Stack.Screen name="PagePublication" component={PagePublication} />
          <Stack.Screen name="ChoisirPhoto" component={ChoisirPhoto} />



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
