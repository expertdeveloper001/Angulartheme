import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-syntexhighlighter',
  templateUrl: './syntexhighlighter.component.html',
  styleUrls: ['./syntexhighlighter.component.css']
})
export class SyntexhighlighterComponent implements OnInit {

  @BlockUI('basicUsage') blockUIBasicUsage: NgBlockUI;
  @BlockUI('examples') blockUIExamples: NgBlockUI;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };
  public breadcrumb: any;

  htmlLanguage = 'html';
  cssLanguage = 'css';
  jsLanguage = 'javascript';

  basicUsageContent1 = `
  <pre>
  <code class="language-css">
  p {
    color: red
  }

  </code>
  </pre>`;

  basicUsageContent2 = `
  p {
    color: red
  }`;

  examplesHtmlContent1 = `
  <pre>
  <code class="language-markup">
    HTML CODE ... </code>
  </pre>`;

  examplesHtmlContent2 = `
  <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
  <h4 class="card-title">
  Card title</h4>
  <p class="card-text">
  Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">
  Cras justo odio</li>
  <li class="list-group-item">
  Dapibus ac facilisis in</li>
  <li class="list-group-item">
  Vestibulum at eros</li>
  </ul>
  <div class="card-body">
  <a class="card-link">
  Card link</a>
  <a class="card-link">
  Another link</a>
  </div>
  </div>`;

  examplesCssContent1 = `
  <pre>
  <code class="language-css">
  CSS CODE ... </code>
  </pre>`;

  examplesCssContent2 = `
  a:active {
    outline: 0;
  }

  a:hover {
    outline: 0;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b, strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }`;

  examplesJsContent1 = `
  <pre>
  <code class="language-js">
  HTML CODE ... </code>
  </pre>`;

  examplesJsContent2 = `
  init: function() {
    var scroll_theme=($('.main-menu').hasClass('menu-dark')) ? 'light': 'dark';
    this.obj=$(".main-menu-content").perfectScrollbar( {
        suppressScrollX: true, theme: scroll_theme
    }
    );
  }

  , update: function() {
      if (this.obj) {
        $(".main-menu-content").perfectScrollbar('update');
      }
  }

  , enable: function() {
      this.init();
  }

  ,`;

  lineNumbersContent1 = `
  <pre class="line-numbers">
  <code class="language-css">
  p {
    color: red
  }

  </code>
  </pre>`;

  lineNumbersContent2 = `
  (function() {
    if (typeof self==='undefined' || !self.Prism || !self.document) {
        return;
    }
  }

  ());`;

  LineHighlightContent1 = `
  <pre data-line="2, 4, 8-10">
  <code class="language-css">
  p {
    color: red
  }

  </code>
  </pre>`;

  LineHighlightContent2 = `
  pre.line-numbers {
      position: relative;
      padding-left: 3.8em;
      counter-reset: linenumber;
  }

  pre.line-numbers > code {
      position: relative;
  }

  .line-numbers .line-numbers-rows {
      position: absolute;
      pointer-events: none;
      top: 0;
      font-size: 100%;
      left: -3.8em;
      width: 3em;
      /* works for line-numbers below 1000 lines */
      letter-spacing: -1px;
      border-right: 1px solid #999;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }`;

  autoLinkerContent1 = `
  <pre>
  <code class="language-css">
  @font-face {
    src: url(http://lea.verou.me/logo.otf);
  }

  </code>
  </pre>`;

  autoLinkerContent2 = `
  @font-face {
      src: url(http://lea.verou.me/logo.otf);
      font-family: 'LeaVerou';
  }`;

  showInvisiblesContent = `
  (function() {
    if ( typeof self !=='undefined' && !self.Prism || typeof global !=='undefined' && !global.Prism) {
        return;
    }
    Prism.hooks.add('before-highlight', function(env) {
        var tokens=env.grammar;
        tokens.space=/ /g;
      }
    );
    }

)();`;

  fileHighlightContent1 = `
  <pre data-src="myfile.js">
  </pre>`;

  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Syntax Highlighter',
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
          'name': 'Syntax Highlighter',
          'isLink': false
        }
      ]
    };
  }

  reloadBasicUsage() {
    this.blockUIBasicUsage.start('Loading..');

    setTimeout(() => {
      this.blockUIBasicUsage.stop();
    }, 2500);
  }
  reloadExamples() {
    this.blockUIExamples.start('Loading..');

    setTimeout(() => {
      this.blockUIExamples.stop();
    }, 2500);
  }

}
