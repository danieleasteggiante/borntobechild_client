<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRouter } from 'vue-router';

@Options({
  props: {
    id: {
      type: Number,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
})
export default class RankingElement extends Vue {
  rank!: number;
  name!: string;
  score!: number;
  description!: string;
  photoUrl!: string;
  id!: string;
  category!: string;
  route = useRouter();

  get truncatedDescription() {
    return this.description.length > 50
      ? this.description.substring(0, 50) + '...'
      : this.description;
  }

  navigateToDetail() {
    this.route.push({ name: 'rankingElementDetails', params: { category: this.category, id: this.id } });
  }
}
</script>

<template>
  <div class="ranking-item" @click="navigateToDetail">
    <img :src="photoUrl" alt="Photo" class="photo" />
    <div class="rank">{{ rank + 1 }}</div>
    <div class="name">{{ name }}</div>
    <div class="description">{{ truncatedDescription }}</div>
    <div class="score">{{ score }}</div>
  </div>
</template>

<style scoped>
.ranking-item {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s;
  width: 400px;
  height: 200px;
}

.ranking-item:hover {
  transform: scale(1.15);
}

.rank, .name, .score, .description {
  color: black;
}

.rank {
  font-size: 2em;
  font-weight: bold;
}

.name {
  font-size: 1.5em;
}

.photo {
  width: 100%;
  height: calc(100% / 3);
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  margin-bottom: 10px;
}

.description {
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
