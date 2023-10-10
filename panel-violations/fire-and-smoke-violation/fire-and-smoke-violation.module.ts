// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxDaterangepickerMd} from "ngx-daterangepicker-material";
import { LightboxModule } from "ngx-lightbox";
import { ToastrModule } from "ngx-toastr";
import { alertComponent } from "src/app/common/alert.component";
import { CommonModules } from "src/app/common/common.module";
import { ServerService } from "src/app/Services/server.service";

import { TreeSelectModule } from 'primeng/treeselect';
import { FireAndSmokeViolationComponent } from './fire-and-smoke-violation.component';
import { DaterangepickerComponent } from 'src/app/daterangepicker/daterangepicker.component';

const routes:Routes=[{path:'',component:FireAndSmokeViolationComponent}]
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [FireAndSmokeViolationComponent,],
  imports: [
    CommonModules,
    TreeSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
     NgxDaterangepickerMd.forRoot({}),
    RouterModule.forChild(routes),
    ToastrModule.forRoot({
      timeOut: 5000,
      toastComponent: alertComponent,
      progressBar: true,
      newestOnTop: true,
    }),
    FontAwesomeModule,
    
   
    ],

    providers:[ServerService],
    // entryComponents:[alertComponent],

  exports:[RouterModule]

})
export class FireAndSmokeViolationModule { }