/**
 * Company class
 */

import { Entity } from './common.d';

export class Company implements Entity{

    constructor(
        public name: string,
        public about: string
    ) {}


    // Data is initially held in a JSON object.  Instantiate to Company class
    static fromJSON(
        name,
        about,
        ): Company {
                return new Company(
                    name,
                    about
                )
        }
    
}
