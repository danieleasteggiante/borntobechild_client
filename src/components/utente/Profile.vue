<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {getCookie} from "@/components/utils/CookieUtils";

@Options({})
export default class Profile extends Vue {
  userInfo = {};

  mounted() {
    console.log('Profile mounted');
    this.userInfo = getCookie('user_info');
  }
}
</script>

<template>
  <div class="profile-container">
    <div v-if="userInfo" class="profile-card">
      <img :src="userInfo.avatar" alt="Avatar" class="avatar"/>
      <h1 v-if="userInfo">{{ userInfo.is_new === 'True' ? 'Benvenuto' : 'Bentornato' }}<br>
        {{ userInfo.name }}</h1>
      <p class="email">{{ userInfo.email }}</p>
    </div>
    <div v-else class="spinner"></div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.profile-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.email {
  color: #888;
  margin-bottom: 20px;
}

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
