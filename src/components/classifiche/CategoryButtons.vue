<script lang="ts">
/* eslint-disable */
import {Options, Vue} from 'vue-class-component';
import axios from "axios";
import {API_URL} from "@/config/constant";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface DataToDisplay {
  categories: Category[];
}

@Options({})
export default class CategoryButtons extends Vue {
  ROW_SIZE = 3;
  private fetchedData: Category[] = [];
  private errorMessage: string = '';
  private rowNumber = 0;
  private dataToDisplay: DataToDisplay[] = [];

  mounted() {
    this.recuperaSezioni();
  }

  private async recuperaSezioni() {
    const endpoint = API_URL + 'classifiche/category';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
      await this.createCategoryButtons(this.ROW_SIZE);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei dati';
    }
  }

  private createCategoryButtons(rowSize: number) {
    this.rowNumber = Math.ceil(this.fetchedData.length / rowSize);
    for (let i = 0; i < this.rowNumber; i++) {
      const categories: Category[] = [];
      for (let j = 0; j < rowSize; j++) {
        const index = i * rowSize + j;
        if (index < this.fetchedData.length)
          categories.push(this.fetchedData[index]);
      }
      this.dataToDisplay.push({categories});
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row" v-for="(data, index) in dataToDisplay" :key="index">
      <div class="col-lg-4" v-for="(category, index) in data.categories" :key="index">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" :src="category.image" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">{{ category.description }}.</p>
            <div class="d-flex justify-content-center align-items-center">
              <div class="btn-group">
                <router-link :to="'/classifiche/' + category.slug" class="btn btn-primary">
                  {{ category.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 300px; /* Set a fixed height for the card */
}

.card-img-top {
  width: 100%;
  height: 50%; /* Set a fixed height for the image */
  border-radius: 10px 10px 0 0;
  object-fit: cover; /* Crop the image if it is larger */
}
</style>
