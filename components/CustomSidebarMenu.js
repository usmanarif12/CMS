//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import profileIcon from '../assets/icons/profileicon.jpg';
export default class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/

    this.state = { showAlert: false };

    this.items = [
      {
        navOptionThumb: 'dashboard',
        navOptionName: 'Dashboard',
        screenToNavigate: 'NavScreen1',
      },
      {
        navOptionThumb: 'edit',
        navOptionName: 'Launch Complaints',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'error',
        navOptionName: 'Complaints',
        screenToNavigate: 'NavScreen3',
        },
      {
        navOptionThumb: 'email',
        navOptionName: 'Inbox',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'account-box',
        navOptionName: 'Accounts',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'assignment-turned-in',
        navOptionName: 'Package Plan',
        screenToNavigate: 'NavScreen3',
        },
        {
            navOptionThumb: 'cloud-download',
            navOptionName: 'Updates',
            screenToNavigate: 'NavScreen3',
        },
        {
            navOptionThumb: 'exit-to-app',
            navOptionName: 'Logout',
            screenToNavigate: 'NavScreen3',
          },
    ];
  }
 showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  _logoutUser = async () => {
    
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  render() {
    const {showAlert} = this.state;
    return (
        <View style={styles.sideMenuContainer}>
            
            
        {/*Top Large Image */}
            <Image
                source={profileIcon}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={30} color="#6ECF68" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? '#6ECF68' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  if (item.navOptionName === 'Logout') {
                    this.showAlert();
                  }
                  else {
                    this.props.navigation.navigate(item.screenToNavigate);
                  }
                  
                  
                  
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Logout?"
          message="Are You Sure You Want to Logout?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, Logout"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this._logoutUser();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    
    width: 180,
    height: 180,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});