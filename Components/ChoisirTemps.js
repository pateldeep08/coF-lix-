import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text , Button} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

import CreerEvenement from './CreerEvenement'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class ChoisirTemps extends React.Component {
  state = {
    selectedHours: 0,
    //initial Hours
    selectedMinutes: 0,
    //initial Minutes
  }


  _validerTemps(){

    /*
      
      data.push({
        heure : this.state.selectedHours,
        minutes :this.state.selectedMinutes,
          
        })
      console.log(data)

    */
   
      
      this.props.navigation.navigate('CreerEvenement', {heure : this.state.selectedHours, minutes : this.state.selectedMinutes})

    }

  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.container}>
        <Text>{selectedHours}hr:{selectedMinutes}min</Text>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => this.setState({ 
               selectedHours: hours, selectedMinutes: minutes 
         })}
        />
        <View style ={styles.temps}> 

            <Button title = "Valider" onPress={()=>this._validerTemps()} />
                
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:50,
    marginRight:50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temps: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      opacity:1
    },

})

export default ChoisirTemps