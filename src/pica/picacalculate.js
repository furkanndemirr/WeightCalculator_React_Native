import React from "react";
import {SafeAreaView,Text,TouchableOpacity,Button,ImageBackground, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
function Picacalculate({route})
{
    const image = {uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'};

    const navigation = useNavigation();
    const {user} = route.params;
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
                <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                    <Text style={{fontSize:40,color:"purple"}}>Ideal Weight For You</Text>
            {/* <TouchableOpacity onPress={()=> navigation.navigate("picaresult")}>
                <Text>Go picaresult</Text>

            </TouchableOpacity> */}
            <Text style={{fontSize:40,color:"purple"}}>{user.result} (kg)</Text>
                </View>
            
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Picacalculate;