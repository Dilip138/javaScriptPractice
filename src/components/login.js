/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Login page Using React-Native
* @file : login.js
* @module : state,props,Login,snackBar,AsyncStorage,userLogin,styles
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import styles from '../styleSheet'
import { AsyncStorage } from 'AsyncStorage';
import Snackbar from 'react-native-snackbar';
import { userLogin } from '../service/userServices';
import { Card } from 'react-native-cards';
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //Assing the value to your email,password state
            email: '',
            password: ''
        }
    }
    handleEmailChange = email => {
        this.setState({ email: email })
    }
    handlePasswordChange = password => {
        this.setState({ password: password })
    }
    onLogin = () => {
        try {
            //check the validation of the email and password
            if (this.state.email === "") {
                Snackbar.show({
                    title: "Email can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
                Snackbar.show({
                    title: 'Invalid Email',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.password === "") {
                Snackbar.show({
                    title: "Password can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.password.length < 8) {
                Snackbar.show({
                    title: 'password at least 8 character',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else {
                console.log("Login true");
                let data = {
                    //intialize the data in jsonObject formate
                    email: this.state.email,
                    password: this.state.password
                }
                //passing the data while hetting back-end api of userLogin
                userLogin(data)
                    .then(res => {
                        console.log("res in login---------", res.data.id);
                        AsyncStorage.setItem("email", this.state.email);
                        AsyncStorage.setItem("token", res.data.id);
                        console.log(AsyncStorage.getItem("token"));
                        this.props.navigation.navigate('dashBoard');
                        Snackbar.show({
                            title: 'Login SuccessFul',
                            duration: Snackbar.LENGTH_SHORT,
                            action: {
                                title: 'UNDO',
                                color: 'red',
                            },
                        });
                    })
                    .catch(err => {
                        console.log("err in login component ", err);
                    });
            }
        } catch (error) {
            console.log("err in component", error);
        }
    }
    //navigate to signUp components
    goToSignup = () => {
        this.props.navigation.navigate('signUp')
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <Card style={styles.card}>
                    <Text style={styles.login}> Login</Text>
                    <View style={{ margin: 3 }}>
                        <TextInput
                            style={styles.input}
                            name='email'
                            value={this.state.email}
                            placeholder='Enter email'
                            autoCapitalize='none'
                            onChangeText={this.handleEmailChange} />
                    </View>
                    <View style={{ margin: 3 }}>
                        <TextInput
                            style={styles.input}
                            name='password'
                            value={this.state.password}
                            placeholder='Enter password'
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={this.handlePasswordChange} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button title='login' onPress={this.onLogin} />
                    </View>
                    <Button title='Go to Signup' onPress={this.goToSignup} />
                </Card>
            </View>
        )
    }
}
