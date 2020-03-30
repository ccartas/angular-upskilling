import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  storeData(key: string, data: any) {
    return new Promise((resolve, reject) => {
      if(typeof data !== 'object') {
        localStorage.setItem(key, data);
      } else {
        localStorage.setItem(key, JSON.stringify(data));
      }
      resolve(true);
    })
  }

  getData(key: string) {
    return new Promise((resolve, reject) => {
      const data = localStorage.getItem(key);
      try {
        const objectData = JSON.parse(data);
        resolve(objectData);
      } catch(err) {
        resolve(data);
      }
    })
  }

  clearStore() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve(true);
      } catch(err) {
        reject(err);
      }
    })
  }
}
