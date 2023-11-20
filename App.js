import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button,Image, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from "react-hook-form"
import { Box, useColorMode, toggleColorMode, Container} from 'native-base';
import { NativeBaseProvider } from 'native-base';
import styled, { useTheme } from "styled-components/native";
import login from './screens/login';
import signup from './screens/signup';
import Login from './screens/login';
const HomeScreen = () => {
  const [route, setRoute] = useState();
  const onPress = () =>{
    
    setRoute(HomeScreen => SignInScreen);
  } 
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'aliceblue',}}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress} >
        <Text>Press </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles={
  buttonStyle:{
    backgroundColor: 'powderblue', 
    borderRadius:5,
    height:40,
    width:'40%',
    justifyContent:'center',
    alignItems:"center"
  },
  image:{
    flex:1,
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    flexWrap: 'wrap'
  },
  input:{
    height: 40,
    margin: 12,
    
    padding: 10,
  },
  signin :{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'aliceblue',}
  
}


function SettingsScreen() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.buttonStyle} >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  
    
  
  );
}
function SignInScreen(){
  

  

  
   
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
   
    
    <View style={styles.signin}>
      <Image  source={{
    uri: "https://vdbapp.com/wp-content/uploads/2020/04/VDB_LOGO_LOGO_SQ-2.jpg",
  }}
  style={styles.image}

  />
    <CheckboxContainer>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
          <SafeAreaView>
          <TextInput
          inputLabel={"[IN] Username"}
              leftIcon={"key-square"}
              placeholder={"[IN] Username"}
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              
              error={errors?.password?.message}
            
          />
          </SafeAreaView>
        )}
       
        name="firstName"
      />
       </CheckboxContainer>
      {errors.firstName && <Text>This is required.</Text>}
      
      <CheckboxContainer>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          inputLabel={"[IN] Password"}
              leftIcon={"key-square"}
              placeholder={"[IN] Password"}
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.password?.message}
          />
        )}
        name="lastName"
        
      />
      
       </CheckboxContainer>
       
       {errors.firstName && <Text>This is required.</Text>}
       <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonStyle} >
        <Text>Submit</Text>
      </TouchableOpacity>
      
      
    </View>
    
  )
}
const CheckboxContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: 'white';
  margin: 10px;
  
  padding-left: 40px;
  padding-right:  12px;
  border-radius: 8px;
  border-width: 1px;
  padding-top: 1px;
  padding-bottom:1px;
`;


const Bottom_Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    

    <Bottom_Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inventory') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'SignIn') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } 

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
    >
      <Bottom_Tab.Screen name="Inventory" component={Login} options={{ tabBarBadge: 1 }} />
      <Bottom_Tab.Screen name="SignIn" component={SignInScreen} options={{ tabBarBadge: 2 }} />

      <Bottom_Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 3 }} />
    </Bottom_Tab.Navigator>
  );
}


export default function App() {
  return (


   
    <NavigationContainer>
      
      <MyTabs />
    </NavigationContainer>
  
    
  );
}
