import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @BlockUI('gridOptions') blockUIGridOptions: NgBlockUI;
  @BlockUI('equalWidth') blockUIEqualWidth: NgBlockUI;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  public breadcrumb: any;

  htmlLanguage = 'html';
  cssLanguage = 'css';

  equalWidthContent1 = `
  <div class="container">
    <div class="row">
      <div class="col">
        1 of 2
      </div>
      <div class="col">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col">
        2 of 3
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>`;

  equalWidthContent2 = `
  <div class="container">
    <div class="row">
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="w-100"></div>
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>`;

  oneColumnWidthContent = `
  <div class="container">
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-6">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-5">
        2 of 3 (wider)
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>`;

  variableWidthContent = `
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2">
        1 of 3
      </div>
      <div class="col-md-auto">
        Variable width content
      </div>
      <div class="col col-lg-2">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col-md-auto">
        Variable width content
      </div>
      <div class="col col-lg-2">
        3 of 3
      </div>
    </div>
  </div>`;

  equalWidthMultiRowContent = `
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="w-100"></div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>`;

  allBreakpointsContent = `
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>`;

  stackedToHorizontalContent = `
  <!-- Modern the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-12 col-md-8">.col-12 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>`;

  verticalAlignmentCOntent1 = `
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
      <div class="col">
        One of three columns
      </div>
    </div>
  </div>`;

  verticalAlignmentContent2 = `
  <div class="container">
    <div class="row">
      <div class="col align-self-start">
        One of three columns
      </div>
      <div class="col align-self-center">
        One of three columns
      </div>
      <div class="col align-self-end">
        One of three columns
      </div>
    </div>
  </div>`;

  horizontalAlignmentContent = `
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-4">
        One of two columns
      </div>
      <div class="col-4">
        One of two columns
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4">
        One of two columns
      </div>
      <div class="col-4">
        One of two columns
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-4">
        One of two columns
      </div>
      <div class="col-4">
        One of two columns
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-4">
        One of two columns
      </div>
      <div class="col-4">
        One of two columns
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-4">
        One of two columns
      </div>
      <div class="col-4">
        One of two columns
      </div>
    </div>
  </div>`;

  noGuttersContent1 = `
  .no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }`;

  noGuttersContent2 = `
  <div class="row no-gutters">
    <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>`;

  columnWrappingContent = `
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>`;

  columnBreaksContent1 = `
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>`;

  columnBreaksContent2 = `
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>`;

  orderClassesContent1 = `
  <div class="container">
    <div class="row">
      <div class="col">
        First, but unordered
      </div>
      <div class="col order-12">
        Second, but last
      </div>
      <div class="col order-1">
        Third, but first
      </div>
    </div>
  </div>`;

  orderClassesContent2 = `
  <div class="container">
    <div class="row">
      <div class="col">
        First, but unordered
      </div>
      <div class="col">
        Second, but unordered
      </div>
      <div class="col order-first">
        Third, but first
      </div>
    </div>
  </div>`;

  offsetClassesContent1 = `
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>`;

  offsetClassesContent2 = `
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>

  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col.col-sm-6.col-md-5.col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>`;

  marginUtilitiesContent = `
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
    <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto mr-auto">.col-auto .mr-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>`;

  nestingContent = `
  <div class="row">
    <div class="col-sm-9">
      Level 1: .col-sm-9
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>`;

  constructor() {

  }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Grid System',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/index.html'
        },
        {
          'name': 'Content',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Grid System',
          'isLink': false
        }
      ]
    };

  }

  reloadGridOptions() {
    this.blockUIGridOptions.start('Loading..');

    setTimeout(() => {
      this.blockUIGridOptions.stop();
    }, 2500);
  }
  reloadEqualWidth() {
    this.blockUIEqualWidth.start('Loading..');

    setTimeout(() => {
      this.blockUIEqualWidth.stop();
    }, 2500);
  }
}
