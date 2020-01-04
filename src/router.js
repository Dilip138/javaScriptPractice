/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Calling the API Using React-Native
* @file : router.js
* @module : AppNavigator,createStackNavigator,login,signUp,forgotPassword,resetPassword
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import Login from './components/login';
import SignUp from './components/signUp';
import ForgotPassword from './components/forgotPassword'
import ResetPassword from './components/resetPassword'
import DashBoard from './components/dashBoard'
import Display from './components/display'

const AppNavigator = createStackNavigator({
    //calling the login components
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    //calling the signUp components
    signUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    },
    //calling the forgotPassword components
    forgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            header: null
        }
    },
    //calling the resetPassword components
    resetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            header: null
        }
    },
    //calling the dashBoard components
    dashBoard: {
        screen: DashBoard,
        navigationOptions: {
            header: null
        }
    },
    //calling the display components
    display: {
        screen: Display,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: "login",
    });
export default AppNavigator;
