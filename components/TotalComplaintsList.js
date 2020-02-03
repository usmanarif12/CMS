import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  ActivityIndicator,
  AsyncStorage,
  StatusBar
} from 'react-native';
import Constants from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ViewComplaintsScreen from '../components/ViewComplaints.js';
import { } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';

class TotalComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

dataSource:[],
      isLoading: true,
    };
  }


  

  async componentDidMount() {
    const userId = await AsyncStorage.getItem('userId');
    return fetch('http://bsmartcms.com/cp/api/user-complains/' + userId)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
        
      }, function() {
        console.log(this.state.dataSource)
      });
    })
    .catch((error) => {
      console.error(error);
    });



  }


  renderItem = ({item}) => (

    <View style={{ flex: 1, marginTop: Constants.statusBarHeight}}>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 5,
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#a9a9a9',
            width: 100,
            padding: 5,

            marginTop: 10,
            marginLeft: 20,
          }}>
          {item.launch_date}
        </Text>

        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#a9a9a9',
            width: 100,
            padding: 5,

            marginTop: 10,
            marginLeft: 20,
          }}>
          {item.nature_id}
        </Text>

        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#a9a9a9',
            width: 100,
            padding: 5,

            marginTop: 10,
            marginLeft: 10,
          }}>
          {item.status}
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
        }}
      />

      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate('ViewComplaintsScreen')
        }>
        <View style={{
          backgroundColor: '#fff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          flexDirection: 'row',
        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{ fontSize: 28, fontWeight: 'bold', color: '#57595d' }}>
              {item.id}
            </Text>
          </View>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: '#e2e2e2',
              marginLeft: 15,
            }}></View>
          <View style={{ marginLeft: 25 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>


  );


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      );
    } else {
      return (
        <View style={styles.Container}>
          <StatusBar
            backgroundColor="#2E8B57"
            barStyle="light-content"></StatusBar>

          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            horizontal={false}

            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#57595d',
  },
  cardButton: {
    width: '20%',
    height: 25,
    backgroundColor: '#6ECF68',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    margin: 20,
  },
  description: {
    fontSize: 19,
    color: '#57595d',
  },
});

const AppNavigator = createStackNavigator({
  TotalComplaintsList: {
    screen: TotalComplaintsList,
    navigationOptions: {
      title: 'Complaints List',
      headerStyle: {
        backgroundColor: '#2E8B57',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 10
      },
    }
  },
  ViewComplaintsScreen: {
    screen: ViewComplaintsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
});
export default createAppContainer(AppNavigator);
