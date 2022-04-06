import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDividerModule} from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';

import { QRCodeModule } from 'angularx-qrcode';


import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { RnItemViewComponent } from './rn-item-view/rn-item-view.component';
import { RnQueryViewComponent } from './rn-query-view/rn-query-view.component';
import { RnLoginViewComponent } from './rn-login-view/rn-login-view.component';
import { RnListViewComponent } from './rn-list-view/rn-list-view.component';
import { RnCalendarViewComponent } from './rn-calendar-view/rn-calendar-view.component';
import { RnViewComponent } from './rn-view/rn-view.component';
import { RnMapViewComponent } from './rn-map-view/rn-map-view.component';
import { RnPanelViewComponent } from './rn-panel-view/rn-panel-view.component';
import { RnBoardViewComponent } from './rn-board-view/rn-board-view.component';
import { RnDocumentViewComponent } from './rn-document-view/rn-document-view.component';
import { RnImageViewComponent } from './rn-image-view/rn-image-view.component';
import { RnVideoViewComponent } from './rn-video-view/rn-video-view.component';
import { RnPageViewComponent } from './rn-page-view/rn-page-view.component';
import { RnDrawingViewComponent } from './rn-drawing-view/rn-drawing-view.component';
import { RnSceneViewComponent } from './rn-scene-view/rn-scene-view.component';
import { RnPropertiesViewComponent } from './rn-properties-view/rn-properties-view.component';
import { RnCardsViewComponent } from './rn-cards-view/rn-cards-view.component';
import { RnTreeViewComponent } from './rn-tree-view/rn-tree-view.component';
import { RnButtonViewComponent } from './rn-button-view/rn-button-view.component';
import { RnLabelViewComponent } from './rn-label-view/rn-label-view.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { LocationComponent } from './location/location.component';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { MatSelectModule } from '@angular/material/select';
import { EditQueryComponent } from './edit-query/edit-query.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CallbackComponent,
    HomeComponent,
    RnItemViewComponent,
    RnQueryViewComponent,
    RnLoginViewComponent,
    RnListViewComponent,
    RnCalendarViewComponent,
    RnViewComponent,
    RnMapViewComponent,
    RnPanelViewComponent,
    RnBoardViewComponent,
    RnDocumentViewComponent,
    RnImageViewComponent,
    RnVideoViewComponent,
    RnPageViewComponent,
    RnDrawingViewComponent,
    RnSceneViewComponent,
    RnPropertiesViewComponent,
    RnCardsViewComponent,
    RnTreeViewComponent,
    RnButtonViewComponent,
    RnLabelViewComponent,
    EditItemComponent,
    CreateItemComponent,
    EditViewComponent,
    LocationComponent,
    ScheduleItemComponent,
    EditQueryComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSliderModule,
    QRCodeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
