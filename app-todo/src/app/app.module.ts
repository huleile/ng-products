import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      ListComponent,
      ItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [TodoService, ApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
