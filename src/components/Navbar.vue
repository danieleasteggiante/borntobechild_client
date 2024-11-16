<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {GOOGLE_OAUTH_REQUEST} from "@/config/constant";
import {mapMutations} from 'vuex';
import {getCookie, setCookie} from "@/components/utils/CookieUtils";

@Options({
  methods: {
    ...mapMutations(['setIsLogged', 'setAccessToken'])
  }
})
export default class Navbar extends Vue {
  isLogged = false;
  userInfo: any = {};
  setIsLogged!: (payload: boolean) => void;
  setAccessToken!: (payload: string) => void;


  mounted() {
    try {
      this.getUser(getCookie('user_info'));
    } catch (e) {
      console.error('Cookie non presente', e);
    }
  }

  getUser(data: any) {
    this.userInfo = data;
    this.isLogged = this.userInfo['is_logged'];
    console.log('isLogged', this.isLogged);
    this.setIsLogged(this.isLogged);
    this.setAccessToken(this.userInfo['access_token']);
  }

  handleLoginData(event: any) {
    if (event.origin !== "http://localhost:8080" || event.data.type === "webpackClose")
      return;
    console.log('Ricevuto messaggio', event.data);
    setCookie('user_info', event.data);
    console.log('Cookie impostato', getCookie('user_info'));
    this.getUser(getCookie('user_info'));
    this.$router.push('/profile');
  }

  loginWithGoogle() {
    window.open(GOOGLE_OAUTH_REQUEST, '_blank', 'width=500,height=600');
    window.addEventListener('message', this.handleLoginData, false);
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
          <li v-if="isLogged" class="nav-item">
            <router-link class="nav-link" to="/profile">Profilo</router-link>
          </li>
        </ul>
        <button v-if="!isLogged" class="btn btn-primary ms-auto" @click="loginWithGoogle">Login con
          Google
        </button>
      </div>
    </div>


  </nav>
</template>

<style scoped>
/* Aggiungi eventuali stili specifici per la barra di navigazione */
</style>
