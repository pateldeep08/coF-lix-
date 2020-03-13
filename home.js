import React, {Component} from 'react'

import { View, Text, Button, TextInput } from 'react-native';

class home extends React.Component {
   
    render(){
        return(

            <View>

                <Text> Home </Text>

                <Button 
                    title='go to detail' 
                    onPress={()=>this.props.navigation.navigate('detail')}
                />

            </View>

        ) 
    } 
}

export default home