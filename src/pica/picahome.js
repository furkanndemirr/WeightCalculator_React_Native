import React,{useState} from "react";
import {SafeAreaView,Text,TouchableOpacity,Button,View,StyleSheet,Modal,TextInput,ImageBackground,Alert} from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import Buttons from "../component/Buttons";
function Picahome({navigation})
{
    const image = {uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'};
    const [usergender,setusergender] = useState(null);
    const [userheight,setuserheight] = useState(null);
    const [result,setresult] = useState(null);

    const gender  = ["Man", "Women"]

    function addgender(gen){
        setusergender(gen)
    }
    function addheight(gen){
        setuserheight(gen);
        
    }

    function firstcal(){


        if (usergender == 'Man') {
            const temp = ( (userheight-100) - ((userheight-100) *0.10)) 
            setresult(temp)

            
        }

        if (usergender == 'Women') {
            const temp = ( (userheight-100) - ((userheight-100) *0.15))  
            setresult(temp)
        }
    }


    
    function calculate(){
        
        if (!usergender || !userheight) {
            Alert.alert('Error','Please make sure you have entered all data');
            return;
        }

        if (userheight<150){
            Alert.alert('Error','Sorry. You need to be at least 150 cm tall in order to calculate correctly.')
            return
        }

        const user = {
            userheight,
            result
        };
        navigation.navigate('picacalculate', {user})


    }

    function total (){
        firstcal();
        calculate();
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>

            
            <View style={{flex:1,backgroundColor:"transparent",marginTop:275}}> 
            <Text style={styles.text}>Choose Gender</Text>
            <View >
            <SelectDropdown
                defaultButtonText="Choose"
                buttonTextStyle={{color:"white"}} 
                buttonStyle= {styles.button}
                data={gender}
                onSelect={(selectedItem) => {
                    addgender(selectedItem);
                }}
                
            />
            </View>
            
            <Text style={styles.text}>Height (cm)</Text>
            <View>
                <TextInput style={styles.button} placeholder="cm" placeholderTextColor={"white"} onChangeText={addheight}></TextInput>
                

           
            </View>
            
            <View style={{alignItems:"center",marginTop:20}}>
                <Buttons onpress={calculate} onpressin={firstcal} title="Go to PicaCalculate"> </Buttons>
            </View>
            {/* <View style={{alignItems:"center",marginTop:20}}>
                <Buttons onpress={()=> navigation.navigate("picacalculate")} title="go to picacalculate"> </Buttons>
            </View> */}
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
{
    text:{
        fontSize:20,
        fontWeight:"bold",
        margin:10,
        color:"black",
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
}
)
    

export default Picahome;