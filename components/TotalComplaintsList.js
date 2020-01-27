import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableHighlight, Button} from 'react-native';
import Constants from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ViewComplaintsScreen from '../components/ViewComplaints.js';
import {  } from 'react-native-gesture-handler';


class TotalComplaintsList extends Component{

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
      date:
        date + '/' + month + '/' + year +" |" ,
    });
  }
    render (){
  return (
    <View style={styles.container}
    >
      <View style={{flexDirection:'row' ,marginTop:20, justifyContent:'flex-end' , marginRight:20}}>

         <Button title="Total Complaints "/>
      </View>

      <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
           marginTop:5
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
           {this.state.date}
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
              marginLeft: 40,
            }}>
            Energy |
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



  <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewComplaintsScreen')}>

        
<View style={styles.item}>
  
  <Text style={styles.title}>My AC is out of Freon</Text>
    <Text style={styles.description}>I need a person to repair my AC ASAP</Text> 

 
    
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
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 100,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 30,
            }}>
           {this.state.date}
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
              marginLeft: 40,
            }}>
            Disaster |
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



  <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewComplaintsScreen')}>

        
<View style={styles.item}>
  
  <Text style={styles.title}>My home has been damaged due to flood in my area</Text>
    <Text style={styles.description}>I need a person to repair my damaged home ASAP</Text> 

 
    
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
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 100,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 30,
            }}>
           {this.state.date}
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
              marginLeft: 40,
            }}>
            Bank |
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



  <TouchableHighlight onPress={() => this.props.navigation.navigate('ViewComplaintsScreen')}>

        
<View style={styles.item}>
  
  <Text style={styles.title}>My bank account is blocked.</Text>
    <Text style={styles.description}>Please verify my bank account details and unblock it</Text> 

 
    
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

