import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-textutilities',
  templateUrl: './textutilities.component.html',
  styleUrls: ['./textutilities.component.css']
})
export class TextutilitiesComponent implements OnInit {

  @BlockUI('contextualColors') blockUIContextualColors: NgBlockUI;
  @BlockUI('contextualBackground') blockUIContextualBackground: NgBlockUI;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  public breadcrumb: any;

  htmlLanguage = 'html';

  contextualColorsContent1 = `
  <p class="text-muted">Your Text.</p>`;

  contextualColorsContent2 = `
  <p class="text-primary">Your Text.</p>`;

  contextualColorsContent3 = `
  <p class="text-success">Your Text.</p>`;

  contextualColorsContent4 = `
  <p class="text-info">Your Text.</p>`;

  contextualColorsContent5 = `
  <p class="text-warning">Your Text.</p>`;

  contextualColorsContent6 = `
  <p class="text-danger">Your Text.</p>`;

  contextualColorsContent7 = `
  <p class="red">Your Text.</p>`;

  contextualColorsContent8 = `
  <p class="purple">Your Text.</p>`;

  contextualColorsContent9 = `
  <p class="cyan">Your Text.</p>`;

  contextualColorsContent10 = `
  <p class="blue">Your Text.</p>`;

  contextualColorsContent11 = `
  <p class="teal">Your Text.</p>`;

  contextualColorsContent12 = `
  <p class="blue-grey">Your Text.</p>`;

  contextualBackgroundContent1 = `
  <p class="bg-primary">Your Text.</p>`;

  contextualBackgroundContent2 = `
  <p class="bg-success">Your Text.</p>`;

  contextualBackgroundContent3 = `
  <p class="bg-info">Your Text.</p>`;

  contextualBackgroundContent4 = `
  <p class="bg-warning">Your Text.</p>`;

  contextualBackgroundContent5 = `
  <p class="bg-danger">Your Text.</p>`;

  contextualBackgroundContent6 = `
  <p class="bg-dark">Your Text.</p>`;

  contextualBackgroundContent7 = `
  <p class="bg-red bg-dark">Your Text.</p>`;

  contextualBackgroundContent8 = `
  <p class="bg-purple bg-dark">Your Text.</p>`;

  contextualBackgroundContent9 = `
  <p class="bg-cyan bg-dark">Your Text.</p>`;

  contextualBackgroundContent10 = `
  <p class="bg-blue bg-dark">Your Text.</p>`;

  contextualBackgroundContent11 = `
  <p class="bg-teal bg-dark">Your Text.</p>`;

  contextualBackgroundContent12 = `
  <p class="blue-grey bg-dark">Your Text.</p>`;

  textAlignmentContent1 = `
  <p class="text-justify">Justified text.</p>`;

  textAlignmentContent2 = `
  <p class="text-nowrap">No wrap text.</p>`;

  textAlignmentContent3 = `
  <p class="text-left">Left aligned text on all viewport sizes.</p>`;

  textAlignmentContent4 = `
  <p class="text-center">Center aligned text on all viewport sizes.</p>`;

  textAlignmentContent5 = `
  <p class="text-right">Right aligned text on all viewport sizes.</p>`;

  textAlignmentContent6 = `
  <p class="text-sm-left">Left aligned text on viewports sized SM or wider.</p>
  <p class="text-md-left">Left aligned text on viewports sized MD or wider.</p>
  <p class="text-lg-left">Left aligned text on viewports sized LG or wider.</p>
  <p class="text-xl-left">Left aligned text on viewports sized XL or wider.</p>`;

  textAlignmentContent7 = `
  <p class="text-sm-center">Center aligned text on viewports sized SM or wider.</p>
  <p class="text-md-center">Center aligned text on viewports sized MD or wider.</p>
  <p class="text-lg-center">Center aligned text on viewports sized LG or wider.</p>
  <p class="text-xl-center">Center aligned text on viewports sized XL or wider.</p>`;

