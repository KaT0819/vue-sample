<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input type="text" id="name" v-model="name">
    <br><br>
    <label for="comment">コメント</label>
    <textarea name="comment" id="comment" v-model="comment"></textarea>
    <br><br>

    <button @click="addComment">コメントをサーバに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{ post.fields.name.stringValue }} </div>
      <div>コメント：{{ post.fields.comment.stringValue }} </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: []
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    }
  },
  created() {
    axios
      .get('/comments', {
        headers: {
          Authorization: `Bearer ${this.idToken}`
        }
      })
      .then(response => {
        this.posts = response.data.documents;
      });
  },
  methods: {
    addComment() {
      let data = {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          },
        }
      };

      axios.post(
        '/comments',
        data,
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        })
      .then(response => {
        console.log(response)
      })
      .then(error => {
        console.log(error)
      });
      this.name = "";
      this.comment = "";
    },
    getComment() {
      let url = "https://firestore.googleapis.com/v1/projects/vue-http-c51fa/databases/(default)/documents/comments";
      let data = {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          },
        }
      }

      axios
        .post(url, data)
        .then(response => {
          console.log(response)
        })
        .then(error => {
          console.log(error)
        });
      this.name = '';
      this.comment = '';
    }
  }
};
</script>