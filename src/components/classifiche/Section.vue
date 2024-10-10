<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: "Default title", // Mantenuto il default, rimosso required
    },
    content: {
      type: String,
      default: "Default content", // Mantenuto il default, rimosso required
    },
    home: {
      type: Number,
      default: 0,
    },
  },
})
export default class Section extends Vue {
  id!: number;
  title!: string;
  content!: string;
  home!: number;
  // Puoi aggiungere metodi o calcoli basati su queste props qui
}
</script>

<template>
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold">{{ title }}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{{ content }}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>

  <div class="b-example-divider"></div>
</template>

<style scoped>
/* Aggiungi eventuali stili specifici per il componente Section */
</style>
