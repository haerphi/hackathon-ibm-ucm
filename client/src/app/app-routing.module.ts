import { QuestionComponent } from './components/question/question.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchresultComponent } from "./components/searchresult/searchresult.component";
import { AccountComponent } from './components/account/account.component';
import { AskComponent } from './components/ask/ask.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchresultComponent
  },
  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "question/:id",
    component: QuestionComponent
  },
  {
    path: "ask",
    component: AskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
