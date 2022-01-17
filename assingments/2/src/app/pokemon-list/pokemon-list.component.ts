import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokeNames = ['bulbasaur', 'squirtle', 'charmander'];
  pokeList: any[] = [];
  chosenPoke: any;
  isPokeChosen = false;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeNames.forEach((poke) => {
      this.pokeService.getPoke(poke).subscribe((response: any) => {
        this.pokeList.push(response);
      });
    });
  }

  selectedPoke(poke: any) {
    if (confirm('Are you sure you want to select the chosen pokemon as your pokemon?')) {
      this.chosenPoke = poke;
      this.isPokeChosen = true;
    }
  }

  back() {
    this.chosenPoke = [];
    this.isPokeChosen = false;
  }

}
