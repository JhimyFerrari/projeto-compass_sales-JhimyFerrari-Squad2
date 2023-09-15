import { Text } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
import { signOut } from "../util/Auth";
interface Props{
    navigation:any
}
export function HomeScreen({navigation}:Props):JSX.Element{
    function handleSignOut(){
        signOut(navigation);

    }
return(
    <>
<Text>ola</Text>
<PrimaryButton onPress={handleSignOut} >Sair</PrimaryButton>
    </>
);
}