import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ex7';

  ngOnInit() {
    this.doSomethingWithPromise().then(result => {
      console.log('Promise', result);
    }).catch(error => {
      console.log(error);
    });

    this.doSomethingWithObservable();
  }

  doSomethingWithPromise() {
    return new Promise((resolve, reject) => {
      console.log('some value');
      let counter = 0;
      setInterval(() => {
        resolve(counter++);
      }, 1000);
    });
  }

  doSomethingWithObservable() {
    return Observable.create(observer => {
      console.log('some value from observable');
      let counter = 0;
      setInterval(() => {
        observer.next(counter++);
      }, 1000);
    });
  }
}
