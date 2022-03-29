<template>
  <div v-bind:key="pokemons.pokemonId" class="section has-text-centered">
    <div id="boutonsAjouterSupprimer">
      <button :class="ajouter" @click="ajouterFavoris()">
        Ajouter aux favoris
      </button>
      <button :class="remove" @click="removeFavoris()">
        Supprimer des favoris
      </button>
    </div>
    <ul>
      <li>
        <strong>Name:</strong>
        <p style="display: inline" id="name">{{ pokemons.name }}</p>
      </li>
      <li>
        <strong>HP:</strong>
        <p style="display: inline" id="HP">{{ pokemons.hp }}</p>
      </li>
      <li>
        <strong>Attack:</strong>
        <p style="display: inline" id="attack">{{ pokemons.attack }}</p>
      </li>
      <li>
        <strong>Defense:</strong>
        <p style="display: inline" id="defense">{{ pokemons.defense }}</p>
      </li>
      <li>
        <strong>Height:</strong>
        <p style="display: inline" id="height">{{ pokemons.height }}</p>
      </li>
      <li>
        <strong>SpecialAttack:</strong>
        <p style="display: inline" id="specialattack">
          {{ pokemons.specialattack }}
        </p>
      </li>
      <li>
        <strong>SpecialDefense:</strong>
        <p style="display: inline" id="specialdefense">
          {{ pokemons.specialdefense }}
        </p>
      </li>
      <li>
        <strong>Speed:</strong>
        <p style="display: inline" id="speed">{{ pokemons.speed }}</p>
      </li>
      <li>
        <strong>Weight:</strong>
        <p style="display: inline" id="weight">{{ pokemons.weight }}</p>
      </li>
      <li>
        <strong></strong>
        <img
          id="imgURL"
          v-bind:src="this.pokemons.imgURL"
          v-bind:alt="this.pokemons.name"
        />
      </li>
      <li>
        <strong>CryURL:</strong>
        <audio
          id="audioUrl"
          controls="controls"
          preload="metadata"
          v-bind:src="this.pokemons.cryURL"
        />
      </li>
      <li>
        <strong>Habitat.name:</strong>
        <p style="display: inline" id="habitatName">{{pokemonhabitats }}</p>
      </li>
      <li>
        <strong>Species.name:</strong>
        <p style="display: inline" id="speciesName">{{pokemonspecies}}</p>
      </li>
      <li>
        <strong>Evolution.name:</strong>
        <p style="display: inline" id="evolutionName">{{evoname}}</p>
      </li>
      <li>
        <strong></strong>
        <img id="imgURLevolution" v-bind:src="this.evoimg" alt="" />
      </li>
      <li>
        <strong>Evolution.Evolution.name:</strong>
        <p style="display: inline" id="evolutionEvolutionName">{{evoevoname}}</p>
      </li>
      <li>
        <strong></strong>
        <img id="imgURLevolutionevolution" v-bind:src="this.evoevoimg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'DetailView',
    data() {
        return {
            pokemons: [],
            evo: [],
            evoevo: [],
            counter: 0,
            pokemonhabitats: '',
            pokemonspecies: '',
            evoname: '',
            evoimg: '',
            evoevoname: '',
            evoevoimg: '',
            ajouter: 'button is-primary is-hidden',
            remove: 'button is-danger is-hidden',
            id: this.$route.params.id,
        };
    },

    mounted() {
        this.getPokemons();
        const token = sessionStorage.getItem('token');
        this.verificationconnection(token);
    },

    methods: {
    // infoPokemon(pokemons) {
    //   const imgURL = document.getElementById("imgURL");
    //   imgURL.src = pokemons.imgURL;
    //   const CryURL = document.getElementById("audioUrl");
    //   CryURL.src = pokemons.cryURL;
    //   if(pokemons.evolution.name !== null){
    //     const evolutionName = document.getElementById("evolutionName");
    //     evolutionName.innerText = pokemons.evolution.name;
    //     const imgURLevolution = document.getElementById("imgURLevolution");
    //     imgURLevolution.src = pokemons.evolution.imgURL;
    //   }
    //   if(pokemons.evolution.evolution.name !== null){
    //     const evolutionEvolutionName = document.getElementById("evolutionEvolutionName");
    //     evolutionEvolutionName.innerText = pokemons.evolution.evolution.name;
    //     const imgURLevolution = document.getElementById("imgURLevolutionevolution");
    //     imgURLevolution.src = pokemons.evolution.imgURL;
    //   }
    // },

        async getPokemons() {
            const svrURL = 'https://pokemonsapi.herokuapp.com';

            const rep = await fetch(`${svrURL}/pokemon?pokemonId=${this.id}`, {
                method: 'GET',
            });
            if (rep.ok) {
                this.pokemons = await rep.json();
                this.pokemonhabitats = this.pokemons.habitat.name;
                this.pokemonspecies = this.pokemons.species.name;
                if (this.pokemons.evolution.pokemonId) {
                    const evoId = this.pokemons.evolution.pokemonId;
                    console.log(evoId);
                    this.evolution(evoId);
                } if (this.pokemons.evolution.evolution.pokemonId) {
                    const evoId2 = this.pokemons.evolution.evolution.pokemonId;
                    console.log(evoId2);
                    this.evolution(evoId2);
                }
                // console.log(this.pokemons.species.name);
            } else {
                console.log('erreur');
            }
        },
        async evolution(id) {
            const svrURL = 'https://pokemonsapi.herokuapp.com';

            const rep = await fetch(`${svrURL}/pokemon?pokemonId=${id}`, {
                method: 'GET',
            });
            if (rep.ok && this.counter === 1) {
                this.evoevo = await rep.json();
                console.log(this.evoevo);
                this.evoevoname = this.evoevo.name;
                this.evoevoimg = this.evoevo.imgURL;
            } else if (rep.ok) {
                this.evo = await rep.json();
                console.log('yo');
                this.evoname = this.evo.name;
                this.evoimg = this.evo.imgURL;
                this.counter += 1;
            }
        },

        async ajouterFavoris() {
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';
            const token = sessionStorage.getItem('token');

            const bearerToken = `Bearer ${token}`;
            const resultat = await fetch(
                `${pokemonapiURL}/favorite?pokemonId=${this.id}`,
                {
                    method: 'POST',
                    headers: {
                        authorization: bearerToken,
                    },
                },
            );

            if (resultat.ok) {
                alert('le pokemon a bien été ajouter a vos favori');
                this.ajouter = 'button is-primary is-hidden';
                this.remove = 'button is-danger';
            } else {
                console.log(resultat.statusText);
            }
        },

        async removeFavoris() {
            const token = sessionStorage.getItem('token');
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';
            const bearerToken = `Bearer ${token}`;

            const resultat = await fetch(
                `${pokemonapiURL}/favorite?pokemonId=${this.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        authorization: bearerToken,
                    },
                },
            );

            if (resultat.ok) {
                alert('le pokemon a bien été supprimer de vos favori');
                this.ajouter = 'button is-primary';
                this.remove = 'button is-danger is-hidden';
            } else {
                console.log(resultat.statusText);
            }
        },

        async verifier(token) {
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';
            const bearerToken = `Bearer ${token}`;

            const resultat = await fetch(
                `${pokemonapiURL}/favorite?pokemonId=${this.id}`,
                {
                    method: 'GET',
                    headers: {
                        authorization: bearerToken,
                    },
                },
            );

            if (resultat.ok) {
                const data = await resultat.json();
                console.log(data);
                if (data.isFavorite === true) {
                    this.ajouter = 'button is-primary is-hidden';
                    this.remove = 'button is-danger';
                } else {
                    this.ajouter = 'button is-primary';
                    this.remove = 'button is-danger is-hidden';
                }
            } else {
                console.log(resultat.statusText);
            }
        },

        async verificationconnection(token) {
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';
            const bearerToken = `Bearer ${token}`;
            const response = await fetch(`${pokemonapiURL}/pokemons`, {
                method: 'GET',
                headers: {
                    authorization: bearerToken,
                },
            });
            if (response.ok) {
                this.verifier(token);
            } else {
                console.error("une erreur s'est produite ");
            }
        },
    },
};
</script>

<style>
</style>
