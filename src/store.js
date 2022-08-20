import { reactive } from "vue";
import axios from "axios";

const store = {
  state: reactive({
    weather: false,
    lon: null,
    lat: null,
    city: "",
    pollen: false,
    biowetter: false,
    recomms: [],
    uvi: false,
    gfi: false,
  }),
  getters: {
    async getWeather(query) {
      try {
        const resLoc = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=237df70526ab4c2db25abe04b0e0649e`
        );

        store.state.lon = await resLoc.data[0]?.lon;
        store.state.lat = await resLoc.data[0]?.lat;
        const resWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${store.state.lat}&lon=${store.state.lon}&units=metric&appid=237df70526ab4c2db25abe04b0e0649e`
        );

        if (await resWeather.data) {
          store.state.weather = await resWeather.data;
          store.state.city = query.charAt(0).toUpperCase() + query.slice(1);
        }
      } catch (error) {
        console.log(error);
        store.state.weather = false;
      }
    },
    async getPollen(region) {
      try {
        const pollen = await axios.get(
          `https://wetter-api.herokuapp.com/api/v1/pollen?region=${region}`
        );
        store.state.pollen = await pollen.data.data;
      } catch (error) {
        console.log(error);
        store.state.pollen = false;
      }
    },
    async getBiowetter(city) {
      try {
        const biowetter = await axios.get(
          `https://wetter-api.herokuapp.com/api/v1/biowetter?city=${city}`
        );
        store.state.biowetter = await biowetter.data.data;
        if (store.state.biowetter) {
          for (let item in store.state.biowetter) {
            store.state.recomms.push(store.state.biowetter[item]);
          }
        }
      } catch (error) {
        console.log(error);
        store.state.biowetter = false;
      }
    },
    async getUVI(city) {
      try {
        const uvi = await axios.get(
          `https://wetter-api.herokuapp.com/api/v1/uvi?station=${city}`
        );
        store.state.uvi = await uvi.data.data;
      } catch (error) {
        console.log(error);
        store.state.uvi = false;
      }
    },
    async getGFI(city) {
      try {
        const gfi = await axios.get(
          `https://wetter-api.herokuapp.com/api/v1/gfi?station=${city}`
        );
        store.state.gfi = await gfi.data.data;
      } catch (error) {
        console.log(error);
        store.state.gfi = false;
      }
    },
  },

  actions: {
    initializeWeather() {
      store.state.weather;
      store.state.lon;
      store.state.lat;
    },
  },
};

export default store;
