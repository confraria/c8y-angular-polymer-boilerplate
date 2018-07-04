import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
