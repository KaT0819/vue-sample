<template>
  <div>
    <slot :user="user.firstName" text="テキストテキスト">
      <h2>デフォルトのタイトル</h2>
    </slot>
    <slot name="title" :user="user" text="テキスト"></slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    };
  }
}
</script>

<style scoped>
h1 {
  color: green
}
</style>
