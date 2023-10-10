import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnDestroy, OnInit, Query, ViewChild, ViewChildren } from '@angular/core';
import { ServerService } from 'src/app/Services/server.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, startWith, Subscribable, Subscription, switchMap } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr'
import { ModalDismissReasons, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import moment, { Moment } from 'moment';
import dayjs from 'dayjs/esm';
// import { DaterangepickerComponent } from 'src/app/daterangepicker/daterangepicker.component';
import { CommonModules } from 'src/app/common/common.module';
import { DaterangepickerComponent } from 'src/app/daterangepicker/daterangepicker.component';






// export interface violation {
//   si_no?: string
// }



@Component({
  selector: 'app-fire-and-smoke-violation',
  templateUrl: './fire-and-smoke-violation.component.html',
  styleUrls: ['./fire-and-smoke-violation.component.css']
})
export class FireAndSmokeViolationComponent extends DaterangepickerComponent  {

  // @Input() inputdata:() =>void;

  selectedCameraId: string | null = null
  selectedItems: any
  isdatewise: boolean = false
  page: number = 1
  // selected = null;
  // startdate:number
  // enddate:number

  selected : {start:any, end:any } ; 
  // socket:any;

  //  ngOnDestroy(): void {
  //    throw new Error('Method not implemented.');
  //  }

  // name :{
  //   firstname :string,
  //   lastname: string,
  //   age:number
  // }={firstname:'abc',lastname:'xyz',age:0};




  ranges: any = {
    'Today': [ dayjs().hour(0).minute(0).second(0), dayjs()],
    'Yesterday': [dayjs().subtract(1, 'days').hour(0).minute(0).second(0), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(6, 'days').hour(0).minute(0).second(0), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days').hour(0).minute(0).second(0), dayjs()],
    'This Month': [dayjs().startOf('month').hour(0).minute(0).second(0), dayjs().endOf('month')],
    'Last Month': [dayjs().subtract(1, 'month').startOf('month').hour(0).minute(0).second(0), dayjs().subtract(1, 'month').endOf('month')]
  }

  // selectedMoments: { startDate: Moment, endDate: Moment }={ startDate:null,endDate:null};
 
  constructor(private Router: Router,private webServer: ServerService){
    super();

    
  }


  // selectedMoments: { startDate: Moment, endDate: Moment }

  // @ViewChildren(DaterangepickerDirective) pickerDirective: any;
  // editViol: any
// dropdownList: Observable<unknown>|Subscribable<unknown>|Promise<unknown>;

  dropdownList: Observable<any[]> = of([])


  // ngAfterViewInit() {
  //   this.dataread()


  // }

  openDatePicker(event: any) {

    var dateInput = document.getElementById('dateInput')
    dateInput.click()

  }

  onCameraIdSelect(event: any) {
    !this.isdatewise ? this.page = 1 : ''
    this.selectedCameraId = this.selectedItems.data
    console.log(this.selectedItems)
    console.log(event)


  }

 

  //------------Reading the camera details--------------
    //uncomment while you work
    // this.webServer.GetCameraNames().subscribe((data: any) => {
    //   console.log(data)
    //   if (data.success === true) {

    //     data.message.forEach((el: any, i: number) => { this.cameraDetails[i] = { camera_id: el.camera_id, camera_name: el.camera_name } })
    //     console.log(this.cameraDetails)

    //   }
    //   else {

    //   }
    // })
    // var table = document.getElementById('dataTable')
    // table?.classList.add('loading')


  // ngOnDestroy() {
  //   this.modalService.dismissAll()
  //   clearInterval(this.interval)
  //   clearInterval(this.interval2)
  //   this.isalert = false

  //   this.toasterService.clear()

  // } 

 

}


