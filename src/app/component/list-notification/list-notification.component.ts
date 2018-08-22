import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ListNotificationsService } from '../../services/list-notifications.service';


declare var $: any;

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.css']
})
export class ListNotificationComponent implements OnInit {
  public cantShowItem: any
  public sumCantItem: any;
  public showMoreItemOption: boolean;
  public showItemMessage : boolean
  public notifications = [
    {
      title: 'Retiro / Compra Tarjeta M.N',
      description: '395 Monto $500.00 el 17/08/18 10:25:00 PM. Auto 12066...',
      date: '17. 08. 2018, 15:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '13. 08. 2018, 11:00'
    },
    {
      title: 'Deposito / Cuenta  M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '11. 08. 2018, 11:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '08. 08. 2018, 11:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '08. 08. 2018, 11:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '08. 08. 2018, 11:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '13. 08. 2018, 11:00'
    },
    {
      title: 'Deposito / Cuenta  M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '11. 08. 2018, 11:00'
    },
    {
      title: 'Retiro / Compra Cheques M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '13. 08. 2018, 11:00'
    },
    {
      title: 'Deposito / Cuenta  M.N',
      description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date: '11. 08. 2018, 11:00'
    }
  ]
  constructor(public _notificationService : ListNotificationsService) {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
  ngOnInit() {
    this.showMoreItemOption = false
    this.showItemMessage = false
    this.sumCantItem = 0;
    this.cantShowItem = 4;
    this.getAllNotificatons()
  }
  getAllNotificatons() {
    this._notificationService.getNotifications().subscribe(notification =>{
      let not = notification
      console.log(not);
    })
    if (this.notifications) {
      this.showMoreItemOption = true
      this.showItemMessage = true;
    }else{

    }
    console.log(this.notifications);
    
  }
  deleteNotification() {
    Swal({
      title: '¿Estas seguro?',
      text: 'Esta notificación ya no se mostrará!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log('si lo borro');
        
      }
    })
  }
  archiverNotification(){
    Swal(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  showMore(cant) {
    this.sumCantItem = this.sumCantItem + cant
    this.cantShowItem = this.sumCantItem
    if (this.cantShowItem >= this.notifications.length) {
      this.showMoreItemOption = false
    }
  }
}
