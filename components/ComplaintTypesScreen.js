import React, {Component} from 'react';
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
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class ComplaintTypes extends Component {
 render() {
return (
    <ScrollView>


   
      <View style={styles.Container}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"></StatusBar>

        

<View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
               Agriculture
              </Text>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
               Banking
              </Text>
            </View>
          </Card>
        </View>
          



          // second row


          <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
               Communications
              </Text>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
                Development Projects
              </Text>
            </View>
          </Card>
        </View>


        //third row

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
             
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
               Disaster / Emergency
              </Text>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
                Education
              </Text>
            </View>
          </Card>
        </View>

        //Fourth row 

        
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={styles.cardStyle}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
            
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
             Energy & Power
              </Text>
            </View>
          </Card>
          <Card
            style={{marginTop: 15, flex: 1, marginLeft: 10, marginRight: 10}}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'sans-serif',
                }}>
                Environment & Forest
              </Text>
            </View>
          </Card>
        </View>
          
  

       

     </View>

     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },

});



