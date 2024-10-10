<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import axios from 'axios';
import {API_URL} from '@/config/constant';
import {useRoute, useRouter} from "vue-router";

@Options({})
export default class BlogList extends Vue {
  articles: any[] = [];
  errorMessage = '';
  nextArticles = 3;
  stop = 5;
  start = 0;
  loading = false;
  allLoaded = false;
  route = useRouter();

  mounted() {
    this.fetchArticles();
    window.addEventListener('scroll', this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async fetchArticles() {
    if (this.loading || this.allLoaded) return;
    this.loading = true;
    const endpoint = `${API_URL}blog/all?from=${this.start}&limit=${this.stop}`;
    try {
      const response = await axios.get(endpoint);
      this.articles = response.data;
      console.log(this.articles);
    } catch (error) {
      this.errorMessage = 'Errore durante il recupero degli articoli: ' + error;
    } finally {
      this.loading = false;
    }
  }

  handleScroll() {
    const bottomOfWindow = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
    if (bottomOfWindow)
      this.fetchArticles();
    this.start+=this.stop;
    this.stop+=this.nextArticles
  }
  navigateToDetail(id: string) {
    this.route.push({ name: 'articleDetails', params: { id } });
  }
}
</script>

<template>
  <div class="container">
    <h1>Blog</h1>
    <div class="blog-list">
      <div v-for="article in articles" :key="article.id" class="article" @click="navigateToDetail(article.id)">
        <div @click="navigateToDetail(article.id)">
          <div class="article-header">
            <div class="author-info">
              <p class="timestamp">{{ article.created_at.split('T')[0] }}</p>
            </div>
          </div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.subtitle }}</p>
          <div class="image-container">
            <img :src="article.banner" alt="Article Image" class="trapezoid-image"/>
          </div>
        </div>
      </div>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="allLoaded" class="end-message">No more articles to load.</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  padding: 20px;
}

.article {
  position: relative;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

.article-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.timestamp {
  font-size: 0.8em;
  color: #888;
}

.image-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%; /* Adjust width as needed */
  height: 100%;
  overflow: hidden;
}

.trapezoid-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 120%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(100% 0, 60% 0, 50% 100%, 100% 100%);
}

.loading, .end-message, .error {
  text-align: center;
  margin-top: 20px;
}
</style>
