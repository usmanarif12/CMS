
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { } from 'react-native-gesture-handler';
// import all basic components

export default class ViewComplaints extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.topContainer}>
         
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 100,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 30,
              marginLeft: 30,
            }}>
            Date|
          </Text>
       
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
              marginTop: 30,
              marginLeft: 30,
            }}>
            Time |
          </Text>
      
        </View>

                
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 150,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 30,
              marginLeft: 30,
            }}>
            Description Here|
          </Text>
         
        </View>
        
        </View>
        <View style={styles.bottomContainer}>
          <Text>hello world 2.........</Text>
          <Text>hello world 2.........</Text>
          <Text>hello world 2.........</Text>
          <Text>hello world 2.........</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <TextInput
                  style={styles.input}


                />
              </View>
              <View style={styles.sendContainer}>
                <TouchableHighlight
                  underlayColor={'#4e4273'}
                >
                  <Text style={styles.sendLabel}>SEND</Text>
                </TouchableHighlight>
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
    flex: 1,
    width: '100%'
  },
  bottomContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: 'green'
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

});