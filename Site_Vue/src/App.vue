<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="buttons">
              <button :class="exercice6" @click="exercice()">Exercice 06</button>
              <button :class="favorites" @click="favoris()">Pokémons Favoris</button>
            </div>
        </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button :class="login" @click="connexion()">Login</button>
              <button :class="logout" @click="deconnexion()">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            login: 'button is-light',
            logout: 'button is-light is-danger is-hidden',
            exercice6: 'button is-light',
            favorites: 'button is-light is-hidden',
            token: '',
        };
    },

    mounted() {
        const t = sessionStorage.getItem('token');
        if (t) {
            this.token = t;
        }
        this.verificationconnection();
    },
    methods: {
        deconnexion() {
            sessionStorage.removeItem('token');
            window.location.reload();
        },

        connexion() {
            this.$router.push({ name: 'login' });
            this.login = 'button is-light is-hidden';
            this.favorites = 'button is-light is-hidden';
            this.exercice6 = 'button is-light is-hidden';
        },

        favoris() {
            this.$router.push({ name: 'favorite' });
        },

        exercice() {
            this.$router.push({ name: 'home' });
        },

        async verificationconnection() {
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';
            const bearerToken = `Bearer ${this.token}`;
            const response = await fetch(`${pokemonapiURL}/pokemons`, {
                method: 'GET',
                headers: {
                    authorization: bearerToken,
                },
            });
            // traiter la réponse
            if (response.ok) {
                if (this.token) {
                    this.login = 'button is-light is-hidden';
                    this.logout = 'button is-light is-danger';
                    this.favorites = 'button is-light';
                } else {
                    this.login = 'button is-light';
                    this.logout = 'button is-light is-danger is-hidden';
                    this.favorites = 'button is-light is-hidden';
                }

                if (window.location === 'http://localhost:8080/favoris' || !this.token) {
                    this.$router.push({ name: 'home' });
                }
            } else {
                console.error("une erreur s'est produite ");
            }
        },
    },

    watch: {
    // Lorsque token change de valeur, stocker dans sessionStorage
        token(newToken) {
            sessionStorage.setItem('token', newToken);
        },
    },
};
</script>

<style>
</style>
