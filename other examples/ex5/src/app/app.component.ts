import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ex5';
  
  asynchronousProducer: Observable<any>;
  constructor(private appService: AppService) {
    
  }
  ngOnInit() {
    this.doSomethingWithPromise();
    /* this.doSomethingWithObservable().subscribe(result => {
      console.log(result);
    }); */
  }

  doSomethingWithPromise() {
    return new Promise((resolve, reject) => {
      console.log('something')
    })
  }

  doSomethingWithObservable() {
    return Observable.create(observer => {
      console.log('something')
      observer.next('Some random value');
      observer.error("da")
      observer.next('Some other value');
      
      observer.complete();
      observer.next('Some other value');
    });
  }
}
