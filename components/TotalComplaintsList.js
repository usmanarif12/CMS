import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
} from 'react-native';
import Constants from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ViewComplaintsScreen from '../components/ViewComplaints.js';
import {} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';

class TotalComplaintsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date: date + '/' + month + '/' + year + ' |',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'flex-end',
            marginRight: 20,
          }}></View>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 5,
          }}
        />

        <View style={{flexDirection: 'row'}}>
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
            {this.state.date}
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
            Energy |
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
            In Progress|
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
          <View style={styles.item}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: 28, fontWeight: 'bold', color: '#57595d'}}>
                #1
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: '#e2e2e2',
                marginLeft: 15,
              }}></View>
            <View style={{marginLeft: 25}}>
              <Text style={styles.title}>My AC is out of Freon</Text>
              <Text style={styles.description}>
                I need a person to repair my AC ASAP
              </Text>
            </View>
          </View>
        </TouchableHighlight>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
          }}
        />

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 16,
              alignItems: 'center',

              width: 100,
              padding: 5,
              color: '#a9a9a9',
              marginTop: 10,
              marginLeft: 20,
            }}>
            {this.state.date}
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
            Disaster |
          </Text>

          <Text
            style={{
              fontSize: 16,
              alignItems: 'center',
              color: '#a9a9a9',
              width: 100,
              padding: 5,

              marginTop: 10,
              marginLeft: 30,
            }}>
            Resolved |
          </Text>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e2e2e2',
            }}
          />
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
          <View style={styles.item}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: 28, fontWeight: 'bold', color: '#57595d'}}>
                #2
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: '#e2e2e2',
                marginLeft: 15,
              }}></View>
            <View style={{flexDirection: 'column', marginLeft: 25}}>
              <Text style={styles.title}>My home has been damaged</Text>
              <Text style={styles.description}>
                I need a person to repair my damaged home ASAP
              </Text>
              <View style={{justifyContent: 'center'}}></View>
            </View>
          </View>
        </TouchableHighlight>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
          }}
        />

        <View style={{flexDirection: 'row'}}>
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
            {this.state.date}
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
            Bank |
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
            In Progress|
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
          <View style={styles.item}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: 28, fontWeight: 'bold', color: '#57595d'}}>
                #3
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: '#e2e2e2',
                marginLeft: 15,
              }}
            />

            <View style={{marginLeft: 25}}>
              <Text style={styles.title}>My bank account is blocked.</Text>
              <Text style={styles.description}>
                Please verify my bank account details and unblock it
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
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
      headerShown: false,
    },
  },
  ViewComplaintsScreen: {
    screen: ViewComplaintsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(AppNavigator);
