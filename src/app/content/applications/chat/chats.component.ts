import { Component, OnInit, AfterViewInit, ViewChild, Renderer2, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { UserService } from 'src/app/_api/user/user.service';
import { ChatService } from 'src/app/_api/chat/chat.service';
import { Chats } from './chats';

@Component({
  selector: 'app-chat',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit, AfterViewInit {
  showicon: boolean;
  isicon: boolean;
  isactive: boolean;
  isSelected: boolean;
  chatArray: any;
  status = true;
  newMessage = '';
  contactId: string;
  messageInfo: any;
  userInfo: any;
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: false };

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  directiveRef?: PerfectScrollbarDirective;
  @ViewChildren('messages') messages: QueryList<any>;
  @ViewChild('content', { static: true }) content: ElementRef;

  contactList = [];
  contactChats = [];
  showChatInProgress = false;
  createInProgress = false;
  temp2 = this.contactList;
  temp = [];
  loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
  currentUserUid = this.loggedInUser.uid;

  currentUser = ''; // UID of user 1
  clickedUser = ''; // UID of user 2
  chatList = [];
  displayChat = [];
  chatId = '';
  senderImage = '';
  currentUserImage = '';
  loadContacts = false;
  prevMsg = '';


  /**
   * Constructor
   *
   * @param ApplicationApiService  chatApiService;
   * @param Renderer2              renderer
   */
  constructor(
    private renderer: Renderer2,
    private userService: UserService,
    private chatService: ChatService) {
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
    this.userService.getUsers().subscribe(users => {
      const contactList = users.map(item => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        };
      });
      this.contactList = [];
      contactList.forEach(element => {
        if (this.loggedInUser.uid !== element['uid']) {
          this.contactList.push(element);
        }
      });
      this.clickedUser = this.contactList[0].uid;
      this.currentUserImage = this.loggedInUser.photoURL;
      this.senderImage = this.contactList[0].image;
    });

    this.chatService.getChats().subscribe(chats => {
      this.contactChats = chats.map(item => {
        return {
          ...item.payload.doc.data() as Chats,
          id: item.payload.doc.id
        };
      });
      this.showDefaultChat();
      this.showLastMessage();
      this.createInProgress = false;
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
      this.messageInfo = {
        message: this.newMessage,
        date: Date.now(),
        uid: this.loggedInUser.uid,
        status: 'send'
      };
      if (this.chatId !== '') {
        this.chatService.sendMessage(this.chatId, this.messageInfo);
      } else {
        this.currentUser = this.loggedInUser.uid;
        const roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
          this.clickedUser : this.clickedUser + '_' + this.currentUser);
        this.userInfo = {
          uid: this.loggedInUser.uid,
          name: roomName,
          image: this.loggedInUser.photoURL,
          time: Date.now(),
          showMessage: '',
          badge: '',
          showicon: true,
          isicon: false,
          isactive: 'online',
          isSelected: false,
          chatHistory: []
        };
        // Add message to box before sending
        this.displayChat.push(this.messageInfo);
        this.createInProgress = true;
        this.chatService.createChatRoom(this.userInfo).then(chatRoom => {
          this.chatId = chatRoom.id;
          this.loadChatRoom(chatRoom.id);
          this.chatService.sendMessage(this.chatId, this.messageInfo);
          this.createInProgress = false;
        });
      }
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
    this.sendMessage();
  }

  /**
   * Display chat when click on contact
   *
   * @param friendId      Friend id
   */
  showChat(data) {
    if (this.showChatInProgress || this.createInProgress) {
      return;
    }
    this.showChatInProgress = true;
    this.currentUser = this.loggedInUser.uid;
    this.clickedUser = data.uid;
    this.contactId = data.id;
    this.currentUserImage = this.loggedInUser.photoURL;
    this.senderImage = data.image;

    const roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
      this.clickedUser : this.clickedUser + '_' + this.currentUser);

    this.userInfo = {
      uid: this.loggedInUser.uid,
      name: roomName,
      image: this.loggedInUser.photoURL,
      time: Date.now(),
      showMessage: '',
      badge: '',
      showicon: true,
      isicon: false,
      isactive: 'online',
      isSelected: false,
      chatHistory: []
    };

    if (this.contactChats.length === 0) {
      this.createAndLoadChatRoom();
    } else if (this.contactChats.length !== 0) {
      let chatExists = false;
      for (let i = 0; i < this.contactChats.length; i++) {
        const room = this.contactChats[i].name;
        if (room === roomName) {
          chatExists = true;
          this.chatId = this.contactChats[i].id;
          break;
        }
      }
      if (!chatExists) {
        this.createAndLoadChatRoom();
      } else {
        // subscribe
        this.loadChatRoom(this.chatId);
        this.showChatInProgress = false;
        this.userInfo.isSelected = true;
      }
    }
  }

  createAndLoadChatRoom() {
    this.createInProgress = true;
    this.chatService.createChatRoom(this.userInfo).then(chatRoom => {
      this.chatId = chatRoom.id;
      this.loadChatRoom(chatRoom.id);
    });
  }

  setUserImage(chatHistory) {
    for (let i = 0; i < chatHistory.length; i++) {
      if (chatHistory.length > 0) {
        if (i > 0 ) {
          this.prevMsg = chatHistory[i - 1];
        }
        if ( i > 0 && chatHistory[i].uid === this.prevMsg['uid']) {
          continue;
        }
        if (chatHistory[i].uid === this.loggedInUser.uid) {
          chatHistory[i]['userImage'] = this.currentUserImage;
        } else {
          chatHistory[i]['userImage'] = this.senderImage;
        }
      }
    }
  }

  loadChatRoom(chatRoomId) {
    this.chatService.showChat(chatRoomId).subscribe(res => {
      if (chatRoomId === this.chatId) {
        this.setUserImage(res.chatHistory);
        this.displayChat = res['chatHistory'];
        this.chatId = res['chatId'];
      }
      this.showChatInProgress = false;
    });
  }

  showDefaultChat() {
    this.currentUser = this.loggedInUser.uid;
    const roomName = (this.currentUser < this.clickedUser ? this.currentUser + '_' +
      this.clickedUser : this.clickedUser + '_' + this.currentUser);
    for (let j = 0; j < this.contactChats.length; j++) {
      if (this.contactChats[j].name === roomName) {
        if (this.contactChats[j].chatHistory && this.contactChats[j].chatHistory.length > 0) {
          this.displayChat = this.contactChats[j].chatHistory;
          this.setUserImage(this.contactChats[j].chatHistory);
        }
        this.chatId = this.contactChats[j].id;
      }
    }
  }

  showLastMessage() {
    for (let i = 0; i < this.contactList.length; i++) {
      if (this.contactList[i]) {
        for (let j = 0; j < this.contactChats.length; j++) {
          const room = this.contactChats[j].name;
          const index = room.indexOf(this.contactList[i].uid);
          const currentUser = this.loggedInUser.uid;
          const userUid = this.contactList[i].uid;
          const roomName = (currentUser < userUid ? currentUser + '_' +
            userUid : userUid + '_' + currentUser);
          if (index >= 0) {
            if (this.contactChats[j].chatHistory.length > 0 && roomName === room) {
              this.contactList[i]['lastmsg'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].message;
              this.contactList[i]['isActive'] = this.contactChats[j].isactive;
              this.contactList[i]['icon'] = this.contactChats[j].isicon;
              this.contactList[i]['showicon'] = this.contactChats[j].showicon;
              this.contactList[i]['lastmsgTime'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].date;
            }
          }
        }
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
