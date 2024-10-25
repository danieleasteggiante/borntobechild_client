<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {GOOGLE_ENDPOINT_OAUTH, GOOGLE_OAUTH_REDIRECT_URI} from "@/config/constant";

@Options({})
export default class Navbar extends Vue {
  loginWithGoogle() {
    const googleAuthUrl = GOOGLE_ENDPOINT_OAUTH + '?' +
      'scope=https://www.googleapis.com/auth/cloud-platform ' +
      'https://www.googleapis.com/auth/userinfo.profile ' +
      'https://www.googleapis.com/auth/userinfo.email&' +
      'include_granted_scopes=true&' +
      'response_type=code&' +
      'access_type=offline&' +
      'redirect_uri=' + GOOGLE_OAUTH_REDIRECT_URI + '&' +
      'client_id='+ process.env.GOOGLE_OAUTH_CLIENT_ID;

    window.open(googleAuthUrl, '_blank', 'width=500,height=600');
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BTBC</a>
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chi-siamo">Chi siamo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Classifiche">Classifiche</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contatti">Contatti</router-link>
          </li>

        </ul>
        <button class="btn btn-primary ms-auto" @click="loginWithGoogle">Login con Google</button>
      </div>
    </div>


  </nav>
</template>

<style scoped>
/* Aggiungi eventuali stili specifici per la barra di navigazione */
</style>
