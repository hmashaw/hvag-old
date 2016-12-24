/**
 * Company class
 */

import { Entity } from './common.d';

export class Company implements Entity{

    constructor(
        public name: string,
        public about: string
    ) {console.log('Company constructor called')}


    // Data is initially held in a JSON object.  Instantiate to Company class
    static fromJSON(
        name,
        about,
        ): Company {
            console.log('fromJSON called')
            return new Company(
                name,
                about
            )
        }
    
}
