import * as React  from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <SafeAreaView style = {styles.container}>

            <Image source={require("../assets/rb.png")} style = {{resizeMode: "contain", height: 100, width: 600, marginBottom: "5%" }}/>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Name'
                secureTextEntry = {true}
                textContentType='name'

                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Password'
                secureTextEntry = {true}

                />
            </View>

            <TouchableOpacity style = {styles.forgetButton}>
                <Text style = {styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style = {styles.loginButton}>
               <TouchableOpacity
               onPress={() => navigation.navigate("main")}
               >
                    <Text style = {styles.loginText}>
                        LOGIN
                    </Text>
               </TouchableOpacity>
            </View>


            <TouchableOpacity 
            style = {styles.registerButton}
            onPress={() => navigation.navigate("register")}
            >
                <Text style = {styles.registerText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.TopCircleShape}/>
            <View style={styles.BottomCircleShape}/>

        </SafeAreaView>
    )
}


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        alignItems: "center",
        justifyContent: "center",
        
    },

    //input containers
    inputView: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "start",
      },
      

      //login button, login text
      loginButton: {
        width: "70%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7ED957",
        borderRadius: 10,
      },

      loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
      },
      

      //inputs
      textInput: {
        height: 50,
        width: "100%",
        flex: 1,
        marginLeft: "5%",
        fontSize: 16,
      },
      

      //forgetPassword buttons, forgetPassword text
      forgetButton: {
        height: 30,
        marginBottom: 30,
        alignItems: "center",
      },
      
      forgetText: {
        color: "#fff",
        flex: 1,
        fontSize: 15
      },

      //registerButton, registerText

      registerButton: {
        position: "absolute",
        borderTopWidth:  1,
        borderTopColor: "white",
        width: "100%",
        bottom: 0,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
      },

      registerText: {
        color: "white",
        fontSize: 16,
      },

      //absolute circles for design
       TopCircleShape: {
        zIndex: -1,
        position: "absolute",
        top: "-85%",
        left: "-100%",
        width: 700,
        height: 700,
        borderRadius: 700/2,
        backgroundColor: "#7ED957",
       },

       BottomCircleShape: {
        zIndex: -1,
        position: "absolute",
        bottom: "-80%",
        right: "-90%",
        width: 600,
        height: 600,
        borderRadius: 600/2,
        backgroundColor: "#7ED957",
       },
       
})