<template>
  <div class="container">
    <div class="section">
      <div class="row columns is-multiline is-mobile">
        <div
          v-for="p in pokemons"
          v-bind:key="p.pokemonId"
          class="column is-3-desktop is-4-tablet is-6-mobile"        >
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
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>e1234567</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

    data() {
        return {
            pokemons: [],
        };
    },

    mounted() {
        if (localStorage.getItem('reloaded')) {
            localStorage.removeItem('reloaded');
        } else {
            localStorage.setItem('reloaded', '1');
            this.$router.go();
        }
        this.getPokemons();
    },

    methods: {
        async getPokemons() {
            const token = sessionStorage.getItem('token');
            const bearerToken = `Bearer ${token}`;
            const svrURL = 'https://pokemonsapi.herokuapp.com';
            const rep = await fetch(`${svrURL}/favorites`, {
                method: 'GET',
                headers: {
                    authorization: bearerToken,
                },
            });
            if (rep.ok) {
                this.pokemons = await rep.json();
            }
        },
    },
};
</script>

<style>
</style>
