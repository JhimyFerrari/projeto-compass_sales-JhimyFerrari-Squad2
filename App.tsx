/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { Colors } from './src/util/Colors';
 
 
 
 

 const Stack = createNativeStackNavigator();
function App(): JSX.Element {
   
  return (
    <>
    <StatusBar backgroundColor={Colors.backgroundLight} barStyle={'dark-content'}/>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name=' ' 
       component={LoginScreen}
       options={{
         headerStyle:{
          backgroundColor:Colors.backgroundLight,
         },
         headerShadowVisible:false
          
        }}/>
    </Stack.Navigator>

    </NavigationContainer>
   
        </>

  );
}

const styles = StyleSheet.create({

});

export default App;
