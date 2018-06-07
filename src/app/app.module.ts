import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PatientManagerPage } from '../pages/patient-manager/patient-manager';
import { TherapistSelectorPage } from '../pages/therapist-selector/therapist-selector';
import { TherapistManagerPage } from '../pages/therapist-manager/therapist-manager';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PatientManagerPage,
    TherapistSelectorPage,
    TherapistManagerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PatientManagerPage,
    TherapistSelectorPage,
    TherapistManagerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
