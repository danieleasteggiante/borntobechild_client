<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CommentDetail from "@/components/comments/CommentDetail.vue";


@Options({
  components: {CommentDetail},
  props: {
    comments: {
      type: Array,
      required: true
    }
  }

})
export default class CommentsContainer extends Vue {
  comments!: any[];

  mounted() {
    console.log('CommentsContainer mounted', this.comments);
  }

}
</script>

<template>
  <div class="comments-section">
    <h2>Comments</h2>
    <CommentDetail v-for="(comment, index) in this.comments" :key="index" :comment="comment" />
  </div>
</template>

<style scoped>
.comments-section {
  width: 60%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f0f0f0; /* Light gray background */
}


</style>
