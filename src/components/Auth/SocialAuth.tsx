import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../util/Colors";

interface Props{
    children:string,
    style?:{},
    onPressGoogle?:()=>void,
    onPressFacebook?:any,
}

export function SocialAuth({children,style,onPressGoogle,onPressFacebook}:Props): JSX.Element {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.imageOutContainer} >
      <Pressable style={styles.imageInnerContainer}
        onPress={onPressGoogle}>
            <Image 
            style={styles.image}
            source={require('../../assets/Img/Icons/google-icon.png')}/>
        </Pressable>
        <Pressable style={styles.imageInnerContainer}
        onPress={onPressFacebook}>
            <Image 
            style={styles.image}
            source={require('../../assets//Img/Icons/facebook-icon.png')}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        gap:12,
        
    },
    text:{
        fontSize:14,
        fontFamily:'Roboto-Medium',
        color:Colors.textDark,
    },
    imageOutContainer:{
        flexDirection:'row',
        gap:16
    },
    imageInnerContainer:{
        width:92,
        height:64,
        borderRadius:24,
        backgroundColor:Colors.iconBackground,
        alignItems:'center',
        justifyContent:'center'

    },
    image:{
        height:26,
        width:26,

    }
});
