<template>
  <div>
    <LikeHeader>
    </LikeHeader>

    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>
    <EventTitle v-model="eventData.title"></EventTitle>
    <input id="title" type="text" v-model.lazy="eventData.title">
    <pre>{{ eventData.title }}</pre>

    <label for="maxNumber">v-model.number</label>
    <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
    <p>{{ eventData.maxNumber }}</p>

    <label for="host">trim</label>
    <input id="host" type="text" v-model.trim="eventData.host">
    <pre>{{ eventData.host }}</pre>

    <label for="detail">詳細</label>
    <textarea name="" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
    <p style="white-space: pre;">{{ eventData.detail }}</p>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>

    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{ eventData.target }}</p>

    <input type="radio" id="man" value="男性" v-model="eventData.gender">
    <label for="man">男性</label>
    <input type="radio" id="woman" value="女性" v-model="eventData.gender">
    <label for="woman">女性</label>
    <input type="radio" id="other" value="その他" v-model="eventData.gender">
    <label for="other">その他</label>
    <p>{{ eventData.gender }}</p>

    <p>開催場所</p>
    <select v-model="eventData.location">
      <option v-for="location in locations" :key="location">{{ location }}</option>
    </select>
    <p>{{ eventData.location }}</p>

    <!-- <select v-model="eventData.location" multiple> -->





  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 14,
      locations: ['東京', '大阪',  '名古屋', '広島',],
      eventData: {
        title: "タイトル",
        maxNumber: 1,
        host: "host",
        detail: "詳細",
        isPrivate: true,
        target: [],
        gender: [],
        location: "",
      }
    };
  },
  components: {
    LikeHeader,
    EventTitle
  },
  methods: {
    IncrementNumber(value) {
      this.number += value;
    }
  }
};
</script>

<style scoped>

</style>

