import * as React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';


function ScanQrScreen() {
    return(
        <SafeAreaView style = {styles.container}>
            
            <Image source={require("../assets/rb.png")} style = {{resizeMode: "contain", height: 100, width: 600, marginBottom: "5%" }}/>


            <View style={styles.TopCircleShape}/>
            <View style={styles.BottomCircleShape}/>
        </SafeAreaView>
    )
}


export default ScanQrScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        alignItems: 'center',
        justifyContent: 'center',
    },



     //absolute circles for design
       TopCircleShape: {
        zIndex: -1,
        position: "absolute",
        top: "-100%",
        width: 700,
        height: 700,
        borderRadius: 700/2,
        backgroundColor: "#7ED957",
       },

       BottomCircleShape: {
        zIndex: -1,
        position: "absolute",
        bottom: "-90%",
        width: 600,
        height: 600,
        borderRadius: 600/2,
        backgroundColor: "#7ED957",
       },
})