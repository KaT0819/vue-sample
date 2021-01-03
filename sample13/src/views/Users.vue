<template>
  <div>
      <h3>ユーザ</h3>
      <router-link to="/users/1">ユーザ１</router-link>
      <router-link to="/users/2">ユーザ２</router-link>
      <hr>
      <h1>User No. direct {{ $route.params.id }}</h1>
      <h1>User No. props {{ id }}</h1>
      <div style="height: 700px">

      </div>
      <router-link :to="'/users/' + id + '/profile'">プロフィール</router-link>
      <router-link :to="'/users/' + id + '/posts'">投稿</router-link>
      <router-link :to="'/users/' + (Number(id) + 1)">次のユーザ</router-link>
      <router-link id='next-user' :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: {lang: 'ja', page: 2}, hash: '#next-user'}">次のユーザ</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // ウォッチャー
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
  // ナビゲーションガード
  beforeRouteEnter (to, from, next) {
    // このコンポーネントを表示する際
    // thisが使えない。
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // このコンポーネントを更新する際
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 別なコンポーネントを表示する際
    const isLeave = window.confirm("Are you sure you want to leave ?");
    if (isLeave) {
      next()
    } else {
      next(false)
    }
  },
}
</script>

<style>
a {
  margin-right: 10px;
}
</style>
