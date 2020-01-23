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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Card } from 'react-native-shadow-cards';
import HomeScreen from './components/HomeScreen';

import SplashIcon from './assets/icons/logo.png';
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      TextInput_Email: '',
      TextInput_Password:''

    };
  }
  Validate = () => {

    this.showLoader();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const { TextInput_Email, TextInput_Password } = this.state;

    if (TextInput_Email == '' || reg.test(TextInput_Email)=== false) {
      alert('Email is Not Correct');
      this.hideLoader();
      return false;
    } else if (TextInput_Password == '') {
      alert('Please enter Password');
      this.hideLoader();
      return false;
    } else {
      this.props.navigation.navigate('Home'); 
    }
  };



  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <View style={styles.Container}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"></StatusBar>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={SplashIcon} style={styles.loginIcon} />
          <Text style={styles.logoText}>Login</Text>
        </View>

        <View>
          <Text style={styles.heading}>Email*</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={TextInputValue =>
                this.setState({TextInput_Email: TextInputValue})
              }
            />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Password*</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={TextInputValue =>
                this.setState({TextInput_Password: TextInputValue})
              }
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
              onPress={() =>  this.props.navigation.navigate('Home')}>
              <View>
                <Text style={{color: 'white'}}> SIGN ME IN </Text>
              </View>
            </TouchableHighlight>
            </Card>
        </View>
      </View>
    );
  }
}

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }
  render() {
    const viewStyles = [styles.container, {backgroundColor: 'white'}];
    const textStyles = {
      color: 'black',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={styles.Container}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"></StatusBar>
        
        <View style={{alignItems:'center' , justifyContent:'center' , flex:4}}>

        <Image source={SplashIcon}  />
        </View>

       

        <View style={{marginTop: 50, flex: 1}}>
          <PulseIndicator
          color="#57B846"></PulseIndicator>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 4,
  },
  BodyContainer: {
    width: '100%',
    height: 420,
    marginTop: 20,
  },
  LogoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },

  loginIcon: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  ButtonStyl: {
    marginTop: 15,
    color: 'white',
    width: '30%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
  RegisterText: {
    color: '#566573',
    fontSize: 18,
    marginTop: 10,
  },
  ForgetPassText: {
    color: '#566573',
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontal: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
  },
});


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },

});
export default createAppContainer(AppNavigator);
