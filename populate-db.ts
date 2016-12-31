/**
 * populate-db
 * Populate DB with bootstrap data from <company>.ts
 */

import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {THIS_COMPANY} from "./src/app/shared/model/hvag";


const fbApp = initializeApp(firebaseConfig);

const companyRef = database().ref('website');


console.log("WARNING: VERY IMPORTANT - PLEASE READ THIS\n"); 
console.log('WARNING: Please set firebase config on src/environmnents/firebase.config.ts\n');

console.log('fbAPP Name is: ' + fbApp.name);
console.log('Adding company Data...\n');


const TC = THIS_COMPANY;
const cRef = companyRef.push({
    key: TC.key,
    name: TC.name,
    main_info: TC.main_info,
    card1_title: TC.card1_title,
    card1_text: TC.card1_text,
    card2_title: TC.card2_title,
    card2_text: TC.card2_text,
    card3_title: TC.card3_title,
    card3_text: TC.card3_text,
    member_welcome: TC.member_welcome
})
