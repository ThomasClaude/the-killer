<template>
  <div class="app" id="app">
    <div class="columns medium-4" v-for="(result, index) in results">
    <div class="card">
      <div class="card-section">
        <p> {{ index }} </p>
      </div>
      <div class="card-divider">
        <p>$ {{ result.USD }}</p>
      </div>
      <div class="card-section">
        <p> &#8364 {{ result.EUR }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";


export default {
  name: 'App',
  data () {
    return {
      results: []
    }
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data
    })
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
