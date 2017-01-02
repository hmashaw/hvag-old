/**
 * populate-db
 * Populate DB with bootstrap data from <company>.ts
 */

import readline = require('readline');

import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {THIS_BLOG} from "./src/app/shared/model/hvag-blog";


const fbApp = initializeApp(firebaseConfig);

const blogRef = database().ref('blog');

function blogLoader() {

    console.log('fbAPP Name is: ' + fbApp.name);
    console.log('Adding Blog Data...\n');


    THIS_BLOG.blog_entries.forEach(blog_entry => {

        console.log("Adding blog entry -> '" + blog_entry.title + "'");

    /*
        const BE = blogRef.push({
            title: blog_entry.title,
            by: blog_entry.by,
            on: blog_entry.on,
            body: blog_entry.body,
            visible: blog_entry.visible
        })
    */

    })

}

console.log("WARNING: VERY IMPORTANT - PLEASE READ THIS"); 
console.log('*** Please set firebase config in src/environmnents/firebase.config.ts ***\n');

const answer = ['Y', 'YES']
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Do you wish to continue (Y/N)> ');
rl.prompt();
rl.on('line', (input) => {
    input = input.toUpperCase();
    console.log(input);
    console.log(answer.indexOf(input));
    if (answer.indexOf(input) !> -1) rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});

