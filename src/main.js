import { createApp } from "vue";
import { createStore } from "vuex";
import App from './App.vue'

const store = createStore({
   state: {
      count: 0,
   },
   mutations: {
      INCREMENT_COUNT(state, payload) {
        state.count += payload;
      },
    },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
