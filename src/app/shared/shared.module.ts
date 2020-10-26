import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
