import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  @BlockUI('nativeFontStack') blockUINativeFontStack: NgBlockUI;
  @BlockUI('displayHeadings') blockUIDisplayHeadings: NgBlockUI;

  public breadcrumb: any;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel' : 'Typography',
      'links' : [
          {
            'name' : 'Home',
            'isLink' : true,
            'link' : '/index.html'
          },
          {
            'name' : 'Content',
            'isLink' : true,
            'link' : '#'
          },
          {
            'name' : 'Typography',
            'isLink' : false
          }
      ]
    };
  }

  reloadNativeFontStack() {
    this.blockUINativeFontStack.start('Loading..');

    setTimeout(() => {
      this.blockUINativeFontStack.stop();
    }, 2500);
  }
  reloadDisplayHeadings() {
    this.blockUIDisplayHeadings.start('Loading..');

    setTimeout(() => {
      this.blockUIDisplayHeadings.stop();
    }, 2500);
  }
}
