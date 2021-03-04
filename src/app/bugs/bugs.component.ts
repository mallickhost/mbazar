import { Component, OnInit } from '@angular/core';
import { BuglistService } from '../services/buglist.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {


  bugs: any;
  currentBug = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];


  constructor(private buglistService: BuglistService) { }

  ngOnInit(): void {

  }

  getRequestParams(searchTitle, page, pageSize) {
    let params = {};

    if (searchTitle) {
      params['title'] = searchTitle;
    }

    if (page) {
      params['page'] = page;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }
    return params;

  }

  retrieveBugs() {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.buglistService.getBugList(params).subscribe(response => {
      const { bugs, totalItem } = response;
      this.bugs = bugs;
      this.count = totalItem;
      console.log('hee');
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveBugs();
  }
  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveBugs();

  }
  setActiveBug(x, y) {
    console.log(x);
    console.log(y);

  }

}
