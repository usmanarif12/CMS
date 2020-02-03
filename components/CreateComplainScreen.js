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
  ActivityIndicator,
  AsyncStorage,
  Alert
} from 'react-native';
import { Dropbox } from 'dropbox';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import launchComplainIcon from '../assets/icons/pencil-48.png';
import dummy from '../assets/icons/dummy.png';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class CreateComplaintScreen extends Component {
 
 constructor(props)
 {

   super(props);

   this.state = { 

   isLoading: true,
   PickerValueHolder : '',
     status: 'cancel',
     natureId: '',
     userId:'',
     natureTypeId: '',
     poc: '',
     title: '',
     description: '',
    
   filepath: {
     data: '',
     uri: '',
   },
   fileData: '',
   fileUri: '',

  }
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
    return ( <Image
      source={{ uri: this.state.fileUri }}
      style={styles.images}
    />)
  } else {
    return (<Image
      source={require('../assets/icons/dummy.png')}
      style={styles.images}
    />)
  }
}
// uploadImage () {

//   const accessToken = 'bJoFnHX6gFAAAAAAAACb3LbF1-M2uN1GaYX71qshFk613O7f0widyKnut9yzonPM';

//   const dbx = new Dropbox({  
//     accessToken,  
    
//   });

 
// }
// fetchMethod () {

// fetch('https://content.dropboxapi.com/2/files/upload' , {
//     method: "POST",
//     body: this.state.fileUri
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log("upload succes", response);
  
//       this.setState({ fileUri: null });
//     })
//     .catch(error => {
//       console.log("upload error", error);
//       alert("Upload failed!");
//     });

//}


  async componentDidMount() {
  const {navigation} = this.props;
  const natureId = navigation.getParam('natureId', 'NO-User');
  const userId = await AsyncStorage.getItem('userId');
  console.log(userId)
    this.setState({
      userId: userId,
    natureId:natureId})
   
      return fetch('http://bsmartcms.com/cp/api/nature-types/'  + natureId)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
            natureId:natureId
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    GetPickerSelectedItemValue=()=>{

      Alert.alert(this.state.PickerValueHolder);

  }

  Validate = async() => {

    const {natureId,userId,natureTypeId,title,description,poc} = this.state;

    if (natureId == '') {
      alert('Select nature ');

      return false;
    } else if (title== '') {
      alert('Please enter the Title');

      return false;
    }

    else if (description == '') {
      alert('Please enter Description');

      return false;
    }

    else if (poc == '') {
      alert('Please enter Point of Contact');

      return false;
    }
 else {
      this.createComplaint();
    }
  };


  createComplaint = () => {

    console.log( 'customerID=',this.state.userId);
    console.log('natureType Id=', this.state.PickerValueHolder);
    console.log('Nature Id=', this.state.natureId);
    console.log('title=', this.state.title);
    console.log('description=', this.state.description);
    console.log('poc=', this.state.poc);
    console.log('image=', this.state.fileUri);


    fetch(
      'http://bsmartcms.com/cp/api/create_complain',
      {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer:  this.state.userId,
          nature: this.state.natureId,
          nature_type:  this.state.PickerValueHolder,
          title:  this.state.title,
          poc:  this.state.poc,
          description:  this.state.description,
          image: 'https://www.testimg.com/test.jpg'
          
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)

        if (responseJson.status == "true")
        {
          Alert.alert ('Complaint created Successfully')

          this.setState ({



          })

        }
        
     
      })
      .catch(error => {
        
        Alert.alert(JSON.stringify(error));
      });
  
  }

  render() {
    const {navigation} = this.props;
    const natureName = navigation.getParam('natureName', 'NO-User');
   
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
  
   return (

    <View style={styles.mainContainer}>
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 26, color: 'gray', fontWeight: 'bold'}}>
 
        </Text>
      </View>

      <View style={{flexDirection: 'row', }}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 100,
            padding: 5,
            fontWeight: 'bold',
            marginTop: 5,
            marginLeft: 45
          }}>
          Nature:
        </Text>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 100,
            padding: 5,
            fontWeight: 'bold',
            marginTop: 5,
            marginLeft: 30,
          }}>
          {natureName}
        </Text>

      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 5,
        }}
      />

      <View style={{flexDirection: 'row', justifyContent:'center' , alignItems:'center'}}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 100,
            padding: 5,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 30,
          }}>
          Nature Type:
        </Text>
        <Picker style={{marginLeft: 10, width: 200, marginTop: 15}}
            selectedValue={this.state.PickerValueHolder}

            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
              <Picker.item label='Select Type' value=''/>

              
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.name} value={item.id} key={key} />)
            )}
    
          </Picker>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 5,
        }}
         />
             <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 70,
            padding: 5,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 35,
          }}>
          POC
        </Text>
        <Card style={{marginTop: 20, width: 240, height: 40}}>
             <TextInput style={{ fontSize: 14, paddingLeft: 10 }} placeholder="Point of Contact"
             onChangeText={TextInputValue =>
              this.setState({poc: TextInputValue})
            }></TextInput>
        </Card>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 70,
            padding: 5,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 35,
          }}>
          Title:
        </Text>
        <Card style={{marginTop: 20, width: 240, height: 40}}>
             <TextInput style={{ fontSize: 14, paddingLeft: 10 }} placeholder="Title Of Complaint"
             onChangeText={TextInputValue =>
              this.setState({title: TextInputValue})
            }></TextInput>
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

      <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: '#57595d',
            width: 100,

            fontWeight: 'bold',
            marginTop: 30,
            marginLeft: 10,
          }}>
          Description:
        </Text>
        <Card style={{marginTop: 20, width: 240, height: 40}}>
          <TextInput
            placeholder="Description Of Complaint"
            multiline={true}
            numberOfLines={6}
               style={{ fontSize: 14, paddingLeft: 10 }}
               onChangeText={TextInputValue =>
                this.setState({description: TextInputValue})
              }></TextInput>
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
      <View style={{ flexDirection: 'row',flex: 1,justifyContent: 'center',marginTop: 15,}}>
        
        <View style={{justifyContent:'center' , flex:1, marginLeft:20}}>
          <View style={{flexDirection:'column'}} >
            <Text style={{fontSize:14 , marginBottom:10, color: '#57595d'}}>Select Image Related to Complaint from Gallery Or Camera</Text>
            
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
           {/* <Image source={dummy} style= {styles.images}></Image> */}
           {this.renderFileUri()}
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
            onPress={ () => this.Validate()}>
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
    
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
    marginRight:10
  },
});
