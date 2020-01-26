import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableWithoutFeedback } from 'react-native';
import Constants from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ViewComplaintsScreen from '../components/ViewComplaints.js';
import { TouchableHighlight } from 'react-native-gesture-handler';
const DATA = [
  {
    id: '1',
    title: 'My AC is out of Freon',
    description : 'I need a person to repair my AC ASAP. '
  },
  {
    id: '2',
    title: 'Electricity Problem',
    description : 'I need an Electrician to solve my electric related Problems'
  },
 
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
   
    </View>
  );
}
class TotalComplaintsList extends Component{
    render (){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewComplaintsScreen')}> 
        
        <Item title={item.title}   />
        </TouchableHighlight>
        
        
       
     }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  },
  title: {
    fontSize: 20,
    
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
  }
     
    },
  
  });
  export default createAppContainer(AppNavigator);

