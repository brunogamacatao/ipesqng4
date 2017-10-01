// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Serviços
import { AutenticacaoService } from './services/autenticacao.service';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './loading/loading.component';
import { EstaAutenticadoDirective } from './directives/esta-autenticado.directive';

// Guards
import { ApenasAutenticadoGuard } from './guards/apenas-autenticado.guard';
import { ApenasAdminGuard } from './guards/apenas-admin.guard';

// Definição das rotas
const rotas: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [ApenasAutenticadoGuard]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaginaNaoEncontradaComponent,
    LoadingComponent,
    EstaAutenticadoDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    AutenticacaoService,
    ApenasAutenticadoGuard,
    ApenasAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
