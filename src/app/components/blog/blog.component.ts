import { Component, OnInit } from '@angular/core';

import { CompanyServiceFB } from '../../shared/model/company-fb.service';

import { BlogEntry } from '../../shared/model/blog-entry';


@Component({
    selector: 'hvag-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

    allBlogEntries$: BlogEntry[];
    filteredBlogEntries$: BlogEntry[];

    constructor(private companyServiceFB: CompanyServiceFB) {}


    ngOnInit() {
        this.companyServiceFB.getAllBlogEntries()
            .subscribe(
                blogEntries => this.allBlogEntries$ = this.filteredBlogEntries$ = blogEntries
            )
    }
    

    setVisible(blogEntry: BlogEntry, search: string) {
        search = search.toUpperCase();
        var _blogEntry: BlogEntry = BlogEntry.fromJSON(blogEntry);
        _blogEntry.body = blogEntry.body.toUpperCase();
        if (!(_blogEntry.body.includes(search))) {
            blogEntry.visible = false;
        }
        else {
            blogEntry.visible = true;
        }
        return blogEntry;
    }


    search(search: string) {
        
        this.filteredBlogEntries$ = this.allBlogEntries$.map(blogEntry => this.setVisible(blogEntry, search)).filter(blogEntry => Boolean(blogEntry.visible));
    }

}
