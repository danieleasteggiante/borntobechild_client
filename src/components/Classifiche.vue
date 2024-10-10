<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CategoryButtons from "@/components/classifiche/CategoryButtons.vue";


@Options({
  components: {CategoryButtons}
})
export default class Classifiche extends Vue {

}
</script>

<template>
  <div class="container">

    <h1>Bootstrap grid examples</h1>
    <p class="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>

    <h3>Five grid tiers</h3>
    <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>
    <CategoryButtons />
  </div>
</template>

<style scoped>

</style>
