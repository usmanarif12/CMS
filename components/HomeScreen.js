//This is an example code for Navigation Drawer with Custom Side bar//
import React, {Component} from 'react';
import ViewComplaintsScreen from '../components/ViewComplaints.js';
import CloseComplaint from '../components/CloseComplaint.js';
import profileIcon from '../assets/icons/profileicon.jpg';
import { Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
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
  FlatList,
  Alert,
  AsyncStorage 
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import complaintsTypeScreen from '../components/ComplaintTypesScreen.js';
import ActionButton from 'react-native-action-button';

// import all basic components

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import launchComplainIcon from '../assets/icons/pencil-48.png';
//Import all the screens
import Screen1 from '../components/ComplaintTypesScreen.js';

//Import Custom Sidebar

import TotalComplaintsList from '../components/TotalComplaintsList.js';
import Screen2 from './TotalComplaintsList.js';

import totalComplaintsIcon from '../assets/icons/document.png';
import resolvedComplaintsIcon from '../assets/icons/checklist.png';
import pendingComplaintsIcon from '../assets/icons/homework.png';
import inProgressComplaintIcon from '../assets/icons/plan.png';

//global.currentScreenIndex = 0;
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
        
        <StatusBar backgroundColor="#2E8B57" barStyle="light-content"></StatusBar>

        <View style={styles.container}>
    
      </View>

        <TouchableHighlight  style={styles.bigCards} onPress={() => this.props.navigation.navigate('TotalComplaintsList')} >
        <Card style={styles.bigCards}  >
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
                style={{width: 80, height: 80}}></Image>
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

        </TouchableHighlight>

        <TouchableHighlight style={styles.bigCards} onPress={() => this.props.navigation.navigate('TotalComplaintsList')}>
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
                style={{width: 80, height:80}}></Image>
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
        </TouchableHighlight>
    
        
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
                  Launch Complaint
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
          
        </View>
  
      </View>
    );
  }
}

class Custom_Side_Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  }
 
  _logoutUser = async () => {
    
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    
   const showSimpleAlert = () => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
      Alert.alert(
        'Notification',
        'This Option will be added soon',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK'},
        ],
        {cancelable: false},
      );
    };
    const showLogoutAlert = () => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());
      Alert.alert(
        'logout?',
        'Are you Sure You Want to Logout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {this._logoutUser()},
          },
        ],
        {cancelable: false},
      );
    };
 
    return (
 
      <View style={styles.sideMenuContainer}>


          {/* <View style={{marginLeft:15}}>
          <Icon style={{ color: '#000000' }} size={25} name={'md-arrow-back'} onPress={()=>{this.props.navigation.dispatch(DrawerActions.closeDrawer())}}/>
          </View> */}
 
        <Image source={profileIcon}
          style={{
            
            width: 170,
            height: 170,
              marginLeft:30
          }} />
        <View style={{ justifyContent:'center', alignContent:'center', marginLeft:95, marginTop:10}}>
        <Text style={{fontWeight:'bold', fontSize:16}}>UserName</Text>
        </View>
        
 
        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
 
        <View style={{width: '100%'}}>
 
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}} >
 
              <View
              style={styles.sideMenuIcon}>
              <Icon name="dashboard" color="#2E8B57"/>
              </View>
              
              <Text style={styles.menuText} onPress={() => this.props.navigation.navigate('First')} > Dashboard </Text>
 
            </View>
 
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon}>
              <Icon name="edit" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => this.props.navigation.navigate('complaintsType')} > Launch Complaint </Text>
 
            </View>
 
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "error" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => this.props.navigation.navigate('TotalComplaintsList')} > Complaints </Text>
 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "email" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => showSimpleAlert()} > Inbox </Text>
 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "account-box" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => showSimpleAlert()} > Accounts </Text>
 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "assignment-turned-in" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => showSimpleAlert()} > Package Plan </Text>
 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "cloud-download" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => showSimpleAlert()} > Updates </Text>
 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
              <View
              style={styles.sideMenuIcon} >
              <Icon name = "exit-to-app" color="#2E8B57"/>
              </View>
 
              <Text style={styles.menuText} onPress={() => showLogoutAlert()} > Logout </Text>
 
            </View>
 
 
       </View>
 
       <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
 
       
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
     
      headerStyle: {
        backgroundColor: '#2E8B57',
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
    navigationOptions:{
      headerShown:false
    }
  
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen2,
    navigationOptions:{
      headerShown:false
    }
  
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
    contentComponent: Custom_Side_Menu,
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
    backgroundColor: '#2E8B57',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    margin:20
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  sideMenuContainer: {
 
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    
    paddingTop: 20
  },
  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20
    
  },
 
  menuText:{
 
    fontSize: 15,
    color: '#222222',
    
  }
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
  TotalComplaintsList: {
    screen: TotalComplaintsList,
    
   
  },
  ViewComplaintsScreen: {
    screen: ViewComplaintsScreen,
    navigationOptions: {
      headerShown: false,
}
   
  },

  CloseComplaint: {
    screen: CloseComplaint ,
    navigationOptions : {
      title: 'Close Complaint',
      headerStyle: {
        backgroundColor: '#2E8B57',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
   
  },

});
export default createAppContainer(AppNavigator);
