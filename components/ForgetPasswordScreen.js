import React, {Component} from 'react';
import forgetPassIcon from '../assets/icons/forgetpassIcon.jpg';
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
  ScrollView,
} from 'react-native';

import { Card } from 'react-native-shadow-cards';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default class ForgetPasswordScreen extends Component {

  render() {

    return (
      <ScrollView>
        <View style={styles.Container}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"></StatusBar>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={forgetPassIcon} style={styles.loginIcon} />
          <Text style={styles.logoText}>Forget Password</Text>
        </View>
        <View style={{justifyContent:'center' , alignItems:'center',marginTop:10}}>
        <Text style={styles.text}>Enter your Email below to get a recovery email</Text>

        </View>
       

        <View>
          
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop:20}}>
          <TextInput
                placeholder="Email Address"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
          </View>
        </View>

      

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
            <Card style= {styles.cardButton}>
            <TouchableHighlight
              style={{width: '100%', alignItems: 'center'}}
              underlayColor="#2094D0"
            >
              <View>
                <Text style={{color: 'white'}}>Send Me Recovery Email </Text>
              </View>
            </TouchableHighlight>


            
            </Card>
        </View>
        
       
    
       
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    Container: {
flex:1,
marginTop: 100,
    
    },
 
    LogoContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 50,
    },
    loginFormTextInput: {
      height: 43,
      fontSize: 14,
      width:"90%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      paddingLeft: 10,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 5,
      marginBottom: 5,
    },
    loginIcon: {
      width: 120,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20
    },
    logoText: {
      color: '#2E8B57',
      fontSize: 24,
      fontWeight: 'bold',
    },
    text: {
        color: '#a2a2a2',
        fontSize: 17,
       
      },
 
    heading: {
      color: '#34495E',
      fontSize: 16,
      marginTop: 9,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    textInput: {
      width: '90%',
      height: 40,
      borderColor: '#566573',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    },
    cardButton: {
        width: '90%',
        height: 40,
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      },
   
  });
  