import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { ProduitService } from '../service/service.service';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  
  products?:Produit;
    constructor( private ar : ActivatedRoute , private router:Router ,private service:ProduitService ) { }
  
  ngOnInit() {
    
    let id:number
    this.ar.paramMap.subscribe((params:Params)=>{
      id=+params.get('id')
      this.service.getProductById(id).subscribe(data=>{
        this.produit=data;
        console.log (this.produit.nom)
        /*this.id=this.ar.snapshot.params.id;
        this.id=this.ar.paramMap.subscribe((params)=>{
          this.id=params.get('id');
          this.products?.forEach(x=>{if(x.id==this.id){this.produit=x}})
        });*/
      })
      
  } ); 
}
  
 /* products?: Produit[] = [
    {
      id: 1,
      nom: 'Asus Rog Strix Hero III',
      prix: 1650,
      quantite: 100,
      urlIMG: 'assets/HeroIII.jpg',
    },
    {
      id: 2,
      nom: 'Asus Rog Strix Scar III',
      prix: 1950,
      quantite: 0,
      urlIMG: 'assets/ScarIII.jpg',
    },
    {
      id: 3,
      nom: 'MSI GE66 Raider ',
      prix: 1850,
      quantite: 900,
      urlIMG: 'assets/MSI1.jpg',
    },
    {
      id: 4,
      nom: 'Lenovo Legion 7 ',
      prix: 1500,
      quantite: 125,
      urlIMG: 'assets/Legion7.png',
    },
    {
      id: 5,
      nom: 'Razer Blade 15 ',
      prix: 2000,
      quantite: 35,
      urlIMG: 'assets/Razer1.png',
    },
    {
      id: 6,
      nom: 'MSI GF63 ',
      prix: 1000,
      quantite: 85,
      urlIMG: 'assets/MSI2.png',
    },
  ];*/
  
  id : any ;
  produit!:Produit;
  
  
  retour() {
    this.router.navigate(['/products'])
  }  
}  


function retour() {
  throw new Error('Function not implemented.');
}


    /*//this.nom=this.ar.snapshot.params.nom;
    //this.prix=this.ar.snapshot.params.prix;
    //this.quantite=this.ar.snapshot.params.quantite;
    //this.id=+this.ar.snapshot.params.get('id')
    //this.id=+this.products.find(x=>x.id==this.id)
    
    //this.ar.paramMap.subscribe((params:Params)=>
    //{
      //this.id=+params.get("id")
      //console.log(" " + this.id + " ");
      //this.produit=this.products.find(x=>x.id==this.id)
    //});*/      

    //this.produit=this.products?.find(x=>x.id==this.id)