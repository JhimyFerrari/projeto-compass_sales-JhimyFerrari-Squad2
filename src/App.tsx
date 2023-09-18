/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screens/LoginScreen";
import { Colors } from "./util/Colors";
import { SignScreen } from "./screens/SignScreen";
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { HomeScreen } from "./screens/HomeScreen";
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
   const unsubscribe= auth().onAuthStateChanged((_user) => {
      setUser(_user);
      if (initializing) {
        
        setInitializing(false);
      }
    });
    return unsubscribe;
  },[]);

  let inicialPage= user ? 'Home': 'Sign'

  if (initializing) {
    return(
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={Colors.error} />
      </View>
    );
    
  }
  return (
    <>
      <StatusBar
        backgroundColor={Colors.backgroundLight}
        barStyle={"dark-content"}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={inicialPage}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.backgroundLight,
              },
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Sign"
            component={SignScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.backgroundLight,
              },
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.backgroundLight,
              },
              title: "",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.backgroundLight,
              },
              title: "",
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  loader:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
