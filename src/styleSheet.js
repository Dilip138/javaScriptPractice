/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Style page 
* @file : styleSheet.js
* @module : loginContainer,registerContainer,resetContainer,forgotContainer 
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  login: {
    fontSize: 30,
    color: 'red'
  },
  input: {
    width: 300,
    height: 52,
    backgroundColor: '#42A5F5',
    margin: 5,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPassword: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    padding: 20
  },
  personHeader: {
    color: 'blue',
    fontSize: 24,
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",
  },
  rowDataText: {
    fontSize: 20,
    color: "green"
  },
  seperator: {
    height: 1,
    width: 350,
    backgroundColor: "grey",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
  }
})
