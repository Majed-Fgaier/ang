import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';


const routes : Routes = [

  {path:"products",component:ListeProduitsComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"products/:id",component:ProduitDetailComponent},
  {path:"page not found",component:PageNotFoundComponent},
  {path:"Search",component:ProduitDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})

export class AppRoutingModule { }
