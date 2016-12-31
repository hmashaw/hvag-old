/**
 * Firebase Initialization
 */

import { AuthMethods, AuthProviders } from 'angularfire2';

export const firebaseConfig = {
apiKey: "AIzaSyDnnNwdMCn0eIQra0UV8js-qPvIUuMo_Ks",
authDomain: "hvag-com.firebaseapp.com",
databaseURL: "https://hvag-com.firebaseio.com",
storageBucket: "hvag-com.appspot.com",
messagingSenderId: "193129412698"
};


export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}
