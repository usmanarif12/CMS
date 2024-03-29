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
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import {createAppContainer, createSwitchNavigator, ScrollView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Card} from 'react-native-shadow-cards';
import DialogProgress from 'react-native-dialog-progress';
import HomeScreen from './components/HomeScreen';
import ForgetPasswordScreen from './components/ForgetPasswordScreen';

const options = {
  title:"Loading.....",
  message:"Please Wait",
  isCancelable:false
}
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
      TextInput_Password: '',
      userId:''
    };
  }
  Validate = async() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const {TextInput_Email, TextInput_Password} = this.state;

    if (TextInput_Email == '') {
      alert('Email is Not Correct');

      return false;
    } else if (TextInput_Password == '') {
      alert('Please enter Password');

      return false;
    } else {
      this._loginFunction();
    }
  };

  _loginFunction = async() => {
    DialogProgress.show(options);
    const {TextInput_Email} = this.state;
    const {TextInput_Password} = this.state;

    let response = await fetch('http://bsmartcms.com/cp/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: TextInput_Email,

        password: TextInput_Password,
      }),
    });
    let responseJson = await response.json();
    console.log(responseJson);
       
    if (responseJson.message === "true") {
      DialogProgress.hide();
      try {

        await AsyncStorage.setItem('isLoggedIn', '1');
        await AsyncStorage.setItem('userId', responseJson.data.id.toString());
        console.log(responseJson.data.id);
        this.props.navigation.navigate('Home');
      }
      catch ( error)
      {
alert (error)

      }
    
   
    }
    else {
      DialogProgress.hide();
      alert('Invalid Email or Password');
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
      this.setState({ isLoading: false });
      await AsyncStorage.setItem('SplashViewed', '1');
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <ScrollView style={styles.containerView}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"></StatusBar>
        <TouchableWithoutFeedback>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Image source={SplashIcon} style={styles.loginIcon} />
              </View>

              <TextInput
                placeholder="Username or Email Address"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={TextInputValue =>
                  this.setState({TextInput_Email: TextInputValue})
                }
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={TextInputValue =>
                  this.setState({TextInput_Password: TextInputValue})
                }
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Card style={styles.cardButton}>
                  <TouchableHighlight
                    style={{width: '100%', alignItems: 'center'}}
                    underlayColor="#2094D0"
                    onPress={() => this.Validate()}>
                    <View>
                      <Text style={{color: 'white'}}> SIGN ME IN </Text>
                    </View>
                  </TouchableHighlight>
                </Card>
                <View
                  style={{
                    width: '80%',
                    height: 1,
                    backgroundColor: '#e2e2e2',
                    marginTop: 25,
                  }}
                />
              </View>
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate('ForgetPassword')
                }>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 5,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#909497'}}>
                    Forget Password? Click here.
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 4}}>
          <Image source={SplashIcon} />
        </View>

        <View style={{marginTop: 50, flex: 1}}>
          <UIActivityIndicator color="#2E8B57"></UIActivityIndicator>
        </View>
      </View>
    );
  }
}
class AuthScreenLoading extends React.Component{

  constructor(props) {
    super(props)
    this._loadData();


  }
  render(){
    return (
      <View>
        <ActivityIndicator />
        
      </View>
    )
  }
  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App')
  }
}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 4,
    backgroundColor:'white'
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
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
  forgetText: {
    color: 'green',
    fontSize: 20,
    fontStyle: 'italic',
    textDecorationLine: 'none',
  },
  heading: {
    color: '#34495E',
    fontSize: 16,
    marginTop: 9,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
   
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    marginTop: 100,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
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
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 55,
    marginTop: 10,
  },
  cardButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#2E8B57',
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

  horizontal: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
  },
});


const RootStack = createStackNavigator({
  // Login: {
  //   screen: Login,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  // ForgetPassword: {
  //   screen: ForgetPasswordScreen,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
});
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      headerShown: false,
    },
  }
});
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthScreenLoading,
    App: RootStack,
    Auth: AuthStack


  },
  {
      initialRouteName:'AuthLoading'
  }
)
);
