/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for DashBoard page 
* @file : dashBoard.js
* @module : jsonData,renderItem,map,FlatList 
* @author : Dilip
* @version : 1.0
* @since : 21-Nov-2019
******************************************************************************************/
import React, { Component } from 'react';
import styles from '../styleSheet';
import { FlatList, View, Text, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-cards';
import jsonData from './users.json'
import { ScrollView } from 'react-native-gesture-handler';
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //Assing a array to your person state
      person: [],
    }
  }
  renderSeparator = () => {
    return (
      <View style={styles.seperator} />
    );
  };
  goToDisplay(item) {
    this.props.navigation.navigate('display', { infoData: item })
  }
  //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
  renderItem = ({ item }) => {
    return (<TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={() => this.goToDisplay(item)}>
      <View style={styles.listItemContainer}>
        <Text style={styles.personHeader}>{item}</Text>
      </View>
    </TouchableOpacity>
    )
  }
  render() {
    //mapping the firstName from json data
    jsonData.person.map((data) => {
      return (
        this.state.person.push(data.firstName)
      )
    })
    return (
      //Data contains the data being  mapped over.
      //RenderItem a callback return UI for each item.
      <Card style={styles.container}>
        <ScrollView>
          <FlatList
            data={this.state.person}
            renderItem={this.renderItem}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={this.renderSeparator} />
        </ScrollView>
      </Card>
    );
  }
}

