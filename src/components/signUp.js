/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for SignUp page using React-Native
* @file : signUp.js
* @module : state,props,Login,snackBar,userSignUp,styles
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, Button, TextInput, Text } from 'react-native'
import styles from '../styleSheet';
import Snackbar from 'react-native-snackbar';
import { userSignUp } from '../service/userServices';
import { Card } from 'react-native-cards';
export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Assing the value to your firstName,lastName,phoneNumber,state,email,password state
            firstName: '',
            lastName: '',
            state: '',
            phoneNumber: '',
            email: '',
            password: '',
        }
    }
    handleFirstNameChange = firstName => {
        this.setState({ firstName: firstName })
    }
    handleLastNameChange = lastName => {
        this.setState({ lastName: lastName })
    }
    handlePhoneNumberChange = phoneNumber => {
        this.setState({ phoneNumber: phoneNumber })
    }
    handleEmailChange = email => {
        this.setState({ email: email })
    }
    handlePasswordChange = password => {
        this.setState({ password: password })
    }
    signUp = () => {
        try {
            //check the validation of the firstName,lastName,email and password,phoneNumber
            if (this.state.firstName === "") {
                Snackbar.show({
                    title: "FirstName can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });

            }
            else if (!/^[A-Za-z]+$/.test(this.state.firstName)) {
                Snackbar.show({
                    title: 'FirstName must be alphabets',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.lastName === "") {
                Snackbar.show({
                    title: "LastName can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (!/^[A-Za-z]+$/.test(this.state.lastName)) {
                Snackbar.show({
                    title: 'LastName must be alphabets',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.phoneNumber === "") {
                Snackbar.show({
                    title: "PhoneNumber can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.phoneNumber.length < 10) {
                Snackbar.show({
                    title: 'PhoneNumber should be 10 digits',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (this.state.email === "") {
                Snackbar.show({
                    title: "Email can't be empty",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else if (
                !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.state.email)
            ) {
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
                    title: 'Password at least 8 character',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            } else {
                console.log("Register true");
                let data = {
                    //intialize the data in jsonObject formate
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                    email: this.state.email,
                    password: this.state.password,
                    service: "basic"
                };
                //passing the data while hetting back-end api of userSignUp
                userSignUp(data)
                    .then(res => {
                        console.log("res in register---------", res);
                        this.props.navigation.navigate('login');
                        Snackbar.show({
                            title: 'Register SuccessFul',
                            duration: Snackbar.LENGTH_SHORT,
                            action: {
                                title: 'UNDO',
                                color: 'red',
                            },
                        });
                    })
                    .catch(err => {
                        console.log("err in register component ", err);
                    });
            }
        } catch (error) {
            console.log("err in component", error);
        }
    }
    render() {
        return (

            <View style={styles.registerContainer}>
                <Card style={styles.card}>
                    <Text style={styles.login}>Register</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='FirstName'
                        name='firstName'
                        value={this.state.firstName}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handleFirstNameChange} />
                    <TextInput
                        style={styles.input}
                        placeholder='LastName'
                        value={this.state.lastName}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handleLastNameChange} />
                    <TextInput
                        style={styles.input}
                        placeholder='Phone Number'
                        value={this.state.phoneNumber}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handlePhoneNumberChange} />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={this.state.email}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handleEmailChange} />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={this.state.password}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handlePasswordChange} />
                    <View style={{ margin: 10 }}>
                        <Button title='SIGN UP' onPress={this.signUp} />
                    </View>
                </Card>
            </View>
        )
    }
}
