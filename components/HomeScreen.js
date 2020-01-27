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
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import complaintsTypeScreen from '../components/ComplaintTypesScreen.js';
import ActionButton from 'react-native-action-button';

// import all basic components

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import launchComplainIcon from '../assets/icons/pencil-48.png';
//Import all the screens
import Screen1 from '../components/ComplaintsScreen.js';

//Import Custom Sidebar
import CustomSidebarMenu from '../components/CustomSidebarMenu.js';
import {Icon} from 'react-native-vector-icons';
import totalComplaintsIcon from '../assets/icons/document.png';
import resolvedComplaintsIcon from '../assets/icons/checklist.png';
import pendingComplaintsIcon from '../assets/icons/homework.png';
import inProgressComplaintIcon from '../assets/icons/plan.png';

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

class LaunchComplainIcon extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={launchComplainIcon}
            style={{width: 20, height: 20, marginRight: 15, tintColor: 'white'}}
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
      <View style={styles.mainnContainer}>
        <StatusBar backgroundColor="green" barStyle="light-content"></StatusBar>
        <Card style={styles.bigCards}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#00B5B8',
            }}>
            <View
              style={{flex: 0.5, marginLeft: 15, justifyContent: 'flex-start'}}>
              <Image
                source={totalComplaintsIcon}
                style={{width: 100, height: 100}}></Image>
            </View>
            <View style={{marginLeft: 70}}>
              <Text style={{fontSize: 56, color: 'white', fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontStyle: 'normal',
                }}>
                Total Complaints
              </Text>
            </View>
          </View>
        </Card>
        <Card style={styles.bigCards}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#3CB371',
            }}>
            <View>
              <Image
                source={resolvedComplaintsIcon}
                style={{width: 100, height: 100}}></Image>
            </View>
            <View style={{marginLeft: 15}}>
              <Text style={{fontSize: 56, color: 'white', fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontStyle: 'normal',
                }}>
                Resolved Complaints
              </Text>
            </View>
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
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={{marginLeft: 5}}>
                <Image
                  source={pendingComplaintsIcon}
                  style={{width: 50, height: 50}}></Image>
              </View>
              <View style={{marginLeft: 5}}>
                <Text
                  style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                  0
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  Pending Complaints
                </Text>
              </View>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: '#F08080',
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={inProgressComplaintIcon}
                  style={{height:50, width:50}}>
                  
                  </Image>
              </View>
              <View style={{marginLeft:5}}>
                <Text
                  style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                  0
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                  }}>
                  InProgress Complaints
                </Text>
              </View>
            </View>
          </Card>
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            height: 50,
            width: '100%',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Card style={styles.cardButton}>
            <TouchableHighlight
              style={{width: '100%', alignItems: 'center'}}
              underlayColor="#2094D0"
              onPress={() => this.props.navigation.navigate('complaintsType')}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={launchComplainIcon}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 20,
                    tintColor: 'white',
                  }}
                />
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Launch Complain
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
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
      headerLeft: () => <MenuIcon navigationProps={navigation} />,
      headerRight: () => <LaunchComplainIcon />,

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
      title: 'Complaints',
      headerLeft: () => <MenuIcon navigationProps={navigation} />,
      headerRight: () => <LaunchComplainIcon />,

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
      headerLeft: () => <MenuIcon navigationProps={navigation} />,
      headerRight: () => <LaunchComplainIcon />,

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
  },
  cardButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#6ECF68',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: DrawerNavigatorExample,
    navigationOptions: {
      headerShown: false,
    },
  },
  complaintsType: {
    screen: complaintsTypeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(AppNavigator);
