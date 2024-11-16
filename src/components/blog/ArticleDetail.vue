<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import axios from "axios";
import {API_URL} from "@/config/constant";
import {useRoute} from "vue-router";
import CommentsContainer from "@/components/comments/CommentsContainer.vue";


@Options({
  components: {CommentsContainer}
})
export default class ArticleDetail extends Vue {
  errorMessage = '';
  id = '';
  fetchedData: any[] = [];
  isDataFetched = false;

  mounted() {
    const route = useRoute();
    this.id = route.fullPath.split('/').pop() as string;
    this.recuperaDettagli();
  }

  async recuperaDettagli() {
    const endpoint = API_URL + 'blog/' + this.id + '/';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
      this.isDataFetched = true;
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei dati ' + error + ' ' + endpoint;
    }
  }

}
</script>

<template>
  <div class="element-detail-container">
    <div class="element-detail">
      <img :src="this.fetchedData.banner" alt="Banner" class="banner"/>
      <h1 class="title">{{ this.fetchedData.title }}</h1>
      <h2 class="title">{{ this.fetchedData.subtitle }}</h2>
      <hr>
      <p>{{this.fetchedData.content}}</p>
      <div v-for="(section, index) in this.fetchedData.sections" :key="section.id" :class="{'section-alternate': index % 2 !== 0}">
        <hr>
        <div class="section-content">
          <img :src="section.image" alt="Banner" class="section-image"/>
          <div class="section-text">
            <h3>{{ section.title }}</h3>
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <CommentsContainer v-if="this.id" :commentType="'blog'" :reference="this.id"  />
  </div>
</template>

<style scoped>
.element-detail-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%; /* Increase the width */
  margin: 0 auto; /* Center the container */
  padding-top: 20px; /* Optional: Add some padding from the top */
}

.element-detail {
  text-align: center;
  width: 100%; /* Ensure it takes full width of the container */
  margin: 20px;
  padding: 20px;
}

.banner {
  width: 100%;
  height: 300px; /* Set a fixed height */
  border-radius: 10px;
  object-fit: cover; /* Crop the image if it is larger */
}

.section-content {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.section-content:nth-child(even) {
  flex-direction: row-reverse;
}

.section-image {
  width: 50%;
  height: 300px; /* Set a fixed height */
  object-fit: cover; /* Crop the image if it is larger */
  border-radius: 10px;
}

.section-text {
  width: 50%;
  padding: 20px;
  text-align: left;
}

.title {
  font-size: 2em;
  margin: 20px 0;
  color: #333;
}

.body {
  font-size: 1.2em;
  color: #666;
}
</style>
