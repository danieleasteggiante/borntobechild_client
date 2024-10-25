<script lang="ts">
/* eslint-disable */
import {Options, Vue} from 'vue-class-component';

import HomeBanner from "@/components/HomeBanner.vue";
import Section from "@/components/classifiche/Section.vue";
import axios from "axios";
import {API_URL} from "@/config/constant";

@Options({
  components: {Section, HomeBanner}
})
export default class Home extends Vue {
  private fetchedData: any = null;
  private errorMessage: string = '';

  mounted() {
    this.recuperaSezioni();
  }

  private async  recuperaSezioni() {
    const endpoint = API_URL + 'home/sections/';
    try {
      const response = await axios.get(endpoint);
      this.fetchedData = response.data;
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei dati';
    }
  }
}
</script>

<template>
  <HomeBanner/>
  <Section
    v-for="(section, index) in fetchedData"
    :key="index"
    :title="section.title"
    :content="section.content"
  />
</template>

<style scoped>

</style>
