import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';
import { FontAwesomeModuleWrapper  } from './app.font-awesome.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModuleWrapper,
    FormsModule

  ],
  providers: [
    provideHttpClient(withFetch()) ,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
