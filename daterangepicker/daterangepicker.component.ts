import { Component } from '@angular/core';
import { FireAndSmokeViolationModule } from '../features/panel-violations/fire-and-smoke-violation/fire-and-smoke-violation.module';
import   dayjs from 'dayjs/esm';

 
@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.css']
})
export class DaterangepickerComponent {

  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  
  


  applyDateRange(){
  //  console.log( 'Selected Date Range:',this.startDate.format('dd/mm/yyyy') ,'to' ,this.endDate.format('dd/mm/yyyy'));
   console.log('daterangepicker is triggerd');

  }
  constructor(){
   
  }


  }

 






