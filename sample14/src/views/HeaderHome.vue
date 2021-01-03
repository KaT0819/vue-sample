<template>
    <nav class="nav">
        <h2>ホームヘッダー</h2>
        <router-link to="/" active-class="link-active" exact>Home</router-link>
        <router-link
            :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
            active-class="link--active"
            exact
            class="link"
            >Users</router-link>
        
        <button @click="increment()">+1</button>
        <button @click="decrement()">-1</button>
        <p>{{ count }}</p>
        <button @click="incrementA(5)">+5</button>
        <button @click="decrementA(5)">-5</button>

    </nav>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations("count", ["increment", "decrement"]),
        // increment: function() {
        //     this.$store.commit("increment", 1);
        // },
        // decrement: function() {
        //     this.$store.commit("decrement", 1);
        // },

        ...mapActions("count", ["incrementA", "decrementA"]),
        // incrementdispatch() {
        //     this.$store.dispatch("increment", 5);
        // },
        // decrementdispatch() {
        //     this.$store.dispatch("decrement", 5);
        // },
    }
}
</script>