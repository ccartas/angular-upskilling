import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { validateFormGroup } from './../../common/utils/utils';
import { NotificationMessage } from 'src/app/common/notification/notification-message';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { ExperienceService } from 'src/app/common/experience.service';
import { UserDataService } from 'src/app/common/user-data.service';
import { LocalStorageService } from 'src/app/common/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output() onUserLoggedIn: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private notificationService: NotificationService,
              private experienceService: ExperienceService,
              private userDataService: UserDataService,
              private localStorageService: LocalStorageService) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ]
      })
    })
  }

  ngOnInit(): void {
  }

  loginUser(event) {
    const invalidFields = validateFormGroup(this.loginForm);
    if(invalidFields.length) {
      const notificationBody = invalidFields.map(field => field[0]).join(", ");
      const notificationMessage: NotificationMessage = {
        title: 'ERROR',
        body: notificationBody,
        type: 'ERR',
        display: true
      }
      this.notificationService.showNotification(notificationMessage);
    } else {
      
      this.experienceService.loginUser(this.loginForm.value['username'], this.loginForm.value['password']).subscribe(userData => {
        this.localStorageService.storeData('userData', userData).then(result => {
          const notificationMessage: NotificationMessage = {
            title: 'SUCCESS',
            body: `Welcome ${userData.firstName} ${userData.lastName}!`,
            type: 'SUCC',
            display: true
          };
          this.notificationService.showNotification(notificationMessage);
          this.userDataService.storeUserData(userData);
          this.onUserLoggedIn.emit(false);
        });
      })
    }
  }
}
