import { ImageBackground, StatusBar, Text } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
import { signOut } from "../util/Auth";
import { Colors } from "../util/Colors";
interface Props{
    navigation:any
}
export function HomeScreen({navigation}:Props):JSX.Element{
    function handleSignOut(){
        signOut(navigation);

    }
return(
    
    <>
    <StatusBar
       backgroundColor={Colors.backgroundDark}
       barStyle={"light-content"}
     />
    <ImageBackground
    source={require('../assets/Img/backgroundHome.png')}
    style={{
        width:'100%',
        height:366,
    }}

    >
        
    </ImageBackground>
<Text>ola</Text>
<PrimaryButton onPress={handleSignOut} >Sair</PrimaryButton>
    </>
);
}