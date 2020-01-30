import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
  StatusBar,
  TextInput,
  FlatList,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

class ComplaintTypes extends Component {

  constructor() {

    super();
    this.state = {

      dataSource: []
    }

  }


  componentDidMount() {

    fetch('http://bsmartcms.com/cp/api/natures').then(response => response.json()).then(responseData => {


      this.setState({


        dataSource: responseData
      })

    })
  }

  renderItem = ({ item }) => (


    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20,marginLeft:30, marginRight:30 }}>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('createComplaint') } >

        <Card style={{ height: 120, width: 120 }}>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={{uri:item.image}}></Image>
            <Text style={{marginTop:5}}>{item.name}</Text>
          </View>
        </Card>
      </TouchableHighlight >


    </View>


  );
  render() {
    
    return (



        <View style={styles.Container}>
          <StatusBar
            backgroundColor="green"
            barStyle="light-content"></StatusBar>

          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            horizontal={false}
            numColumns={2}

            keyExtractor={(item, index) => index
            }
          />







        </View>

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
    resizeMode: 'center'
  },
});
const AppNavigator = createStackNavigator({

  complaintsType: {
    screen: ComplaintTypes,
    navigationOptions: ({ navigation }) => ({
      title: 'Complaints Type',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),
  },
  createComplaint: {
    screen: createComplaint,
    navigationOptions: ({ navigation }) => ({
      title: 'Create your Complaint',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }),

  },
});
export default createAppContainer(AppNavigator);