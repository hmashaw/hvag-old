/**
 * Common items utilized throught the application
 */


// Entity - Helps to enforce entity (company) consistency across applcation
export interface Entity {
    name: string;
    main_info: string;
    card1_title: string;
    card1_text: string;
    card2_title: string;
    card2_text: string;
    card3_title: string;
    card3_text: string;
}


export interface BlogItem {
    title: string;
    by: string;
    on: Date;
    body: string;
    visible: boolean;
}