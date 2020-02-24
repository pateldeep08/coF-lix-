// Navigation/Navigation.js

import Login from '../Components/Login'
import Register from '../Components/Register'

import { createStackNavigator, createAppContainer } from 'react-navigation-stack'



const SearchStackNavigator = createStackNavigator({
  Login: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    login: Login,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})





export default createAppContainer(SearchStackNavigator)