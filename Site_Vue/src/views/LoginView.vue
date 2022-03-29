<template>
  <div class="section">
    <div class="content">
      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control has-icons-left">
          <input
            id="email"
            type="email"
            placeholder="e1234567@site.com"
            class="input"
            autocomplete="email"
            v-model="email"
            required
          />
          <span class="icon is-small is-left"
            ><i class="fa fa-envelope"></i
          ></span>
        </div>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label>
        <div class="control has-icons-left">
          <input
            id="password"
            type="password"
            placeholder="*******"
            class="input"
            autocomplete="password"
            required
            v-model="password"
          />
          <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button
            class="button is-success mr-2"
            v-on:click="connexion()"
          >
            Connexion
          </button>
          <button
            class="button is-danger"
            v-on:click="annuler()"
          >
          Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        annuler() {
            this.$router.push({ name: 'home' });
            window.location.reload();
        },

        async connexion() {
            const pokemonapiURL = 'https://pokemonsapi.herokuapp.com';

            const body = {
                email: this.email,
                password: this.password,
            };

            const response = await fetch(`${pokemonapiURL}/auth/token`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`Le jeton d'authentication: ${data.token}`);
                sessionStorage.setItem('token', data.token);
                this.$router.push({ name: 'favorite' });
            } else {
                console.error("une erreur s'est produite ");
            }
        },
    },
};
</script>

<style>
</style>
