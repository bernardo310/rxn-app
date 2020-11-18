import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import CalendarioScreen from '../screens/Calendario/index';
import DonacionScreen from '../screens/Donacion/index';
import EventoScreen from '../screens/Evento/index';
import HomeScreen from '../screens/Home/index';
import ImagenesScreen from '../screens/Imagenes/index';
import ProductoScreen from '../screens/Producto/index';
import ProductosScreen from '../screens/Productos/index';
import RegistroScreen from '../screens/Registro/index';
import VideoScreen from '../screens/Video/index';
import VideosScreen from '../screens/Videos/index';

import Colors from '../constants/Colors';

//stack navigations
const defaultStackNavOptions = {
  headerTitleStyle: { fontFamily: 'montserrat-bold' },
  headerTitleAlign: { alignSelf: 'center' },
  headerBackTitleStyle: { fontFamily: 'montserrat-normal' },
  headerTintColor: Colors.primaryBlack,
}

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const CalendarioNavigator = createStackNavigator({
  Calendario: CalendarioScreen,
  Evento: EventoScreen,
  Registro: RegistroScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const DonacionNavigator = createStackNavigator({
  Donacion: DonacionScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const ProductosNavigator = createStackNavigator({
  Productos: ProductosScreen,
  Producto: ProductoScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const VideosNavigator = createStackNavigator({
  Videos: VideosScreen,
  Video: VideoScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const ImagenesNavigator = createStackNavigator({
  Imagenes: ImagenesScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})


//tab navigation
const tabsConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <FontAwesome5 name="home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Home'
    }
  },
  Calendario: {
    screen: CalendarioNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome5 name="calendar-alt" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Calendario'
    }
  },
  Donacion: {
    screen: DonacionNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome5 name="dollar-sign" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Donación', headerTitle: 'Your Favorites',
    }
  },
  Productos: {
    screen: ProductosNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome5 name="store" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Productos'
    }
  },
  Videos: {
    screen: VideosNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome5 name="youtube" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Videos'
    }
  },
  Imagenes: {
    screen: ImagenesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome5 name="image" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentYellow,
      tabBarLabel: 'Imágenes'
    }
  },
};

const Navigator = createBottomTabNavigator(tabsConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'montserrat-bold'
    },
    activeTintColor: Colors.accentYellow,
    inactiveTintColor: Colors.primaryWhite,
    inactiveBackgroundColor: Colors.primaryBlack,
    activeBackgroundColor: Colors.primaryBlack,
    showLabel: false,
    style: {
      backgroundColor: Colors.primaryBlack,
    }

    // animationEnabled: true
  }
})



export default createAppContainer(Navigator);
