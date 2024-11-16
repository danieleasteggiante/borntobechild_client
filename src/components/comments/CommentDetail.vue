<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import IComment from "@/components/interfaces/IComment";
import {PropType} from "vue";
@Options({
  props: {
    comment: {
      type:  Object as PropType<IComment>,
      required: true
    }
  }
})
export default class CommentDetail extends Vue {
  comment!: IComment;

  mounted() {
    console.log('Comment mounted', this.comment);
  }

}
</script>

<template>
  <div class="comment">
    <p><strong>{{ this.comment.author }}</strong>: {{ this.comment.content }}</p>
  </div>
</template>

<style scoped>
.comment {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}
</style>
