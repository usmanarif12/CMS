
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight,TouchableOpacity,KeyboardAvoidingView  , Image} from 'react-native';
import { Card } from 'react-native-shadow-cards';



import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import micIcon from '../assets/icons/radio.png'
import sendIcon from '../assets/icons/send.png'
import CloseComplaint from '../components/CloseComplaint.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import all basic components

 class ViewComplaints extends Component {
  //Screen1 Component
  render() {
    
    return (
      <KeyboardAwareScrollView>
         <View style={styles.MainContainer}>
        <View style={styles.topContainer}>
         
          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'column' , margin:20}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5,color:'#57595d' }}>Date</Text>
             <Text style={{ fontSize: 16, marginBottom: 5 ,color:'#57595d'}}>27/01/2020</Text>
              <Card backgroundColor="green" style={{ width: 70, height: 40 }}>
                <View style={{justifyContent:'center' , alignItems:'center', flex:1}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CloseComplaint')}>
                  <Text style={{color:'white'}}>Close</Text>
                </TouchableOpacity>
              </View>
               
              </Card>
            </View>
            <View style={{ width: 1, height: '100%', backgroundColor: '#e2e2e2', marginLeft: 5 }} />

            <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 20 }}>
              <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' ,color:'#57595d'}}>Title: </Text>
                <Text style={{ fontSize: 18, marginLeft: 10 ,color:'#57595d'}}>title here..</Text>
                <View style={{ width: 1, height: '100%', backgroundColor: '#e2e2e2', marginLeft: 50 }} />

                <Text style={{ fontSize: 16, fontWeight: 'bold' ,color:'#57595d'}}>ID: </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, color:'#57595d' }}>[#36]</Text>
              </View>
              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', }} /> 
              <View style={{flexDirection:'row', marginTop:20}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' ,color:'#57595d'}}>Description: </Text>
                <Text style={{ fontSize: 18, marginLeft: 10,color:'#57595d' }}>description here..</Text>
                
              </View>
              

            </View>
            
            
          </View>
          <View style={{ width: '100%',height: 1,backgroundColor: '#e2e2e2'}}/>     
       
        
        </View>
        <View style={styles.bottomContainer}>

          <View syle={{ flexDirection: 'column' }}>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#57595d' }}>Assigned To:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 ,color:'#57595d'}}>supervisor name here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#57595d' }}>Time:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 ,color:'#57595d'}}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' ,color:'#57595d'}}>Progress Started:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 ,color:'#57595d'}}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#57595d' }}>Estimated Completion:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 ,color:'#57595d'}}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#57595d' }}>Supervisor Assigned:</Text>
              <Text style={{ fontSize: 16, marginLeft:10,color:'#57595d' }}>date/time here....</Text>
            </View>
            <View style={{ width: '100%', height: 2, marginTop:5,backgroundColor: '#e2e2e2' }} />     
            

          </View>
          
          <View style={{flexDirection:'column', flex:5}}>
            <View style={{width:'100%' ,flex:1, backgroundColor:'green' , height:40 , justifyContent:'center' , alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Chat Head</Text>
            </View>
            <View style={{flexDirection:'column' , backgroundColor:'#ECCCAB', flex:4}}>

              <View style={{justifyContent:'flex-start',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              <View style={{justifyContent:'flex-start',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
                </View>
                <View style={{justifyContent:'flex-start',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              <View style={{justifyContent:'flex-end',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              <View style={{justifyContent:'flex-end',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              <View style={{justifyContent:'flex-end',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              
              
              
              
              <View style={{justifyContent:'flex-end',justifyContent:'center', marginTop:10}}> 
               
              </View>

              </View>
             
           
            </View>
            <View style={{justifyContent:'flex-end' , alignContent:'flex-end'}}>

            <View style = {{ flex:1 ,}}>
                <View style={{ flexDirection: 'row' }}>
                  
                  <TextInput
                placeholder="Write Message Here"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                  />
                  <TouchableHighlight>
                  <Image style={{ width: 30, height: 30 , marginTop:10}} source={micIcon}></Image>
                  </TouchableHighlight>
                  <TouchableHighlight>
                  <Image style={{width:30 , height:30, marginTop:10}} source={sendIcon}></Image>
                  </TouchableHighlight>
                  
              
                  
                 
                 </View>
              </View>
            </View>
        
          </View>
        
      </View>
     </KeyboardAwareScrollView>

    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  topContainer: {
    
    width: '100%'
  },
  bottomContainer: {
    flex: 2,
    width: '100%',
    
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6E5BAA'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  sendContainer: {
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  sendLabel: {
    color: '#ffffff',
    fontSize: 15
  },
  input: {
    width: '50%',
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    height: 32,
    borderColor: '#6E5BAA',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  loginFormTextInput: {
    height: 43,
    width: 250,
    
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 25,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },

});

const AppNavigator = createStackNavigator({
  ViewComplaints: {
    screen: ViewComplaints,
    navigationOptions : {
      title: 'Complaints Detail',
      headerStyle: {
        backgroundColor: 'green',
        
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft:10
      },
    }
  },


  CloseComplaint: {
    screen: CloseComplaint ,
    navigationOptions : {
      title: 'Close Complaint',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
   
  },

});
export default createAppContainer(AppNavigator);