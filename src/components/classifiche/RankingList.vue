<script lang="ts">
import ElementoClassifica from "@/components/classifiche/RankingElement.vue";
import {Options, Vue} from "vue-class-component";
import axios from "axios";
import {API_URL} from "@/config/constant";
import {useRoute} from "vue-router";
import RankingElement from "@/components/classifiche/RankingElement.vue";

@Options({
  components: {RankingElement},
})
export default class RankingList extends Vue {
  fetchedData: any[] = [];
  errorMessage = '';
  slug = '';
  comments: any[] = []

  mounted() {
    const route = useRoute();
    this.slug = route.fullPath.split('/').pop() as string;
    this.recuperaClassifica();
    this.recuperaCommenti();
  }

  async recuperaClassifica() {
    const endpoint = API_URL + 'classifiche/element/category/' + this.slug + '/';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
      console.log(this.fetchedData);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero degli elementi in classifica ' + error + ' ' + endpoint;
    }
  }

  async recuperaCommenti() {
    const endpoint = API_URL + 'classifiche/comment/' + this.slug + '/';
    try {
      const response = await axios.get(endpoint);
      this.comments = response.data;
      console.log(this.comments);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei commenti ' + error + ' ' + endpoint;
    }
  }
}
</script>

<template>
  <div class="ranking-list">
    <RankingElement
      v-for="ranking in fetchedData"
      :key="ranking.id"
      :id="ranking.id"
      :rank="ranking.ranking"
      :name="ranking.name"
      :score="ranking.score"
      :description="ranking.description"
      :category="this.slug"
      :photo-url="ranking.image"
    />
    <div class="comments-section">
      <h2>Comments</h2>
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <p><strong>{{ comment.author }}</strong>: {{ comment.content }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.ranking-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: white;
}

.comments-section {
  width: 60%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f0f0f0; /* Light gray background */
}

.comment {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}
</style>
