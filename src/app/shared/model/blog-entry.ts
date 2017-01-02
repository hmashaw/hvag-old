/**
 * BlogEntry class
 */

import { BlogItem } from './common.d';

export class BlogEntry implements BlogItem{

    constructor(
        public title: string,
        public by: string,
        public on: Date,
        public body: string,
        public visible: boolean
    ){}


    static fromJSONList(list: any[]): BlogEntry[] {
        return list.map(BlogEntry.fromJSON)
    }


    // Data is initially held in a JSON object.  Instantiate to Company class
    static fromJSON({
        title,
        by,
        on,
        body,
        visible
    }): BlogEntry {
                return new BlogEntry(
                    title,
                    by,
                    on,
                    body,
                    visible
                )
        }

}
