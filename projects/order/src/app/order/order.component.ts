import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  anrede;
  data;
  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    console.log('order init');
    console.log('this.messageService.getData()', this.messageService.getData());
    this.data = this.messageService.getData();
  }

  onSaveClick() {
    console.log('test a click');
    console.log(this.data);
  }

}

