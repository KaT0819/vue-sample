<template>
  <div>
      <h3>ホーム</h3>
      <p><button @click="toUsers">Usersページ path指定</button></p>
      <p><button @click="toUsersPath">Usersページ オブジェクト指定</button></p>
      <p><button @click="toUsersPathName">Usersページ オブジェクトでname指定</button></p>

      <a target="_blank" href="https://router.vuejs.org/ja/api/#%E3%83%AB%E3%83%BC%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3">ルートオブジェクトプロパティ</a>
      <a target="_blank" href="https://jp.vuejs.org/v2/guide/routing.html">ルーティング</a>

    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // mapGettersと他のプロパティを合わせて使う場合、スプレッド演算子「...」を用いて組み込む
  computed: {
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // count() {
    //   // state直接参照
    //   return this.$store.state.count;
    // },
    message: {
      get() {
        // getters使用
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      }
    },
  },
  methods: {
    toUsers() {
      this.$router.push('/users/1')
    },
    toUsersPath() {
      this.$router.push({path: 'users/1'})
    },
    toUsersPathName() {
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      })
    },
}
}
</script>

<style>
button {
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
}
</style>