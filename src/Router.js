import React from "react";
import { SafeAreaView,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "./Home/Home";
import picacalculate from "./pica/picacalculate";
import picaresult from "./pica/picaresult";
import picahome from "./pica/picahome";

const Tab = createBottomTabNavigator();
const Stack  =createStackNavigator();

const Pica_stack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="picahome" component={picahome}></Stack.Screen>
            <Stack.Screen name="picacalculate" component={picacalculate}></Stack.Screen>
            <Stack.Screen name="picaresult" component={picaresult}></Stack.Screen>
      </Stack.Navigator>
      
    )
}
const screenOptionStyle = {
  
  
  tabBarStyle: [{ backgroundColor: 'black' }],
  
};
function App()
{
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),headerShown:false}}></Tab.Screen>
        <Tab.Screen name="pica" component={Pica_stack} options={{tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="check" color={color} size={size} />
          ),headerShown:false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;