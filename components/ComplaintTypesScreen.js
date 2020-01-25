import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
  StatusBar,
  TextInput,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import agricultureicon from '../assets/icons/agriculture.png';
import bankicon from '../assets/icons/bank.png';
import communicationicon from '../assets/icons/communication.png';
import developmenticon from '../assets/icons/development.png';
import disastericon from '../assets/icons/disaster.png';
import educationicon from '../assets/icons/education.png';
import energyicon from '../assets/icons/energy.png';
import foresticon from '../assets/icons/forest.png';
import createComplaint from './CreateComplainScreen.js';
import LaunchComplain from '../components/LaunchComplain.js'

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

class ComplaintTypes extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.Container}>
          <StatusBar
            backgroundColor="green"
            barStyle="light-content"></StatusBar>

          
          <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center' , alignItems:'center' , marginTop:20}}>
            <TouchableHighlight  onPress={() =>navigate('createComplaint', "Agriculture")}>

            <Card style={{ height: 150, width: 150, marginRight: 20 }}>
              
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={agricultureicon}></Image>
                <Text>Agriculture</Text>
              </View>
            </Card>
          </TouchableHighlight>
            
            <Card style={{height:150 , width:150}}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={bankicon}></Image>
                <Text>Banking</Text>
              </View>
            </Card>
          </View>
          

          <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center' , alignItems:'center' , marginTop:20}}>
            <Card style={{height:150 , width:150, marginRight:20 }}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={communicationicon}></Image>
                <Text>Communication</Text>
              </View>
            </Card>
            <Card style={{height:150 , width:150}}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={developmenticon}></Image>
                <Text>Developement</Text>
              </View>
            </Card>
          </View>
          
          <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center' , alignItems:'center' , marginTop:20}}>
            <Card style={{height:150 , width:150, marginRight:20 }}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={disastericon}></Image>
                <Text>Diasaster</Text>
              </View>
            </Card>
            <Card style={{height:150 , width:150}}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={educationicon}></Image>
                <Text>Education</Text>
              </View>
            </Card>
          </View>
          
          <View style={{ flex: 1, flexDirection: 'row' , justifyContent:'center' , alignItems:'center' , marginTop:20}}>
            <Card style={{height:150 , width:150, marginRight:20 }}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={foresticon}></Image>
                <Text>Forest</Text>
              </View>
            </Card>
            <Card style={{height:150 , width:150}}>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{height:100,width:100}} resizeMode="center" source={energyicon}></Image>
                <Text>Energy</Text>
              </View>
            </Card>
              </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  iconStyle: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'center'
  },
});
const AppNavigator = createStackNavigator({
  
  complaintsType: {
    screen: ComplaintTypes,
    navigationOptions: ({navigation}) => ({
      title: 'Complaints Type',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
  },
  createComplaint: {
    screen: createComplaint,
    navigationOptions: ({navigation}) => ({
      title: 'Create your Complaint',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
 
  },
  });
  export default createAppContainer(AppNavigator);