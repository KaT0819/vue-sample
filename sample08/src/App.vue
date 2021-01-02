<template>
  <div> 
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>

    <!-- コンポーネントの出し分け -->
    <About v-if="currentComponent === 'About'"></About>
    <Home v-if="currentComponent === 'Home'"></Home>
    <keep-alive>
      <components :is="currentComponent"></components>
    </keep-alive>

    <LikeHeader></LikeHeader><!-- デフォルト値の表示 -->
    <LikeHeader headerText="ヘッダーテキストをplopsで受け渡し">
      <h1>トータルのいいね数slot</h1>
      <template v-slot:title="slotProps">
        <h2>名前付きslot</h2>
        <p>{{ slotProps }}</p>
      </template>

      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeHeader v-slot="slotProps">
      <h3>はじめまして</h3>
      <p>{{ slotProps }}</p>
    </LikeHeader>
    <LikeHeader>
      <template #[titleData]>
        <h3>v-slotの動的設定</h3>
        <p>{{ slotProps }}</p>
      </template>
    </LikeHeader>

    <LikeNumber :total-number="number" @increment="$event"></LikeNumber>
    <LikeNumber total-number="6"></LikeNumber>

  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      titleData: "title",
      currentComponent: "Home"
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    IncrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>

