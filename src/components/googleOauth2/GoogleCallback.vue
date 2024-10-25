<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class GoogleCallback extends Vue {

  created() {
    const fullPath = window.location.href;
    const params = new URLSearchParams(fullPath.split('?')[1]);
    const accessToken = params.get('code');
    this.sentTokenToBackend(accessToken);
    if (!accessToken) {
      alert('Nessun token di accesso trovato nell\'URL');
      return;
    }
    console.log('Access Token:', accessToken);
    localStorage.setItem('access_token', accessToken);
  }
  sentTokenToBackend(accessToken: string) {
    fetch('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "code": accessToken,
      }),
    });
    console.log('Invio il token al backend');
  }
}
</script>

<template>
  <div>
    <h1>Login Result</h1>
  </div>
</template>

<style scoped>

</style>
