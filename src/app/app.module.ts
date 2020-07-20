import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { UserUIComponent } from './user/user-ui/user-ui.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUiComponent } from './admin/admin-ui/admin-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    UserUIComponent,
    AdminComponent,
    AdminUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ DataService,
    UserComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
