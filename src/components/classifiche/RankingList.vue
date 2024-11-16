<script lang="ts">
import ElementoClassifica from "@/components/classifiche/RankingElement.vue";
import {Options, Vue} from "vue-class-component";
import axios from "axios";
import {API_URL} from "@/config/constant";
import {useRoute} from "vue-router";
import RankingElement from "@/components/classifiche/RankingElement.vue";
import CommentsContainer from "@/components/comments/CommentsContainer.vue";

@Options({
  components: {CommentsContainer, RankingElement},
})
export default class RankingList extends Vue {
  fetchedData: any[] = [];
  errorMessage = '';
  slug = '';
  commentUrl = '';
  commentFetched = [];
  isCommentFetched = false;

  mounted() {
    const route = useRoute();
    this.slug = route.fullPath.split('/').pop() as string;
    this.commentUrl = API_URL + 'classifiche/comment/' + this.slug + '/';
    this.recuperaClassifica();
    this.recuperaCommenti();
  }

  async recuperaClassifica() {
    const endpoint = API_URL + 'classifiche/ranking/' + this.slug + '/';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
      console.log(this.fetchedData);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero degli elementi in classifica ' + error + ' ' + endpoint;
    }
  }

  async recuperaCommenti() {
    const endpoint = API_URL + 'comments/classifica/' + this.slug + '/';
    try {
      const response = await axios.get(endpoint);
      this.commentFetched = response.data;
      this.isCommentFetched = true;
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
      :rank="ranking.rank"
      :name="ranking.name"
      :score="ranking.score"
      :description="ranking.description"
      :category="this.slug"
      :photo-url="ranking.image"
    />
    <CommentsContainer v-if="this.slug" :commentType="'classifica'" :reference="this.slug"  />
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


</style>
