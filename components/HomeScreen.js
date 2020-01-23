//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
    Text,
  StatusBar,
} from 'react-native';
import { Card } from 'react-native-shadow-cards';
// import all basic components
 
;
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 
//Import all the screens
import Screen1 from '../components/ComplaintsScreen.js';

 
//Import Custom Sidebar
import CustomSidebarMenu from '../components/CustomSideBarMenu.js';
 
global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class MenuIcon extends Component {
 
    toggleDrawer = () => {
   
      this.props.navigationProps.toggleDrawer();
   
    }
   
    render() {
   
      return (
   
        <View style={{ flexDirection: 'row' }}>
   
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
   
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
              style={{ width: 20, height: 20, marginLeft: 10 , tintColor:'white'}}
            />
   
          </TouchableOpacity>
   
        </View>
   
      );
   
   
    }
  }

class HomeScreen extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.mainnContainer} >
         <StatusBar
        backgroundColor="green"
                barStyle="light-content"></StatusBar>
            <Card style = {styles.cardStyle}>
                <View>
                    <Text> Total Complaints</Text>
                </View>
            </Card>
            <Card style = {styles.cardStyle}>
                <View>
                    <Text> Total Complaints</Text>
                </View>
            </Card>
            <Card style = {styles.cardStyle}>
                <View>
                    <Text> Total Complaints</Text>
                </View>
            </Card>
            <Card style = {styles.cardStyle}>
                <View>
                    <Text> Total Complaints</Text>
                </View>
            </Card>
            <Card style = {styles.cardStyle}>
                <View>
                    <Text> Total Complaints</Text>
                </View>
            </Card>

      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <MenuIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <MenuIcon navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <MenuIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 3',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 100,
  }
);

export default createAppContainer(DrawerNavigatorExample);
const styles = StyleSheet.create({

    cardStyle: {
      marginTop:20,
        width: '90%',
        height:70,
    },
    mainnContainer:{
        
        alignItems: 'center',
        flex: 1,
        flexDirection:'column'
    },
    textStyle: {
        
    }

})
