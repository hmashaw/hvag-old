/**
 * Company class
 */

import { Entity } from './common.d';

export class Company implements Entity{

    constructor(
        public $key: string,
        public name: string,
        public main_info: string,
        public card1_title: string,
        public card1_text: string,
        public card2_title: string,
        public card2_text: string,
        public card3_title: string,
        public card3_text: string
    ) {}


    // Data is initially held in a JSON object.  Instantiate to Company class
    static fromJSON(
        $key,
        name,
        main_info,
        card1_title,
        card1_text,
        card2_title,
        card2_text,
        card3_title,
        card3_text
        ): Company {
                return new Company(
                    $key,
                    name,
                    main_info,
                    card1_title,
                    card1_text,
                    card2_title,
                    card2_text,
                    card3_title,
                    card3_text
                )
        }
    
}
