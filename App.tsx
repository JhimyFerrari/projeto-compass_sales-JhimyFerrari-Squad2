/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/LoginScreen";
import { Colors } from "./src/util/Colors";
import { SignScreen } from "./src/screens/SignScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.backgroundLight}
        barStyle={"dark-content"}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sign">
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
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
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

const styles = StyleSheet.create({});

export default App;
