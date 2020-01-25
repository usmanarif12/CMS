import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker, TextInput, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import launchComplainIcon from '../assets/icons/pencil-48.png';

export default class CreateComplaintScreen extends Component {
  constructor(props) {
    super(props);
    this.State = {
        status: 'cancel',
        filePath: {},
    };
    }
   
  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 26, color: 'gray', fontWeight: 'bold'}}>
            Agriculture Complaints
          </Text>
        </View>

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
            Nature:
          </Text>
          <Picker
            style={{marginLeft: 10, width: 200, marginTop: 25}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({status: itemValue})
            }>
            <Picker.Item label="Not Defined" value="Not Defined" />
            <Picker.Item label="Resolved" value="resolved" />
          </Picker>
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
            Nature Type:
          </Text>
          <Picker
            style={{marginLeft: 10, width: 200, marginTop: 25}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({status: itemValue})
            }>
            <Picker.Item label="Not Defined" value="Not Defined" />
            <Picker.Item label="Resolved" value="resolved" />
          </Picker>
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
              width: 70,
              padding: 5,
              fontWeight: 'bold',
              marginTop: 30,
              marginLeft: 30,
            }}>
            Title:
          </Text>
         <TextInput style={{borderColor:'green' , marginTop:30 ,borderWidth:1, borderRadius:3 , width:250 , height:40}}></TextInput>
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
            Description:
          </Text>
         <TextInput multiline={true} numberOfLines={6} style={{borderColor:'green' , marginTop:30 ,borderWidth:1, borderRadius:3 , width:220 , height:40}}></TextInput>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 10,
          }}
            />
            <View style={{flexDirection:'row' , flex:1, justifyContent:'center', alignContent:'center', marginTop:15}}>
              
               
                <Card style={{ width: 150, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight>
                        <Text>CHOOSE IMAGE</Text>
                    </TouchableHighlight>
                </Card>
            </View>
            <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 10,
          }}
            />
            
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
                    height: 50,
            marginTop:240,
            width: '100%',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Card style={styles.cardButton}>
            <TouchableHighlight
              style={{width: '100%', alignItems: 'center'}}
              underlayColor="#2094D0"
              onPress={() => this.props.navigation.navigate('')}>
              <View style={{ flexDirection: 'row'}}>
                <Image
                  source={launchComplainIcon}
                  style={{width: 25, height: 25,marginRight:20, tintColor: 'white'}}
                />
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                 Create Complaint
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection:'column'
    },
    cardButton: {
        width: '90%',
        height: 50,
    marginTop:60,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      },
});
