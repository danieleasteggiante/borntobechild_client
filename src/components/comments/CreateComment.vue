<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {API_URL} from "@/config/constant";
import axios from "axios";

@Options({
  props: {
    // serve come riferimento al componente a cui il commento e' destinato
    // se e' un articolo, sara' l'id dell'articolo
    // se e' una classifica, sara' lo slug della classifica
    reference: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    commentType: {
      type: String,
      required: true
    }
  }
})
export default class CreateComment extends Vue {
  comment = '';
  errorMessage = '';
  url = '';
  declare reference: string;
  declare userName: string;
  declare commentType: string;

  mounted() {
    this.url = API_URL + 'comment/create/' + this.commentType + '/' + this.reference + '/';
  }

  async sendCommentToBackend(comment: string) {
    console.log('Comment sent:', comment);
    try {
      const response = await axios.post(this.url, this.createBody(comment, this.userName));
      console.log(response.data);
    } catch (error) {
      this.errorMessage = 'Errore nel recupero dei dati';
      console.error(this.errorMessage, error);
    }
  }

  sendComment() {
    if (this.comment.trim() === '') {
      alert('Comment cannot be empty');
      return;
    }
    console.log('Comment sent:', this.comment);
    this.sendCommentToBackend(this.comment.trim());
    this.comment = '';
  }

  private createBody(comment: string, userName: string) {
    return {
      content: comment,
      author: userName,
    }
  }
}
</script>

<template>
  <div class="create-comment">
    <textarea v-model="comment" placeholder="Write your comment here..."></textarea>
    <button @click="sendComment">Submit Comment</button>
  </div>
</template>

<style scoped>
.create-comment {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;
}

textarea {
  width: 80%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
