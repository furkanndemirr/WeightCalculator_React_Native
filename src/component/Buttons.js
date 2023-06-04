import React from "react";
import { SafeAreaView,Text,View , Button,TouchableOpacity,StyleSheet,Alert} from "react-native";

function Buttons({onpress,title,onpressin}){
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={onpress} onPressIn={onpressin}>
                <Text style={styles.text} >{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        margin:10,
        color:"white",
        textAlign:"center"
    },
    button:
    {
        backgroundColor:"black",
        color:"white",
        width:200,
        height:50,
        borderRadius:10,
        margin:10,
    }
})

export default Buttons;