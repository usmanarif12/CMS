
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight , Image} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import micIcon from '../assets/icons/radio.png'
import sendIcon from '../assets/icons/send.png'
// import all basic components

export default class ViewComplaints extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.topContainer}>
         
          <View style={{flexDirection:'row'}}>

            <View style={{flexDirection:'column' , margin:20}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Date</Text>
             <Text style={{ fontSize: 16, marginBottom: 5 }}>27/01/2020</Text>
              <Card backgroundColor="green" style={{ width: 70, height: 40 }}>
                <View style={{justifyContent:'center' , alignItems:'center', flex:1}}>
                <TouchableOpacity >
                  <Text style={{color:'white'}}>View</Text>
                </TouchableOpacity>
              </View>
               
              </Card>
            </View>
            <View style={{ width: 1, height: '100%', backgroundColor: '#e2e2e2', marginLeft: 5 }} />

            <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 20 }}>
              <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Title: </Text>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>title here..</Text>
                <View style={{ width: 1, height: '100%', backgroundColor: '#e2e2e2', marginLeft: 50 }} />

                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>ID: </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>[#36]</Text>
              </View>
              <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', }} /> 
              <View style={{flexDirection:'row', marginTop:20}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description: </Text>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>description here..</Text>
                
              </View>
              

            </View>
            
            
          </View>
          <View style={{ width: '100%',height: 1,backgroundColor: '#e2e2e2'}}/>     
       
        
        </View>
        <View style={styles.bottomContainer}>

          <View syle={{ flexDirection: 'column' }}>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Assigned To:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 }}>supervisor name here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Time:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 }}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Progress Started:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 }}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Estimated Completion:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 }}>date/time here....</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:15 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Supervisor Assigned:</Text>
              <Text style={{ fontSize: 16, marginLeft:10 }}>date/time here....</Text>
            </View>
            <View style={{ width: '100%', height: 2, marginTop:5,backgroundColor: '#e2e2e2' }} />     
            

          </View>
          
          <View style={{flexDirection:'column', flex:3}}>
            <View style={{width:'100%' , backgroundColor:'green' , height:40 , justifyContent:'center' , alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Chat Head</Text>
            </View>
            <View style={{flexDirection:'column' , backgroundColor:'#ECCCAB', flex:1}}>

              <View style={{justifyContent:'flex-start',borderRadius:4,height:40,justifyContent:'center', marginTop:10, marginLeft:10, width:200 , backgroundColor:'white'}}> 
                <Text style={{marginLeft:20 , fontSize:16}}>Hi there..</Text>
                <Text style={{marginLeft:150, fontSize:12, color:'#A6ACAF'}}>8:02 PM</Text>
              </View>
              <View style = {{justifyContent:'flex-end', flex:1}}>
                <View style={{flexDirection:'row'}}>
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
      </View>

    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
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
