// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Serviços
import { AutenticacaoService } from './services/autenticacao.service';
import { FormgenService } from './formgen/formgen-service';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoadingComponent } from './loading/loading.component';
import { ProntuarioFormComponent } from './prontuarios/prontuario-form.component';

// Diretivas
import { EstaAutenticadoDirective } from './directives/esta-autenticado.directive';

// Componentes Formgen
import { FormgenComponent } from './formgen/formgen.component';
import { PerguntaComponent } from './formgen/pergunta.component';

// Guards
import { ApenasAutenticadoGuard } from './guards/apenas-autenticado.guard';
import { ApenasAdminGuard } from './guards/apenas-admin.guard';

// Definição das rotas
const rotas: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [ApenasAutenticadoGuard]},
  {path: 'prontuarios', component: ProntuarioFormComponent, canActivate: [ApenasAutenticadoGuard]},
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
    EstaAutenticadoDirective,
    FormgenComponent,
    PerguntaComponent,
    ProntuarioFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    AutenticacaoService,
    ApenasAutenticadoGuard,
    ApenasAdminGuard,
    FormgenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
