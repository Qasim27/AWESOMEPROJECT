import React from "react";
import{Text, View} from 'react-native'
import MenuItems from "./components/Menu";
import FitlyticsHeader from "./components/Header";
import WorkoutScreen from "./components/Workout";
import WelcomeScreen from "./components/Welcome";
//import LoginScreen from "./android/app/src/screens/Login";

import LittleLemonHeader from "./components/Header";


const App = () => {
    return (
      <View style={{ flex: 1,backgroundColor:'black' }}>
        <FitlyticsHeader />
        <View style={{height:20}} /> 
        {/* <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'white',marginBottom:10}}>View Menu</Text> */}
        <View style={{height:20}} /> 
       
        {/* <WelcomeScreen/> */}
        <MenuItems/>
        {/* <LoginScreen/> */}
        
        
        
        {/* Rest of your app content */}
        
      </View>
    );
  };
  
  export default App;
