import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ApplicationApiService } from '../../../_services/application-api.service';

class Email {
  constructor(
    public emailId: number,
    public name: string,
    public image: any,
    public time: string,
    public title: string,
    public message: string,
    public badge: string,
    public badgeClass: string,
    public iconClass: string,
    public isSelected: false,
    public Emailhistory = <Array<EmailHistory>>[],
    public Emailreplay = <Array<EmailReplay>>[]
  ) { }
}

class EmailHistory {
  constructor(
    public username: string,
    public image: any,
    public date: any,
    public title: string,
    public message: string,
    public descrition: string,
    public sender: string,
    public iconClass: string,
    public badge: string,
    public badgeClass: string
  ) { }
}
class EmailReplay {
  constructor(
    public username: string,
    public image: any,
    public date: any,
    public title: string,
    public message: string,
    public descrition: string,
    public sender: string
  ) { }
}
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = { wheelPropagation: true };
  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  directiveRef?: PerfectScrollbarDirective;
  @ViewChild(PerfectScrollbarDirective, { static: true })

  isHidden = false;
  isShown = true;
  emailList: any[] = [];
  emailDisplayList: any[] = [];
  emailreplay: EmailReplay[];
  email: EmailHistory[];
  emailArray: any;
  temp = [];
  temp2 = this.emailList;

  /**
   * Constructor
   *
   * @param ApplicationApiService     emailApiService
   * @param Renderer2                 renderer
   */
  constructor(
    private emailApiService: ApplicationApiService,
    private renderer: Renderer2,
  ) { }

  /**
   * OnInit
   */
  ngOnInit() {
    this.emailApiService.getEmailData().subscribe(Response => {
      this.emailArray = Response;
      this.email = this.emailArray.EmailHistory[1];
      this.emailreplay = this.emailArray.EmailReplay[1];
      this.emailList.push(
        new Email(
          1,
          'Tonny Deep',
          '../../../assets/images/portrait/small/avatar-s-1.png',
          '4.14 AM',
          'PixInvent, I fount you...',
          'I would be good.',
          'Family',
          'danger',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[0],
          this.emailArray.EmailReplay[0]
        )
      );
      this.emailList.push(
        new Email(
          2,
          'Louis Welch',
          '../../../assets/images/portrait/small/avatar-s-2.png',
          '2.15 AM',
          'Thanks, Lets do it.',
          'Can we connect today...',
          '',
          '',
          'warning',
          false,
          this.emailArray.EmailHistory[1],
          this.emailArray.EmailReplay[1]
        )
      );
      this.emailList.push(
        new Email(
          3,
          'Envato Market',
          '../../../assets/images/portrait/small/avatar-s-3.png',
          '11.18AM',
          'You have new comment',
          'Hi, Pixivent lets...',
          'Work',
          'warning',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[2],
          this.emailArray.EmailReplay[2]
        )
      );
      this.emailList.push(
        new Email(
          4,
          'Healther Howel',
          '../../../assets/images/portrait/small/avatar-s-4.png',
          'Today',
          'Project ABC Stauts ',
          'Andy,Lte`s...',
          'Private',
          'success',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[3],
          this.emailArray.EmailReplay[3]
        )
      );
      this.emailList.push(
        new Email(
          5,
          'Kellya Nelason',
          '../../../assets/images/portrait/small/avatar-s-5.png',
          '24 Feb',
          'Your new UI ',
          'Everything looks good',
          '',
          '',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[4],
          this.emailArray.EmailReplay[4]
        )
      );
      this.emailList.push(
        new Email(
          6,
          'Vincent rews',
          '../../../assets/images/portrait/small/avatar-s-6.png',
          '15 March',
          'Where are you John?',
          'We can party to night',
          '',
          '',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[5],
          this.emailArray.EmailReplay[5]
        )
      );
      this.emailList.push(
        new Email(
          7,
          'Heather Howell',
          '../../../assets/images/portrait/small/avatar-s-7.png',
          '5 Jan',
          'Will connect you',
          'Hi Kelly!',
          'Friends',
          'primary',
          'blue-grey lighten-3',
          false,
          this.emailArray.EmailHistory[6],
          this.emailArray.EmailReplay[6]
        )
      );
      this.emailList.push(
        new Email(
          8,
          'Kelly Relson',
          '../../../assets/images/portrait/small/avatar-s-8.png',
          'Yesterday',
          'Who you are?',
          'I would be good.',
          '',
          '',
          'blue-grey lighten-3',
          false
        )
      );
      this.emailList.push(
        new Email(
          9,
          'Vincent Nelson',
          '../../../assets/images/portrait/small/avatar-s-9.png',
          '8:23 AM',
          'Okey',
          'We can party to night',
          '',
          '',
          'blue-grey lighten-3',
          false
        )
      );
      this.emailList[1].isSelected = true;
    });
  }

  /**
   * Show email content
   */
  showmessage() {
    this.isHidden = this.isHidden ? false : true;
  }

  /**
   * Hide email content
   */
  hidemessage() {
    this.isShown = this.isShown ? false : true;
  }

  /**
   * Show Email
   *
   * @param email      Email content
   * @param event      Click event
   */
  showEmail(email) {
    this.email = email.Emailhistory;
    this.emailreplay = email.Emailreplay;

    for (let i = 0; i < this.emailList.length; i++) {
      if (email.emailId !== this.emailList[i].emailId) {
        this.emailList[i].isSelected = false;
      }
      if (email.emailId === this.emailList[i].emailId) {
        this.emailList[i].isSelected = true;
      }
    }
  }

  /**
  * Search email
  *
  * @param event     Convert value uppercase to lowercase;
  */
  updateFilter(event) {
    const value = event.target.value.toLowerCase();
    this.emailList = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.emailList];
    // filter our data
    const temp = this.emailList.filter(function (d) {
      return d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.emailList = temp;
    // Whenever the filter changes, always go back to the first page
  }

  /**
   * Sidebar open/close in responsive
   *
   * @param event     Sidebar open/close
   */
  sidebar(event) {
    const toggleIcon = document.getElementById('email-app-menu');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'feather ft-menu font-large-1') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    }
  }

  /**
   * Overlay add/remove fuction in responsive
   *
   * @param event     Overlay click event
   */
  contentOverlay(event) {
    const toggleIcon = document.getElementById('email-app-menu');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'content-overlay show') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }

  /**
   * Add overlay when open sidebar
   *
   * @param event     Content overlay
   */
  contentRightSidebar(event) {
    const toggle = document.getElementById('content-right');
    if (event.currentTarget.className === 'media _media border-0 ng-star-inserted active') {
      this.renderer.addClass(toggle, 'show');
    }
  }

  /**
   * Remove overlay when close sidebar
   *
   * @param event     Content overlay
   */
  contentRight(event) {
    const toggle = document.getElementById('content-right');
    if (event.currentTarget.className === 'btn btn-primary go-back') {
      this.renderer.removeClass(toggle, 'show');
    }
  }
}
