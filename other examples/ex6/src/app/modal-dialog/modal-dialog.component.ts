import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() selectedProduct: any = {
    productName: '',
    price: 0
  };
  @Output() toggleModalDialog: EventEmitter<any> = new EventEmitter();
  @ContentChild('myContent') myContent: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log(this.myContent);
    this.myContent.selectedProduct.price = Number.parseInt(this.myContent.selectedProduct.price) + 2000;
  }

  closeModalDialog(event) {
    this.toggleModalDialog.emit(false);
  }

  ngOnDestroy() {
    console.log('Modal destroyed');
  }
}
