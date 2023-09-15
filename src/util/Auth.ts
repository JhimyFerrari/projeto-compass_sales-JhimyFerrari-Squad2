 
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';
const API_KEY = 'AIzaSyAOQLtR3k922RjTID5m-qkXp1VeezEf-Y8'
 
 
export function createUser(email :string,password:string,navigation:any){
    auth().createUserWithEmailAndPassword(email,password)
    .then(userCrential=>{
       navigation.navigate('Home')
    }).catch(error =>{
        if (error.code ==='auth/email-already-in-use') {
            Alert.alert(
                'Error in SignUp',
                'Email already in use',
                [{
                    text:'Ok'
                }]
            )
            
        }
    
    });
     
};

export function signIn(email :string,password:string,navigation:any){
    auth().signInWithEmailAndPassword(email,password)
    .then(()=> 
    navigation.navigate('Home'))
    .catch(error => 
        {
            Alert.alert(
                'Error in Login',
                'Email or Password incorrect',
                [{
                    text:'Ok'
                }]
            )
        });
 
};


export function signOut(){
    auth().signOut();
}

export function passwordReset(email:string,navigation:any){
    auth().sendPasswordResetEmail(email);
    navigation.navigate('Login');

}