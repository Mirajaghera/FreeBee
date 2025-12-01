import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../Fonts';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const LoginScreen = ({ route }) => {
  const navigation = useNavigation();
  const animation = useSharedValue(0);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [userNameVerify, setUsernameVerify] = useState(['miraj']);
  const [passwordVerify, setPasswordVerify] = useState(['123456']);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params) {
      setUsernameVerify(prev => [...prev, route.params.username]);
      setPasswordVerify(prev => [...prev, route.params.password]);
    }
  }, [route.params]);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const doSubmit = () => {
    setUserNameError('');
    setPasswordError('');
    let isValid = true;

    if (!userName) {
      setUserNameError('Please enter your username.');
      isValid = false;
    } else if (!userNameVerify.includes(userName)) {
      setUserNameError('Invalid username');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    } else if (!passwordVerify.includes(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    }

    if (isValid) {
    }
  };
  function Tonavigate() {
    setIsLoading(true);
    animation.value = 1;
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Home', { screen: 'Welcome' });
    }, 1000);
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 0
          ? withTiming(280, { duration: 400 })
          : withTiming(60, { duration: 400 }),
      backgroundColor: '#fccaa5',
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FreeBee</Text>
      <Text style={styles.title}>Welcome to FreeBee!</Text>
      <Text style={styles.subtitle}>Convenience at Your Doorstep</Text>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('./Images/icons8-user-100.png')}
        />
        <TextInput
          style={styles.input}
          ref={userNameRef}
          placeholder="Username or Email"
          onChangeText={text => {
            setUserName(text), setUserNameError(null);
          }}
          value={userName}
          placeholderTextColor="#9a9a9a"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
      </View>
      {userNameError ? (
        <Text style={styles.errorText}>{userNameError}</Text>
      ) : null}

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('./Images/icons8-shield-60.png')}
        />
        <TextInput
          style={styles.input}
          ref={passwordRef}
          placeholder="Enter your Password"
          onChangeText={text => {
            setPassword(text), setPasswordError(null);
          }}
          value={password}
          placeholderTextColor="#9a9a9a"
          secureTextEntry={!isPasswordVisible}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.eyeIcon}
            source={
              isPasswordVisible
                ? require('./Images/visibility_24dp_656565_FILL0_wght400_GRAD0_opsz24.png')
                : require('./Images/visibility_off_24dp_656565_FILL0_wght400_GRAD0_opsz24.png')
            }
          />
        </TouchableOpacity>
      </View>
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('forgetPassword')}
      >
        Forgot Password?
      </Text>

      {isLoading ? (
        <Animated.View
          style={[
            {
              height: verticalScale(44),
              // backgroundColor: '#006bff',
              borderRadius: 15,
              marginTop: 17,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            },
            animatedStyle,
          ]}
        >
          <ActivityIndicator size="large" color="white" style={{}} />
        </Animated.View>
      ) : (
        <Pressable
          onPress={Tonavigate}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      )}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Signup')}
        >
          Register
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fffaf5',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: Fonts.Logo,
    fontSize: scale(49),
    color: '#FF6B00',
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: scale(23),
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontFamily: Fonts.REGULAR,
    fontSize: scale(12.5),
    textAlign: 'center',
    marginBottom: 30,
    color: '#6b6b6b',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: verticalScale(50),
    marginBottom: 10,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: 'black',
    fontFamily: Fonts.MEDUIM,
    // height: '100%',
  },
  eyeIcon: {
    width: 22,
    height: 22,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6B00',
    height: verticalScale(44),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },
  buttonPressed: {
    backgroundColor: '#e65a00',
  },
  disabledButton: {
    backgroundColor: '#ffb380',
  },
  buttonText: {
    fontSize: scale(17),
    fontFamily: Fonts.BOLD,
    color: '#fff',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#FF6B00',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: moderateScale(-115),
  },
  registerText: {
    fontSize: scale(14),
    fontFamily: Fonts.MEDUIM,
  },
  registerLink: {
    fontSize: scale(14),
    color: '#FF6B00',
    marginLeft: 5,
  },
});
