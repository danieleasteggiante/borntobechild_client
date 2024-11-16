<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {API_URL} from "@/config/constant";
import {setCookie} from "@/components/utils/CookieUtils";

@Options({})
export default class GoogleCallback extends Vue {
  userInfo: any = {};

  created() {
    const fullPath = window.location.href;
    const params = new URLSearchParams(fullPath.split('?')[1]);
    const code_token = params.get('code');
    this.sentTokenToBackend(code_token);
    if (!code_token) {
      alert('Nessun token di accesso trovato nell\'URL');
      return;
    }
  }

  sendMessage(data: any) {
    if (!window.opener) {
      console.error('Nessuna finestra aperta');
      return;
    }
    window.opener.postMessage(data, "http://localhost:8080");
  }


  sentTokenToBackend(accessToken: string) {
    console.log('Invio il token al backend');
    fetch(API_URL + 'auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "code": accessToken,
      }),
    }).then(response => {
      if (!response.ok)
        throw new Error('Errore nella risposta del server');
      return response.json();
    }).then(data => {
      this.userInfo = data;
      this.sendMessage(data)
      window.close();
    }).catch(error => {
      console.error('Errore:', error);
    });
  }
}
</script>

<template>
  <div>
    <h1>Login Result</h1>
    <div v-if="!userInfo" class="spinner"></div>
    <p v-if="userInfo">{{ userInfo.is_new === 'True' ? 'Benvenuto' : 'Bentornato' }}
      {{ userInfo.name }}</p>
    <p v-if="userInfo">Email: {{ userInfo.email }}</p>
  </div>
</template>

<style scoped>

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
