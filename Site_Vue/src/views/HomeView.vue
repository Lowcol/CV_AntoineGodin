<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="field is-horizontal" style="padding-left: 20px">
        <div class="field-label is-normal">
          <label class="label" for="species">Species</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control" style="min-width: 200px">
              <div class="select is-fullwidth">
                <select id="species" v-model="filtreSpecies">
                  <option></option>
                  <option
                    v-for="s in species"
                    v-bind:key="s.speciesId"
                    v-bind:value="s.speciesId"
                  >
                    {{ s.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal" style="padding-left: 20px">
        <div class="field-label is-normal">
          <label class="label" for="poketypes">Poketypes</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control" style="min-width: 200px">
              <div class="select is-fullwidth">
                <select id="poketypes" v-model="filtrePoketype">
                  <option></option>
                  <option
                    v-for="p in poketypes"
                    v-bind:key="p.poketypeId"
                    v-bind:value="p.poketypeId"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal" style="padding-left: 20px">
        <div class="field-label is-normal">
          <label class="label" for="habitats">Habitat</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control" style="min-width: 200px">
              <div class="select is-fullwidth">
                <select id="habitats" v-model="filtreHabitat">
                  <option></option>
                  <option
                    v-for="h in habitats"
                    v-bind:key="h.habitatId"
                    v-bind:value="h.habitatId"
                  >
                    {{ h.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="row columns is-multiline is-mobile">
      <div
        v-for="p in pokemonsFiltres"
        v-bind:key="p.pokemonId"
        class="column is-3-desktop is-4-tablet is-6-mobile"
      >
      <router-link v-bind:to="{ name: 'details', params: {id: p.pokemonId }}">
        <div
          class="card has-text-black"
          v-bind:style="{ backgroundColor: p.color }"
        >
          <div class="card-image">
            <figure class="image is-square">
              <img v-bind:alt="p.name" v-bind:src="p.imgURL" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-3 has-text-centered" style="color: black">
                {{ p.name }}
              </p>
              <div class="mb-0">
                <span class="has-text-weight-bold">Species: </span>
                <span>{{ p.species.name }}</span>
              </div>
              <div class="mb-0">
                <span class="has-text-weight-bold">Habitat: </span>
                <span>{{ p.habitat.name }}</span>
              </div>
              <div class="mb-0">
                <span class="has-text-weight-bold">PokeTypes: </span>
                <span>{{ p.poketypes.map((e) => e.name).join(", ") }}</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import { svrURL } from '@/constants';

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'HomeView',
    data() {
        return {
            pokemons: [],
            poketypes: [],
            habitats: [],
            species: [],
            filtrePoketype: '',
            filtreSpecies: '',
            filtreHabitat: '',
        };
    },
    computed: {
        pokemonsFiltres() {
            let pokemonsFiltres = this.pokemons;
            if (this.filtreHabitat !== '') {
                pokemonsFiltres = pokemonsFiltres.filter(
                    (p) => p.habitat.habitatId === parseInt(this.filtreHabitat, 10),
                );
            }
            if (this.filtrePoketype !== '') {
                pokemonsFiltres = pokemonsFiltres.filter(
                    (p) => p.poketypes.filter(
                        (ty) => ty.poketypeId === parseInt(this.filtrePoketype, 10),
                    ).length > 0,
                );
            }
            if (this.filtreSpecies !== '') {
                pokemonsFiltres = pokemonsFiltres.filter(
                    (p) => p.species.speciesId === parseInt(this.filtreSpecies, 10),
                );
            }
            return pokemonsFiltres;
        },
    },
    // la fonction mounted sera exécutée au chargement de la vue
    mounted() {
        this.getPokemons();
        this.getHabitats();
        this.getPoketypes();
        this.getSpecies();
    },
    // methods contient les méthodes (fonctions) propres à la vue
    methods: {
        async getPokemons() {
            const rep = await fetch(`${svrURL}/pokemons`);
            if (rep.ok) {
                this.pokemons = await rep.json();
            }
        },
        async getSpecies() {
            const rep = await fetch(`${svrURL}/species`);
            if (rep.ok) {
                this.species = await rep.json();
            }
        },
        async getHabitats() {
            const rep = await fetch(`${svrURL}/habitats`);
            if (rep.ok) {
                this.habitats = await rep.json();
            }
        },
        async getPoketypes() {
            const rep = await fetch(`${svrURL}/poketypes`);
            if (rep.ok) {
                this.poketypes = await rep.json();
            }
        },
    },
};
</script>

<style scoped>
</style>
