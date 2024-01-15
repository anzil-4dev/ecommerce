import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {SIZE} from '../../../../constants/Constants';
import auth from '@react-native-firebase/auth';
import {useFetchState} from '../../../../context/Store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [isNewAccount, setNewAccount] = useState(false);
  const {dispatch} = useFetchState();

  const createAccount = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        setNewAccount(false);
      })
      .catch(err => {
        if (err.code === 'auth/weak-password') {
          Alert.alert('Password should be at least 6 characters');
        } else if (err.code === 'auth/email-already-in-use') {
          Alert.alert(
            ' The email address is already in use by another account',
          );
          setNewAccount(false);
        }
      });
  };

  const login = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({
          type: 'USER_AUTH',
          userData: {
            isAuthenticated: true,
          },
        });
      })
      .catch(err => {
        if (err.code === 'auth/invalid-credential') {
          Alert.alert(
            'Incorrect password, Please try again the correct password',
          );
          setNewAccount(true);
        }
      });
  };

  const handleLogin = () => {
    if (isNewAccount) {
      createAccount();
    } else {
      login();
    }
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.headText}>My Ecommerce</Text>
      <Text style={styles.title}>Welcome to the market place</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="phone-pad"
        />
      </View>

      <View
        style={[
          styles.inputContainer,
          {flexDirection: 'row', alignItems: 'center', paddingRight: SIZE(15)},
        ]}>
        <TextInput
          style={[styles.input, {flex: 1}]}
          placeholder="Enter your Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={show}
        />
        <TouchableOpacity
          hitSlop={10}
          activeOpacity={0.8}
          onPress={() => setShow(!show)}
          style={styles.showPassword}></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {isNewAccount ? 'Create Account' : 'Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZE(20),
  },
  headText: {
    fontSize: SIZE(18),
    fontFamily: 'Lexend-Medium',
    color: '#3AC77A',
    marginBottom: SIZE(20),
  },
  title: {
    fontSize: SIZE(14),
    fontFamily: 'Lexend-Regular',
    color: '#959595',
    marginBottom: SIZE(50),
  },
  inputContainer: {
    borderWidth: SIZE(2),
    borderColor: '#EDEDED',
    borderRadius: SIZE(5),
    marginBottom: SIZE(20),
    width: '100%',
  },

  input: {
    paddingHorizontal: SIZE(15),
    fontSize: SIZE(15),
    fontFamily: 'Lexend-Regular',
    color: '#000',
  },
  showPassword: {
    width: SIZE(20),
    height: SIZE(20),
    backgroundColor: '#EDEDED',
    borderRadius: SIZE(50),
  },
  button: {
    width: '100%',
    borderWidth: SIZE(2),
    borderColor: '#3AC77A',
    borderRadius: SIZE(5),
    padding: SIZE(12),
    backgroundColor: '#F5F5F5',
  },
  buttonText: {
    fontSize: SIZE(16),
    fontFamily: 'Lexend-Medium',
    color: '#3AC77A',
    textAlign: 'center',
  },
});

export default Login;
