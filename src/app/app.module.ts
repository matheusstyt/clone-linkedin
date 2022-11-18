import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { Switch2Component } from './switch2/switch2.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    Switch2Component,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DragDropModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
