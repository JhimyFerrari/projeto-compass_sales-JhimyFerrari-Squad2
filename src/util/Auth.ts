 
import auth from '@react-native-firebase/auth'

import { Alert } from 'react-native';
 
 
 
export function createUser(email :string,password:string,navigation:any){
  auth().createUserWithEmailAndPassword(email,password)
  .then(userCredential=>{
    auth().signOut;
    navigation.navigate('Login')
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
        else {
          Alert.alert(
            'Something went wrong',
            'Something is causing problems',
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


export function signOut(navigation:any){
    auth().signOut();
    navigation.replace('Sign');
}

export function passwordReset(email:string,navigation:any){
    auth().sendPasswordResetEmail(email);
    navigation.navigate('Login');

}