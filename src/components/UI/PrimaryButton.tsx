 

import React  from "react";
import { Pressable, StyleSheet, Text,} from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
    children:string,
}
 
export function PrimaryButton({children}:Props):JSX.Element{
    return (
        <Pressable style={[ styles.container]}>
            <Text style={styles.text}>{children}</Text>
            
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.buttonPrimary,
        width:343,
        height:48,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:Colors.textLight,
        fontFamily:'Roboto-Medium',
        fontSize:14
    }

});