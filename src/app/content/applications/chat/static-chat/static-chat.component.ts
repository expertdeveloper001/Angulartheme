import { Component, OnInit, AfterViewInit, ViewChild, Renderer2,
  ViewChildren, QueryList, ElementRef} from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import { ApplicationApiService } from 'src/app/_services/application-api.service';
import { ToastrService } from 'ngx-toastr';

/**
 * ChatHistory class
 */
class ChatHistory {
  constructor(
    public message: string[],
    public sender: number,
    public senderImage: string
  ) { }
}

/**
 * Contact class
 */
class Contact {
  constructor(
    public friendId: number,
    public name: string,
    public image: string,
    public time: string,
    public showMessage: string,
    public badge: string,
    public _ChatHistory: Array<ChatHistory>,
    public showicon: boolean,
    public isicon: boolean,
    public isactive: string,
    public isSelected: false
  ) { }
}

@Component({
  selector: 'app-static-chat',
  templateUrl: './static-chat.component.html',
  styleUrls: ['./static-chat.component.css']
})
export class StaticChatComponent implements OnInit, AfterViewInit {
  showicon: boolean;
  isicon: boolean;
  isactive: boolean;
  isSelected: boolean;
  chatArray: any;
  status = true;
  public contactChat = [];
  newMessage = '';
  newMessageArray = [];
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: false };

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  directiveRef?: PerfectScrollbarDirective;
  @ViewChildren('messages') messages: QueryList<any>;
  @ViewChild('content', { static: true }) content: ElementRef;

  contactList: any[] = [];
  temp = [];
  temp2 = this.contactList;

  /**
   * Constructor
   *
   * @param ApplicationApiService  chatApiService;
   * @param Renderer2              renderer
   */
  constructor(
    private chatApiService: ApplicationApiService,
    private renderer: Renderer2,
    private toastr: ToastrService ) {
    }

  /**
   * Scroll chat to bottom
   */
  ngAfterViewInit() {
    this.messages.forEach(this.scrollToBottom);
    this.messages.changes.subscribe(this.scrollToBottom);
  }

  /**
   * OnInit
   */
  ngOnInit() {
    this.toastr.clear();
    this.toastr.warning('', 'Please login through a personal account to experience the Live chat. We have it disabled for demo account.',
    { timeOut: 5000, disableTimeOut: true, closeButton: true });
    this.chatArray = this.chatApiService.getChatsData().subscribe(Response => {
      this.chatArray = Response;
      this.contactChat = this.chatArray[2].ChatHistory;
      this.contactList.push(
        new Contact(
          1,
          'Elizabeth Elliott',
          '../../../assets/images/portrait/small/avatar-s-3.png',
          '4:14 AM',
          ' Okay',
          '',
          this.chatArray[0].ChatHistory,
          true,
          false,
          'online',
          false
        )
      );
      this.contactList.push(
        new Contact(
          2,
          'Kristopher Candy',
          '../../../assets/images/portrait/small/avatar-s-7.png',
          '9:04 PM',
          ' Thank you',
          '12',
          this.chatArray[1].ChatHistory,
          false,
          false,
          'busy',
          false
        )
      );
    this.contactList.push(
      new Contact(
        3,
        'Sarah Woods',
        '../../../assets/images/portrait/small/avatar-s-8.png',
        '2:14 AM',
        ' Hello krish!',
        '3',
        this.chatArray[2].ChatHistory,
        false,
        true,
        'away',
        false
      )
    );
    this.contactList.push(
      new Contact(
        4,
        'Wayne Burton',
        '../../../assets/images/portrait/small/avatar-s-5.png',
        'Today',
        ' Can we connect?',
        '',
        this.chatArray[3].ChatHistory,
        false,
        false,
        'online',
        false
      )
    );
    this.contactList.push(
      new Contact(
        5,
        'Sarah Montgomery',
        '../../../assets/images/portrait/small/avatar-s-9.png',
        'Yesterday',
        ' Will connect you',
        '',
        this.chatArray[4].ChatHistory,
        false,
        false,
        'busy',
        false
      )
    );
    this.contactList.push(
      new Contact(
        6,
        'Heather Howell',
        '../../../assets/images/portrait/small/avatar-s-4.png',
        'Friday',
        ' Thank you',
        '4',
        this.chatArray[5].ChatHistory,
        false,
        false,
        'online',
        false
      )
    );
    this.contactList.push(
      new Contact(
        7,
        'Kelly Reyes',
        '../../../assets/images/portrait/small/avatar-s-14.png',
        'Thursday',
        ' I love you',
        '',
        this.chatArray[6].ChatHistory,
        false,
        false,
        'busy',
        false
      )
    );
    this.contactList.push(
      new Contact(
        8,
        'Vincent Nelson',
        '../../../assets/images/portrait/small/avatar-s-3.png',
        '4:14 AM',
        ' Who you are?',
        '',
        this.chatArray[7].ChatHistory,
        false,
        false,
        'online',
        false
      )
    );
    this.contactList.push(
      new Contact(
        9,
        'Elizabeth Elliott',
        '../../../assets/images/portrait/small/avatar-s-7.png',
        '9:04 PM',
        ' Okay',
        '',
        this.chatArray[8].ChatHistory,
        true,
        false,
        'online',
        false
      )
    );
    this.contactList.push(
      new Contact(
        10,
        'Kristopher Candy',
        '../../../assets/images/portrait/small/avatar-s-8.png',
        '2:14 AM',
        ' Thank you',
        '12',
        this.chatArray[9].ChatHistory,
        false,
        false,
        'busy',
        false
      )
    );
    this.contactList.push(
      new Contact(
        11,
        'Sarah Woods',
        '../../../assets/images/portrait/small/avatar-s-5.png',
        '1:10 AM',
        ' Let`s see.',
        '',
        this.chatArray[10].ChatHistory,
        false,
        true,
        'away',
        false
      )
    );
    this.contactList[2].isSelected = true;
  });
 }

  /**
   * Chat scroll to bottom
   */
  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) { }
  }

  /**
   * Filter Chat
   *
   * @param event     search event
   */
  updateFilter(event) {
    const value = event.target.value.toLowerCase();
    this.contactList = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.contactList];
    // filter our data
    const temp = this.contactList.filter(function (d) {
      return d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.contactList = temp;
    // Whenever the filter changes, always go back to the first page
  }

  /**
   * Send message
   */
  sendMessage() {
    if (this.newMessage !== null && this.newMessage !== '') {
      this.contactChat.push({
        message: [this.newMessage],
        sender: 0,
        senderImage: ''
      });
      this.newMessage = null;
    }
  }

  /**
   * Message send on Enter
   *
   * @param value       New message
   */
  onEnter(value: string) {
    this.newMessage = value;
    if (this.newMessage !== null && this.newMessage !== '') {
      this.contactChat.push({
        message: [this.newMessage],
        sender: 0,
        senderImage: ''
      });
      this.newMessage = null;
    }
  }

  /**
   * Display chat when click on contact
   *
   * @param friendId      Friend id
   */
  showChat(friendId) {
    this.contactChat = [];
    for (let i = 0; i < this.contactList.length; i++) {
      if (friendId !== this.contactList[i].friendId) {
        this.contactList[i].isSelected = false;
      }
      if (friendId === this.contactList[i].friendId) {
        this.contactList[i].isSelected = true;
      }
    }

    for (const friend of this.contactList) {
      if (friend.friendId === friendId) {
        this.contactChat = this.chatArray[friendId - 1].ChatHistory;
        break;
      }
    }
  }

  /**
   * Sidebar open/close in responsive
   *
   * @param event     Sidebar open/close
   */
  sidebar(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
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
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'content-overlay show') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
 }
