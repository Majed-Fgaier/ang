import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';
import { ProduitService } from '../service/service.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css'],
})
export class ListeProduitsComponent implements OnInit {
  constructor(private service:ProduitService) {}
  
  filteredProducts?: Produit[];
  productsF?:Produit[];
  products?:Produit[];
  

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
    this.products=data;
    this.filteredProducts=this.products;
  
  });
}

  nomb: string = 'hidden';

  searchText?: string = '';

  Search() {
    this.filteredProducts = this.products?.filter((res) => {
      return res.nom
        .toLocaleLowerCase()
        .match('' + this.searchText?.toLocaleLowerCase());
    });
  }


  seen() {
    if (this.nomb == 'hidden') this.nomb = 'seen';
    else this.nomb = 'hidden';
  }

  getColor(x: any) {
    if (x == 0) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
