<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
@Options({
  components: {Footer, Navbar}
})
export default class Main extends Vue {

}
</script>

<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>

</style>
