import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { MensajeErrorComponent } from './mensaje-error/mensaje-error.component';

// Importa RouterModule para manejar las rutas
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    ResultadoComponent,
    MensajeErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CotizadorComponent },
      { path: 'resultado', component: ResultadoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
