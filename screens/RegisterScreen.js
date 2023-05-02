import * as React  from 'react';
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


function RegisterScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <SafeAreaView style = {styles.container}>

            <Image source={require("../assets/rb.png")} style = {{resizeMode: "contain", height: 100, width: 600, marginBottom: "2%" }}/>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Name'
                secureTextEntry = {true}
                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Surname'
                secureTextEntry = {true}
                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Password'
                secureTextEntry = {true}

                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Password ešte raz xd'
                secureTextEntry = {true}

                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Mail'
                secureTextEntry = {true}

                />
            </View>

            <View style = {styles.inputView}>
                <TextInput 
                style = {styles.textInput}
                placeholder='Date of birth'
                secureTextEntry = {true}

                />
            </View>


            <View style = {styles.loginButton}>
               <TouchableOpacity
               
               >
                    <Text style = {styles.loginText}>
                        REGISTER
                    </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.TopCircleShape}/>
            <View style={styles.BottomCircleShape}/>

        </SafeAreaView>
    )
}


export default RegisterScreen;


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
      },
      

      //inputs
      textInput: {
        height: 50,
        width: "100%",
        flex: 1,
        marginLeft: "5%",
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
      },


      //absolute circles for design
       TopCircleShape: {
        zIndex: -1,
        position: "absolute",
        top: "-90%",
        right: "-120%",
        width: 700,
        height: 700,
        borderRadius: 700/2,
        backgroundColor: "#7ED957",
       },

       BottomCircleShape: {
        zIndex: -1,
        position: "absolute",
        bottom: "-85%",
        left: "-90%",
        width: 600,
        height: 600,
        borderRadius: 600/2,
        backgroundColor: "#7ED957",
       },
       
})