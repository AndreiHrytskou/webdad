import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    validTasks(state) {
      return state.tasks.filter((p) => {
        return p.text;
      });
    },
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    createTasks(state, newTask) {
      state.tasks.unshift(newTask);
    },
    removeTask(state, task) {
      let tasks = state.tasks;
      tasks.splice(tasks.indexOf(task), 1);
    },
  },
  actions: {
    removeTask({ commit }, task) {
      commit("removeTask", task);
    },
  },
  modules: {},
});
