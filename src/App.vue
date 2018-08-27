<template>
  <div class="container" id="app">
    <img src="./assets/logo.png">
    <h1 class="text-center">
      Pricing
    </h1>
    <div class="card-list">
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
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      results: {
        "BTC": {
          "USD":3759.91,
          "EUR":3166.21
        },
        "ETH": {
          "USD":281.7,
          "EUR":236.25
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
