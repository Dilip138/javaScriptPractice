/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Style page 
* @file : styleSheet.js
* @module :  push,state,params,jsonData1
* @author : Dilip
* @version : 1.0
* @since : 21-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import jsonData1 from './users.json'
import styles from '../styleSheet'
export default class Display extends Component {
    onBack = () => {
        this.props.navigation.navigate('dashBoard')
    }
    render() {
        //state is used for link to other Screens
        //params to merge into destination
        let Name = this.props.navigation.state.params.infoData;
        let Person = [];
        let json1 = jsonData1.person
        for (let i in json1) {
            if (Name === json1[i].firstName) {
                let firstName = "FirstName:" + json1[i].firstName
                let lastName = "LastName:" + json1[i].lastName
                let state = "State:" + json1[i].state
                let mobileNumber = "MobileNumber:" + json1[i].mobileNumber
                let dateOfBirth = "DateOfBirth:" + json1[i].dateOfBirth
                let email = "Email:" + json1[i].email
                Person.push(json1)
                return (
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.rowDataText}>{firstName}</Text>
                            <Text style={styles.rowDataText}>{lastName}</Text>
                            <Text style={styles.rowDataText}>{state}</Text>
                            <Text style={styles.rowDataText}>{mobileNumber}</Text>
                            <Text style={styles.rowDataText}>{dateOfBirth}</Text>
                            <Text style={styles.rowDataText}>{email}</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Button
                                color="blue"
                                title="Go to DashBoard"
                                onPress={this.onBack} />
                        </View>
                    </View>
                );
            }
        }
    }
}
