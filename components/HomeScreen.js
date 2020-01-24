//This is an example code for Navigation Drawer with Custom Side bar//
import React, {Component} from 'react';
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
import {Card} from 'react-native-shadow-cards';
<<<<<<< HEAD
import {FloatingAction} from 'react-native-floating-action';
=======

import ActionButton from 'react-native-action-button';

>>>>>>> d6909137f0126d535f1f5c38a35337d005fc3076
// import all basic components

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens
import Screen1 from '../components/ComplaintsScreen.js';

//Import Custom Sidebar
import CustomSidebarMenu from '../components/CustomSidebarMenu.js';
<<<<<<< HEAD
import {Icon} from 'react-native-elements';
=======
import {Icon} from 'react-native-vector-icons';
>>>>>>> d6909137f0126d535f1f5c38a35337d005fc3076

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen

class MenuIcon extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{width: 20, height: 20, marginLeft: 10, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const actions = [
  {
    text: 'Create a Complain',
    icon: require('../assets/icons/pencil-48.png'),
    name: 'bt_createComplain',
    position: 1,
  },
];
class HomeScreen extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.mainnContainer}>
        <StatusBar backgroundColor="green" barStyle="light-content"></StatusBar>
        <Card style={styles.bigCards}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#00B5B8',
            }}>
            <Text style={{fontSize: 56, color: 'white', fontWeight: 'bold'}}>
              0
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'bold',
              }}>
              {' '}
              TOTAL Complaints{' '}
            </Text>
          </View>
        </Card>
        <Card style={styles.bigCards}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#3CB371',
            }}>
            <Text style={{fontSize: 56, color: 'white', fontWeight: 'bold'}}>
              0
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'bold',
              }}>
              {' '}
              Resolved Complaints{' '}
            </Text>
          </View>
        </Card>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                backgroundColor: '#F4A460',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
                Pending Complaints
              </Text>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: '#F08080',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
                In-Progress Complaints
              </Text>
            </View>
          </Card>
        </View>

        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1, right: 10}}>
<<<<<<< HEAD
          <FloatingAction
            actions={actions}
            onPressItem={name => {
              console.log('selected button:');
            }}
          />
=======
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
>>>>>>> d6909137f0126d535f1f5c38a35337d005fc3076
        </View>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
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
  },
);

export default createAppContainer(DrawerNavigatorExample);
const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 15,
    flex: 1,

    marginLeft: 10,
  },
  bigCards: {
    marginTop: 15,
    flex: 1.5,
    borderRadius: 4,
  },
  mainnContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
<<<<<<< HEAD
=======
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
>>>>>>> d6909137f0126d535f1f5c38a35337d005fc3076
  },
});