import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableHighlight, Button} from 'react-native';
import Constants from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ViewComplaintsScreen from '../components/ViewComplaints.js';
import {  } from 'react-native-gesture-handler';


class TotalComplaintsList extends Component{
    render (){
  return (
    <View style={styles.container}
    >
      <View style={{flexDirection:'row' ,marginTop:20, justifyContent:'flex-end' , marginRight:20}}>

         <Button title="Test"/>
      </View>

      <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 10,
          }}
            />

                
<View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 100,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 30,
            }}>
            Date|
          </Text>

          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 100,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 30,
            }}>
            Title|
          </Text>
        
           
        </View>


  <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewComplaintsScreen')}>

        
<View style={styles.item}>
  
  <Text style={styles.title}>My AC is out of Freon</Text>
    <Text style={styles.description}>I need a person to repair my AC ASAP</Text> 

 
    
    </View>
      </TouchableHighlight>



     


  
 
    </View>

  )
   
  
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
    fontWeight: 'bold',
    
  },
  description:{
    fontSize: 19,


  }
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
      ViewComplaintsScreen: {
    screen: ViewComplaintsScreen,
    navigationOptions: {
      headerShown: false,
}
   
  },
  
  });
  export default createAppContainer(AppNavigator);

