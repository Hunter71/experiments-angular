import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertsComponent } from './alerts/alerts.component';
import { AppComponent } from './app.component';
import { AuthnComponent } from './authn/authn.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SecretPasswordComponent } from './secret-password/secret-password.component';

@NgModule({
  declarations: [
    AlertsComponent,
    AppComponent,
    AuthnComponent,
    SecretPasswordComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
