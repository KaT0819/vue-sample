import Vue from 'vue';
import Vuex from "vuex";

import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "",
    },
    getters: {
        ...getters,
        dummy: state => state.message,
    },
    // state値の変更はmutationsでのみ行う。
    mutations,
    // 非同期処理
    actions: {
        ...actions
    },
    modules: {
        count
    },
})