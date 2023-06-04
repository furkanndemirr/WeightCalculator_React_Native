import React from "react";
import {Button,SafeAreaView,Text,StyleSheet,TouchableOpacity,View,ImageBackground} from "react-native";


function Home({navigation})
{
    const image = {uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'};
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
                <Text style={styles.text}>Welcome</Text>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity style={styles.button_style} onPress={()=> navigation.navigate("pica")}>
                    <Text style={styles.button_text}>Calculate Ideal Weight</Text>
                </TouchableOpacity>
                </View>
                
            
                 <Text style={styles.text}>Made By Furkan DEMIR</Text>
            </ImageBackground>
            
        
            
        </SafeAreaView>
    )
}
const  styles = StyleSheet.create(
    {
        text:{
            backgroundColor:"black",
            marginTop:100,
            fontSize:30,
            padding:20,
            fontWeight:"bold",
            alignItems:"center",
            color:"white",
            textAlign:"center"
        },
        button_style:{
            padding:10,
            marginTop:130,
            backgroundColor:"pink",
            width:350,
            justifyContent:"center",
            

        },
        button_text:{
            fontSize:30,
            color:"white",
            textAlign:"center"
        }
    }
)
export default Home;