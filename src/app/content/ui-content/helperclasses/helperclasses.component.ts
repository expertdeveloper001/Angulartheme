import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-helperclasses',
  templateUrl: './helperclasses.component.html',
  styleUrls: ['./helperclasses.component.css']
})
export class HelperclassesComponent implements OnInit {

  @BlockUI('borders') blockUIGridOptions: NgBlockUI;
  @BlockUI('clearfix') blockUIClearfix: NgBlockUI;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  public breadcrumb: any;
  htmlLanguage = 'html';
  cssLanguage = 'css';

  clearfixContent1 = `
  <div class="clearfix">...</div>`;

  clearfixContent2 = `
  @mixin clearfix() {
    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }

  // Usage as a mixin
  .element {
    @include clearfix;
  };`;

  clearfixContent3 = `
  <div class="bg-info clearfix">
    <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
    <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
  </div>`;

  closeIconContent = `
  <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>`;

  displayPropertyContent1 = `
  <div class="d-inline bg-success">d-inline</div>
  <div class="d-inline bg-success">d-inline</div>`;

  displayPropertyContent2 = `
  <span class="d-block bg-primary">d-block</span>`;

  displayPropertyContent3 = `
  <div class="d-inline-block bg-warning">d-inline-block</div>
  <div class="d-inline-block bg-warning">d-inline-block</div>`;

  embedsContent1 = `
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
  </div>`;

  embedsContent2 = `
  <!-- 21:9 aspect ratio -->
  <div class="embed-responsive embed-responsive-21by9">
    <iframe class="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 16:9 aspect ratio -->
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 4:3 aspect ratio -->
  <div class="embed-responsive embed-responsive-4by3">
    <iframe class="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 1:1 aspect ratio -->
  <div class="embed-responsive embed-responsive-1by1">
    <iframe class="embed-responsive-item" src="..."></iframe>
  </div>`;

  flexContent1 = `
  <div class="d-flex p-2">I'm a flexbox container!</div>`;

  flexContent2 = `
  <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>`;

  flexContent3 = `
  <div class="d-flex flex-row">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-row-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>`;

  flexContent4 = `
  <div class="d-flex flex-column">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-column-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>`;

  flexContent5 = `
  <div class="d-flex justify-content-start">...</div>
  <div class="d-flex justify-content-end">...</div>
  <div class="d-flex justify-content-center">...</div>
  <div class="d-flex justify-content-between">...</div>
  <div class="d-flex justify-content-around">...</div>`;

  flexContent6 = `
  <div class="d-flex align-items-start">...</div>
  <div class="d-flex align-items-end">...</div>
  <div class="d-flex align-items-center">...</div>
  <div class="d-flex align-items-baseline">...</div>
  <div class="d-flex align-items-stretch">...</div>`;

  flexContent7 = `
  <div class="align-self-start">Aligned flex item</div>
  <div class="align-self-end">Aligned flex item</div>
  <div class="align-self-center">Aligned flex item</div>
  <div class="align-self-baseline">Aligned flex item</div>
  <div class="align-self-stretch">Aligned flex item</div>`;

  flexContent8 = `
  <div class="d-flex">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex">
    <div class="mr-auto p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="ml-auto p-2">Flex item</div>
  </div>`;

  flexContent9 = `
  <div class="d-flex align-items-start flex-column" style="height: 200px;">
    <div class="mb-auto p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex align-items-end flex-column" style="height: 200px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="mt-auto p-2">Flex item</div>
  </div>`;

  flexContent10 = `
  <div class="d-flex flex-nowrap">
  ...
  </div>`;

  flexContent11 = `
  <div class="d-flex flex-wrap">
  ...
  </div>`;

  flexContent12 = `
  <div class="d-flex flex-wrap-reverse">
  ...
  </div>`;

  flexContent13 = `
  <div class="d-flex flex-nowrap">
    <div class="order-3 p-2">First flex item</div>
    <div class="order-2 p-2">Second flex item</div>
    <div class="order-1 p-2">Third flex item</div>
  </div>`;

  flexContent14 = `
  <div class="d-flex align-content-start flex-wrap">
  ...
  </div>`;

  flexContent15 = `
  <div class="d-flex align-content-end flex-wrap">
  ...
  </div>`;

  flexContent16 = `
  <div class="d-flex align-content-center flex-wrap">
  ...
  </div>`;

  flexContent17 = `
  <div class="d-flex align-content-between flex-wrap">
  ...
  </div>`;

  flexContent18 = `
  <div class="d-flex align-content-around flex-wrap">
  ...
  </div>`;

  flexContent19 = `
  <div class="d-flex align-content-stretch flex-wrap">
  ...
  </div>`;

  floatContent = `
  <div class="float-left">Float left on all viewport sizes</div><br>
  <div class="float-right">Float right on all viewport sizes</div><br>
  <div class="float-none">Don't float on all viewport sizes</div>`;

  responsiveContent = `
  <div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
  <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
  <div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
  <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>`;

  imageReplacementContent1 = `
  <h1 class="text-hide">Custom heading</h1>`;

  imageReplacementContent2 = `
  <h1 class="text-hide my-2" style="background-image: url('../../../assets/images/logo/logo.png');
  width: 30px; height: 26px;">Bootstrap</h1>`;

  fixedTopContent = `
  <div class="fixed-top">...</div>`;

  fixedBottomContent = `
  <div class="fixed-bottom">...</div>`;

  stickyTopContent = `
  <div class="sticky-top">...</div>`;

  screenReadersContent = `
  <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>`;

  sizingContent1 = `
  <div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
  <div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
  <div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
  <div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>`;

  sizingContent2 = `
  <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
    <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
    <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
    <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
    <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
  </div>`;

  sizingContent3 = `
  <img class="mw-100" src="..." alt="Max-width 100%">`;

  sizingContent4 = `
  <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
    <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,0.1);">Max-height 100%</div>
  </div>`;

  spacingContent = `
  <div class="mx-auto" style="width: 200px;">
    Centered element
  </div>`;

  verticalAlignment = `
  <table style="height: 100px;">
    <tbody>
      <tr>
        <td class="align-baseline">baseline</td>
        <td class="align-top">top</td>
        <td class="align-middle">middle</td>
        <td class="align-bottom">bottom</td>
        <td class="align-text-top">text-top</td>
        <td class="align-text-bottom">text-bottom</td>
      </tr>
    </tbody>
  </table>`;

  visibilityContent = `
  <div class="visible">...</div>
  <div class="invisible">...</div>`;

  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Helper Classes',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Content',
          'isLink': true,
          'link': '#'
        },
        {
          'name': 'Helper Classes',
          'isLink': false
        }
      ]
    };
  }

  reloadBorders() {
    this.blockUIGridOptions.start('Loading..');

    setTimeout(() => {
      this.blockUIGridOptions.stop();
    }, 2500);
  }
  reloadClearfix() {
    this.blockUIClearfix.start('Loading..');

    setTimeout(() => {
      this.blockUIClearfix.stop();
    }, 2500);
  }

}
