import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../modele/produit';
@Injectable({
providedIn: 'root'
})
export class ProduitService {
host="http://localhost:8080/products/"
constructor(private client:HttpClient) { }
public getProducts():Observable<Produit[]>{
return this.client.get<Produit[]>(this.host);
}
public getProductById(id: any):Observable<Produit>
{
return this.client.get<Produit>(this.host+id);
}
public addProduct(produit:Produit):Observable<void>
{
return this.client.post<void>(this.host,produit);
}
}