  textAlignmentContent8 = `
  <p class="text-sm-right">Right aligned text on viewports sized SM or wider.</p>
  <p class="text-md-right">Right aligned text on viewports sized MD or wider.</p>
  <p class="text-lg-right">Right aligned text on viewports sized LG or wider.</p>
  <p class="text-xl-right">Right aligned text on viewports sized XL or wider.</p>`;

  textTransformContent1 = `
  <p class="text-lowercase">Lowercased text.</p>`;

  textTransformContent2 = `
  <p class="text-uppercase">Uppercased text.</p>`;

  textTransformContent3 = `
  <p class="text-capitalize">CapiTaliZed text.</p>`;

  textOptionContent1 = `
  <p class="font-large-3" >Large lg text size.</p>`;

  textOptionContent2 = `
  <p class="font-large-2" >Large lg text size.</p>`;

  textOptionContent3 = `
  <p class="font-large-1" >Large lg text size.</p>`;

  textOptionContent4 = `
  <p class="font-medium-3" >Large md text size.</p>`;

  textOptionContent5 = `
  <p class="font-medium-2" >Large md text size.</p>`;

  textOptionContent6 = `
  <p class="font-medium-1" >Large sm text size.</p>`;

  textOptionContent7 = `
  <p>Normal base text size.</p>`;

  textOptionContent8 = `
  <p class="font-small-3" >Small lg text size.</p>`;

  textOptionContent9 = `
  <p class="font-small-2" >Small md text size.</p>`;

  textOptionContent10 = `
  <p class="font-small-1" >Small sm text size.</p>`;

  fontWeightContent1 = `
  <p class="text-bold-300">Font weight 300.</p>`;

  fontWeightContent2 = `
  <p class="text-bold-400">Font weight 400.</p>`;

  fontWeightContent3 = `
  <p class="text-bold-600">Font weight 600.</p>`;

  fontWeightContent4 = `
  <p class="text-bold-700">Font weight 700.</p>`;

  inlineTextElementsContent1 = `
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>`;

  inlineTextElementsContent2 = `
  <p><del>This line of text is meant to be treated as deleted text.</del></p>`;

  inlineTextElementsContent3 = `
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>`;

  inlineTextElementsContent4 = `
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>`;

  inlineTextElementsContent5 = `
  <p><u>This line of text will render as underlined.</u></p>`;

  inlineTextElementsContent6 = `
  <p><small>This line of text is meant to be treated as fine print.</small></p>`;

  inlineTextElementsContent7 = `
  <p><strong>This line rendered as bold text.</strong></p>`;

  inlineTextElementsContent8 = `
  <p><em>This line rendered as italicized text.</em></p>`;

  inlineTextElementsContent9 = `
  <p> Sample <abbr>Abbreviations.</abbr></p>`;

  inlineTextElementsContent10 = `
  <p> Sample <abbr title="HyperText Markup Language" class="initialism">HTML.</abbr></p>`;

  inlineTextElementsContent11 = `
  <p> For indicating variables use the <var> tag.</p>`;

  inlineTextElementsContent12 = `
  <p> Use the <kbd>  to indicate input that is typically entered via keyboard.</p>`;

  inlineTextElementsContent13 = `
  <p> For indicating sample output from a program use the  <samp>  tag. </p>`;

  inlineTextElementsContent14 = `
  <p> Wrap inline snippets of code with <code> tag. </p>`;

  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Text Utilities',
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
          'name': 'Text Utilities',
          'isLink': false
        }
      ]
    };
  }

  reloadContextualColors() {
    this.blockUIContextualColors.start('Loading..');

    setTimeout(() => {
      this.blockUIContextualColors.stop();
    }, 2500);
  }
  reloadContextualBackground() {
    this.blockUIContextualBackground.start('Loading..');

    setTimeout(() => {
      this.blockUIContextualBackground.stop();
    }, 2500);
  }

}
