import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.css']
})
export class ListNotificationComponent implements OnInit {
  
  public notifications=[
    {
      title:'Retiro / Compra Tarjeta M.N',
      description:'395 Monto $500.00 el 17/08/18 10:25:00 PM. Auto 12066...',
      date:'17. 08. 2018, 15:00'
    },
    {
      title:'Retiro / Compra Cheques M.N',
      description:'499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date:'13. 08. 2018, 11:00'
    },
    {
      title:'Deposito / Cuenta  M.N',
      description:'499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date:'11. 08. 2018, 11:00'
    },
    {
      title:'Retiro / Compra Cheques M.N',
      description:'499 Monto $3,300.00 el 17/08/18 09:28:00 AM Auto 88995...',
      date:'08. 08. 2018, 11:00'
    },
  ]

  constructor() {

   }

  ngOnInit() {
    this.getAllNotificatons()
  }

  getAllNotificatons(){
    console.log(this.notifications);
    
  }

}
