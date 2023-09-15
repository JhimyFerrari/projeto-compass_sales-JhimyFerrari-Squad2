import { Text } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
import { signOut } from "../util/Auth";

export function HomeScreen():JSX.Element{
    function handleSignOut(){
        signOut();

    }
return(
    <>
<Text>ola</Text>
<PrimaryButton onPress={handleSignOut} >Sair</PrimaryButton>
    </>
);
}