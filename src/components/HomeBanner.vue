<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import { store } from '@/config/store';
@Options({})
export default class HomeBanner extends Vue {
  get image() {
    return store.state.imagePath;
  }
}

</script>


<template>
  <div class="position-relative overflow-hidden text-center bg-light" :style="`background-image: url(${image}/banner.jpg); background-size: cover; background-position: center; height: 100vh; width: 100%;`" >
    <div class="col-md-5 p-lg-5 mx-auto my-5 bg-secondary bg-opacity-50">
      <h1 class="display-4 fw-normal text-light">Born To Be Child</h1>
      <p class="lead fw-normal text-light">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  width: 100%;
}

.banner {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>
