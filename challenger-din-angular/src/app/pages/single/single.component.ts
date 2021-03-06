import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  IPokemon,
  PokemonService,
} from 'src/app/services/pokemon/pokemon.service';
import { ModalSkillsComponent } from 'src/app/components/modals/modal-skills/modal-skills.component';
import { PokemonStorageService } from 'src/app/services/pokemon-storage/pokemon-storage.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  subscription: Subscription;
  pokemon$: IPokemon;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService,
    private pokemonLocal: PokemonStorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.router.params.subscribe(({ name }) => {
      this.pokemonService.getByName(name).subscribe((pokemon) => {
        this.pokemon$ = pokemon[0];
        this.setInLocalStorage(pokemon[0]);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setInLocalStorage(pokemon: IPokemon) {
    this.pokemonLocal.set(pokemon);
  }

  openDialog(): void {
    this.dialog.open(ModalSkillsComponent);
  }
}
