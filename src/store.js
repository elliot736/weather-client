import { reactive } from "vue";
import axios from "axios";

const store = {
  state: reactive({
    weather: false,
    lon: null,
    lat: null,
    city: "",
  }),
  getters: {
    async getWeather(query) {
      try {
        const resLoc = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=237df70526ab4c2db25abe04b0e0649e`
        );

        store.state.lon = await resLoc.data[0]?.lon;
        store.state.lat = await resLoc.data[0]?.lat;
        const resWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${store.state.lat}&lon=${store.state.lon}&units=metric&appid=237df70526ab4c2db25abe04b0e0649e`
        );

        console.log(resWeather);

        if (await resWeather.data) {
          store.state.weather = await resWeather.data;
          store.state.city = query.charAt(0).toUpperCase() + query.slice(1);
        }
      } catch (error) {
        console.log(error);
        store.state.weather = false;
      }
    },
  },
  mutations: {},
  actions: {
    initializeWeather() {
      store.state.weather;
      store.state.lon;
      store.state.lat;
      store.state.active;
    },
  },
};

export default store;
