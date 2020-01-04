/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Services page Using React-Native
* @file : registerComponent.jsx
* @module : axios,userSignUp,userLogin,userForgot
* @author : Dilip
* @version : 1.0
* @since : 15-Nov-2019
******************************************************************************************/
import axios from "axios"
const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"

//heating the api of /user/userSignup
export function userSignUp(data) {
  console.log("register data", data)
  return axios.post(baseURL + "/user/userSignup", data)
}
//heating the api of /user/login
export function userLogin(data) {
  console.log("login data", data)
  return axios.post(baseURL + "/user/login", data)
}
//heating the api of /user/reset
export function userForgot(data) {
  return axios
    .post(baseURL + "/user/reset", data)
    .then(res => {
      console.log("success", res);
    })
    .catch(err => {
      console.log("err in reset", err);
    });
}
