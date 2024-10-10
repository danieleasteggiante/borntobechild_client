<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from "axios";
import {API_URL} from "@/config/constant";
import {useRoute} from "vue-router";

@Options({
})
export default class ElementDetail extends Vue {
  errorMessage = '';
  fetchedData: any[] = [];
  id = '';

  mounted() {
    const route = useRoute();
    this.id = route.fullPath.split('/').pop() as string;
    this.recuperaClassifica();
  }

  async recuperaClassifica() {
    const endpoint = API_URL + 'classifiche/element/' + this.id + '/';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
      console.log(this.fetchedData);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei dati ' + error + ' ' + endpoint;
    }
  }
}
</script>

<template>
  <div class="element-detail-container">
    <div class="element-detail">
      <img :src="this.fetchedData.image" alt="Banner" class="banner" />
      <h1 class="title">{{ this.fetchedData.name }}</h1>
      <p class="body">{{ this.fetchedData.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.element-detail-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  padding-top: 20px; /* Optional: Add some padding from the top */
}

.element-detail {
  text-align: center;
  margin: 20px;
  padding: 20px;
  width: 100%; /* Ensure it takes full width of the container */
}


</style>
