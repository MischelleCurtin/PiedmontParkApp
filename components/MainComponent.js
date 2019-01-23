import React, {Component} from 'react';
import { View, Platform } from 'react-native';
import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './HomeComponent';
import Tour from './TourComponent';
import TourStopDetail from './TourStopDetailComponent';

const TourNavigator = createStackNavigator(
    {
        Tour: {screen: Tour},
        StopDetail: {screen: TourStopDetail}
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
  );
  
  const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home},
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
  );
  
  const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Tour: {
        screen: TourNavigator,
        navigationOptions: {
            title: 'Tour',
            drawerLabel: 'Tour'
        }
    }
  },
    {
        drawerBackgroundColor: '#D1C4E9'
    }
  )

  const Main = createAppContainer(MainNavigator);

  export default Main;
  
//   class Main extends Component {
//     constructor(props) {
//         super(props);
//     }
  
//     render() {
//         return(
//             <View style = {{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
//                 <MainContainer />
//             </View>
//         )
//     }
  
//   }
  
//   export default Main;