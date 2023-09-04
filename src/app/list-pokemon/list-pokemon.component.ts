import { Component,OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private route:Router){}
  
  ngOnInit() {
    console.table(this.pokemonList);
     }
  goToPokemon(pokemon:Pokemon){
   this.route.navigate(['/pokemon', pokemon.id])
  }
}
