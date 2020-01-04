/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Forgot page Using React-Native
* @file : forgotPassword.js
* @module : state,props,snackBar,AsyncStorage,userForgot,styles
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styles from '../styleSheet';
import Snackbar from 'react-native-snackbar';
import { AsyncStorage } from 'AsyncStorage';
import { Card } from 'react-native-cards';
import { userForgot } from '../service/userServices';
export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Assing the value to your email state
            email: "",
        }
    }
    handleEmailChange = email => {
        this.setState({ email: email })
    }
    onBack = () => {
        this.props.navigation.navigate('login')
    }
    onSubmit = () => {
        try {
            //check the validation of the email 
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
            else {
                console.log("forgot true");
                let data = {
                    //intialize the data in jsonObject formate
                    email: this.state.email
                };
                //passing the data while hetting back-end api of userForgot
                userForgot(data)
                    .then(res => {
                        console.log("res in login---------", res);
                        AsyncStorage.setItem("email", this.state.email);
                        AsyncStorage.getItem(this.state.email)
                        this.props.navigation.navigate('resetPassword');
                        Snackbar.show({
                            title: 'Forgot Done SuccessFully',
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
        }
        catch (err) {
            console.log("error data", err);
        }
    }
    render() {
        return (
            <View style={styles.forgotContainer}>
                <Card style={styles.card} >
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ color: 'red', fontSize: 20 }}>Forgot Password</Text>
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ color: 'green', fontSize: 20 }}>Please enter your valid email Id</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter email'
                        value={this.state.email}
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        onChangeText={this.handleEmailChange} />
                    <View style={{ margin: 10 }}>
                        <Button onPress={this.onSubmit} title="Submit" />
                    </View>
                    <Button title='Go back' onPress={this.onBack} />
                </Card>
            </View>
        )
    }
}
