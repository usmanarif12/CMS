import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Picker,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import launchComplainIcon from '../assets/icons/pencil-48.png';
import dummy from '../assets/icons/dummy.png';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class CreateComplaintScreen extends Component {
  constructor(props) {
    super(props);
    this.State = {
      status: 'cancel',
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else
      {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };
  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };
  renderFileData() {
    if (this.state.fileData != null) {
      
return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
      style={styles.images}
    />
    }
    else {
      return <Image source={require('../assets/icons/dummy.png')}
      style={styles.images}
      />
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../assets/icons/dummy.png')}
        style={styles.images}
      />
    }
  }
  render() {
    const {navigation} = this.props;
    const complaintType = navigation.getParam('complaintType', 'NO-User');
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 26, color: 'gray', fontWeight: 'bold'}}>
              {complaintType}
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
                marginTop: 25,
                marginLeft: 30,
              }}>
              Nature:
            </Text>
            <Picker
              style={{marginLeft: 10, width: 200, marginTop: 20}}
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
                marginTop: 20,
                marginLeft: 30,
              }}>
              Nature Type:
            </Text>
            <Picker
              style={{marginLeft: 10, width: 200, marginTop: 15}}
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
                marginTop: 20,
                marginLeft: 35,
              }}>
              Title:
            </Text>
            <Card style={{marginTop: 20, width: 240, height: 45}}>
              <TextInput style={{fontSize: 16,paddingLeft:10}} placeholder="Title Of Complaint"></TextInput>
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

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                alignItems: 'center',
                color: 'black',
                width: 100,

                fontWeight: 'bold',
                marginTop: 30,
                marginLeft: 10,
              }}>
              Description:
            </Text>
            <Card style={{marginTop: 20, width: 240, height: 60}}>
              <TextInput
                placeholder="Description Of Complaint"
                multiline={true}
                numberOfLines={6}
                style={{fontSize: 16, paddingLeft:10}}></TextInput>
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
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 15,
            }}>
            
            <View style={styles.ImageSections}>
              <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12 , marginBottom:10, fontWeight:'bold'}}>Select Image Related to Complaint from Gallery Or Camera</Text>
                <Image source={dummy} style= {styles.images}></Image>
                <Card
              style={{
                width: 150,
                    height: 40,
                marginTop:10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={this.chooseImage}>
                <Text>CHOOSE IMAGE</Text>
              </TouchableOpacity>
            </Card>
              </View>
            </View>
           
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

              height: 50,
              marginTop: 20,
              width: '100%',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Card style={styles.cardButton}>
              <TouchableHighlight
                style={{width: '100%', alignItems: 'center'}}
                underlayColor="#2094D0"
                onPress={this.props.navigation.navigate('')}>
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
                    Create Complaint
                  </Text>
                </View>
              </TouchableHighlight>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  cardButton: {
    width: '90%',
    height: 50,

    backgroundColor: '#6ECF68',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
});
