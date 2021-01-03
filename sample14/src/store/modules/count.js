const state = {
    count: 2,
};

const getters = {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
};

const mutations = {
    increment(state, number = 1) {
        state.count += number;
    },
    decrement(state, number = 1) {
        state.count -= number;
    },
};

const actions = {
    incrementA(context, number = 1) {
        context.commit('increment', number);
    },
    // contextをオブジェクトにし、使うものを限定できる。
    decrementA({ commit }, number = 1) {
        commit('decrement', number);
    },
};

export default {
    // 名前空間の使用
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
