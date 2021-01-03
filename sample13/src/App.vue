<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter: function() {
      this.$root.$emit("triggerScroll");
    }
  }
}
</script>

<style>
#app {
  width: 700px;
  margin: auto;
  padding-top: 50px;
  background-color: #ecffec;
}

a{
  text-decoration: none;
  padding: 0 10px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(49, 226, 108) 50%);
  background-position: 0 0;
  background-size: 200% auto;
  transition: .3s;
}

a:hover{
  background-position: -100% 0;
  color: #fff;
}

.nav a {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

</style>