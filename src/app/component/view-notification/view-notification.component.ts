import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListNotificationsService } from '../../services/list-notifications.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {

  public idNotificationSelected : any
  public notification : any;
  constructor(private _route: ActivatedRoute, public _serviceNotification : ListNotificationsService) {
    this.idNotificationSelected = this._route.snapshot.paramMap.get('id')
   }

  ngOnInit() {
    this.notification = []
    console.log(this.idNotificationSelected);
    this.getNotificationById(this.idNotificationSelected)
  }

  getNotificationById(idNot){
    this._serviceNotification.getNotificationById(idNot).subscribe(notification =>{
      console.log(notification);
      this.notification = notification
    })
  }

}
