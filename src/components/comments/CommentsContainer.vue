<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CommentDetail from "@/components/comments/CommentDetail.vue";
import axios from "axios";
import {getCookie} from "@/components/utils/CookieUtils";
import CreateComment from "@/components/comments/CreateComment.vue";
import {API_URL} from "@/config/constant";
import IComment from "@/components/interfaces/IComment";


@Options({
  components: {CreateComment, CommentDetail},
  props: {
    commentType: {
      type: String,
      required: true
    },
    reference: {
      type: String,
      required: true
    },
  }
})
export default class CommentsContainer extends Vue {
  url: string;
  errorMessage = '';
  fetchComments: IComment[] = [];
  isLogged = false;
  userName = '';
  declare reference: string;
  declare commentType: string;

  mounted() {
    console.log('CommentsContainer mounted', this.commentType, this.reference);
    this.url = API_URL + 'comments/' + this.commentType + '/' + this.reference + '/';
    this.getCommentsFromUrl();
    this.getUserInfo();
  }

  private getUserInfo() {
    let infoUser = getCookie('user_info');
    if (!infoUser)
      return;
    this.isLogged = infoUser['is_logged'];
    this.userName = infoUser['name'];
  }

  async getCommentsFromUrl() {
    try {
      console.log('CommentsContainer getCommentsFromUrl', this.url);
      const response = await axios.get(this.url);
      console.log('CommentsContainer getCommentsFromUrl response', response.data);
      this.fetchComments = response.data;
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei commenti ' + error + ' ' + this.url;
    }
  }
}
</script>

<template>
  <div class="comments-section">
    <h2>Comments</h2>
    <CommentDetail v-for="comment in this.fetchComments" :key="comment.id" :comment="comment" />
    <CreateComment v-if="this.isLogged" :userName="this.userName" :reference="this.reference" :comment-type="this.commentType"/>
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
