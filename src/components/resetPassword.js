/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for ResetPassword page Using React-Native
* @file : resetPassword.js
* @module : state,props,Reset,snackBar,styles
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styleSheet';
import Snackbar from 'react-native-snackbar'
import { Card } from 'react-native-cards';
export default class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Assing the value to your password,confirmPassword state
            password: '',
            confirmPassword: ''
        }
    }
    handlePasswordChange = password => {
        this.setState({ password: password })
    }
    handleConfirmPasswordChange = confirmPassword => {
        this.setState({ confirmPassword: confirmPassword })
    }
    onSubmit = () => {
        try {
            //check the validation of the password and confirmpassword
            if (this.state.password === "") {
                Snackbar.show({
                    title: 'Password can not be empty',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
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
            else if (this.state.confirmPassword === "") {
                Snackbar.show({
                    title: 'ConfirmPassword can not be empty',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
            }
            else if (this.state.confirmPassword.length < 8) {
                Snackbar.show({
                    title: 'ConfirmPassword at least 8 character',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'green',
                    },
                });
            }
            else {
                Snackbar.show({
                    title: 'New Password Successful',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'UNDO',
                        color: 'red',
                    },
                });
                this.props.navigation.navigate('login')
            }
        }
        catch (err) {
            console.log("err data", err);
        }
    }
    render() {
        return (

            <View style={styles.resetPassword}>
                <Card style={styles.card}>
                    <Text style={styles.login}>ResetPassword</Text>
                    <View style={{ margin: 5 }}>
                        <TextInput
                            style={styles.input}
                            name='password'
                            value={this.state.password}
                            placeholder='Password'
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={this.handlePasswordChange} />
                    </View>
                    <TextInput
                        style={styles.input}
                        name='password'
                        value={this.state.confirmpassword}
                        autoCapitalize="none"
                        placeholder='ConfirmPassword'
                        secureTextEntry={true}
                        onChangeText={this.handleConfirmPasswordChange} />
                    <Button title='submit' onPress={this.onSubmit} />
                </Card>
            </View>

        );
    }
}
