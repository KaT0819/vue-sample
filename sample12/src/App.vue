<template>
  <div class="main">
    <h1>トランジション・アニメーション</h1>
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">フェード</p>
    </transition>
    <transition name="slide">
      <p v-if="show">スライド</p>
    </transition>
    <transition name="slidefade" type="animation" appear>
      <p v-if="show">スライド＆フェード</p>
    </transition>
    <transition
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__tada">
      <p v-if="show">animated</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
/* トランジション */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}

/* CSSアニメーション */
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0);
  }
}

.slidefade-enter,
.slidefade-leave-to {
  opacity: 0;
}
.slidefade-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slidefade-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slidefade-in {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0);
  }
}


.main {
  width: 70%;
  margin: auto;
  padding-top: 10px;
  text-align: center;
};
  
</style>