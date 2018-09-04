import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ListNotificationsService } from '../../services/list-notifications.service';
import { BackListService } from '../../services/back-list.service';


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
  public showItemMessage: boolean
  public notifications: any
  public idEndNotification: any
  // public notifications = [
  //   {
  //     title: 'Retiro / Compra Tarjeta M.N',
  //     description: '395 Monto $500.00 el 17/08/18 10:25:00 PM. Auto 12066...',
  //     date: '12:45 PM',
  //     multimedia: '',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Credito / Beneficios',
  //     description: 'El Crédito Campaña está pensado para hacer frente a las necesidades de...',
  //     date: '09:32 AM',
  //     multimedia: 'https://d3uir0eo9qeeuq.cloudfront.net/blog/wp-content/uploads/2014/11/comptesuperrendibilitat.jpg',
  //     viewed: 'false'
  //   },
  //   {
  //     title: 'Deposito / Cuenta  M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '21/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Retiro / Compra Cheques M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: 'https://www.marketingdirecto.com/wp-content/uploads/2018/03/Santader-Seguros-51.png',
  //     viewed: 'false'
  //   },
  //   {
  //     title: 'Retiro / Compra Cheques M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'false'
  //   },
  //   {
  //     title: 'Retiro / Compra Cheques M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: 'http://www.tucapital.es/wp-files/2016/cuenta-mini-santander.jpg',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Retiro / Compra Cheques M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Deposito / Cuenta  M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Retiro / Compra Cheques M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'true'
  //   },
  //   {
  //     title: 'Deposito / Cuenta  M.N',
  //     description: '499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
  //     date: '10/08/18, 9:03 AM',
  //     multimedia: '',
  //     viewed: 'true'
  //   }
  // ]
  constructor(public _notificationService: ListNotificationsService, public _backList: BackListService) {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    $(document).ready(function () {
      $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 600) {
          $("#card-principal").removeClass("card");
        }
        if (viewportWidth > 601) {
          $("#card-principal").addClass("card")
        }
      });
    })

  }
  ngOnInit() {
    this.showMoreItemOption = false
    this.showItemMessage = false
    this.sumCantItem = 0;
    this.cantShowItem = 9;
    this.notifications = []
    this.getAllNotificatons()
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })


  }
  getAllNotificatons() {
    this.notifications = [];
    this._notificationService.getNotifications().subscribe(notification => {
      notification.forEach(filter => {
        if(filter.action_notification !== 'deleted'){
          this.notifications.push(filter)
        }
      });
      // this.notifications = notification
      console.log(this.notifications);
      
      if (this.notifications.length > 0) {

        this.showMoreItemOption = true
        this.showItemMessage = true;
        var getUltimo = this.notifications[this.notifications.length -1]
        this.idEndNotification = getUltimo.id
        console.log(this.idEndNotification);
        
      }
    })
  }

  deleteNotification(notification) {
    Swal({
      title: '¿Estas seguro?',
      text: 'Esta notificación ya no se mostrará!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log(notification);
        notification.action_notification = 'deleted'
        this._notificationService.deleteNotification(notification).subscribe( deleteNot =>{
          console.log('se borro la notificacion');
          
          console.log(deleteNot);
          
        })
        this.getAllNotificatons()
      }
    })
  }
  archiverNotification() {
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

  updateNotificationView(dataNotification) {
    console.log(dataNotification);
    dataNotification.status = true
    this._notificationService.updateViewNotification(dataNotification).subscribe(response => {
      console.log(response);

    })
  }
}
