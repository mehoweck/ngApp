import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ItemInterface } from '../../shared/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Input() newItem: Subject<ItemInterface>;

  myModal;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    console.log('CONTENT:', content);
    this.myModal = this.modalService.open(content);
  }

  sendForm(form: NgForm) {
    if (form.valid) {
      this.newItem.next(form.value);
    } else {
      console.warn('form is not valid!');
    }
    this.myModal.close();
  }


}
