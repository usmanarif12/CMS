import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker, TextInput, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-shadow-cards';
import crossIcon from '../assets/icons/crossIcon.jpg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import launchComplainIcon from '../assets/icons/pencil-48.png';

export default class CloseComplaint extends Component {
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
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop:10
           
          }}
            />
   
        
        
                
<View style={{flexDirection: 'row',}}>
          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              color: 'black',
              width: 80,

              fontWeight: 'bold',
              marginTop: 15,
              marginLeft: 20,
            }}>
          Status 
          </Text>
          <View style={{width:1 , height:'100%' , backgroundColor:'#e2e2e2' }}>

          </View>

          <Picker
              style={{ width: 200,marginLeft:10}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({status: itemValue})
              }>
              <Picker.Item label="Cancel" value="Not Defined" />
              <Picker.Item label="Resolved" value="resolved" />
            </Picker>


        
           
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop:0
           
          }}
            />

<View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                alignItems: 'center',
                color: 'black',
                width: 85,

                fontWeight: 'bold',
                marginTop: 50,
                marginLeft: 20,
              }}>
              Description
            </Text>
            <View style={{width:1 , height:'100%' , backgroundColor:'#e2e2e2' }}>

</View>
            <Card style={{marginTop: 20,marginLeft:20, width: 240, height:100}}>
              <TextInput
                placeholder="Description Of Complaint"
                multiline={true}
                numberOfLines={6}
                style={{fontSize: 16}}></TextInput>
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
 
 <Rating
  showRating='true'

  ratingColor='#3498db'
  ratingBackgroundColor='#c8c7c8'
  ratingCount={5}
  imageSize={30}
  
  style={{ marginTop:5}}
/>
   <View style={{justifyContent:'center',alignItems:'center'}}>
   <Card style={{marginTop: 10, width: 350, height:130 , alignItems:'center'}}>
              <TextInput
                placeholder="Reviews "
                multiline={true}
                numberOfLines={6}
                style={{fontSize: 16}}></TextInput>
            </Card>

   </View>
        
   <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e2e2e2',
              marginTop: 13,
            }}
          />
  

   <Card style={styles.cardButton}>
            <TouchableHighlight
              style={{width: '100%', alignItems: 'center'}}
              underlayColor="#2094D0"
            >
              <View style={{flexDirection: 'row'}}>
                
              <Image
                  source={launchComplainIcon}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 20,
                    tintColor: 'white',
                  }}
                />
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                 Close Complaint
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
  
      cardButton: {
        width: '90%',
        height: 50,
        backgroundColor: '#6ECF68',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        margin:20
      },
});
