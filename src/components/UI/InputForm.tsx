import React, { useEffect } from "react";
import { StyleSheet, TextInput, View,Text } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  label: (string),
  value:string, 
  onChangeText:any,
  secureTextEntry?:boolean,
  style?:{},
 
  
  
};

export function InputForm({ label,value, onChangeText, secureTextEntry=false, style}: Props): JSX.Element {
 
 
  return (
    <View style={[styles.container,style]}>
  
      <View style={styles.textContainer}>
        
        <TextInput
          style={styles.userText}
          placeholder={label}
          onChangeText={onChangeText}
          value={value }
          secureTextEntry={secureTextEntry}
           
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.textField,
    width: 344,
    height: 66,
    borderRadius: 4,
  },
  textContainer:{
    paddingLeft:10,
  },
  userText: {
    fontFamily: "Roboto-Medium",
    color: Colors.textDark,
    fontSize: 16,
    marginTop:10,
  },
  guideText:{
    fontFamily:'Roboto-Regular',
    fontSize:40
  }
});
