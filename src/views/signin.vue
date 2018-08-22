<template>
  <div class="signin" id="signin">
    <h1>
      Your IP is {{ ip }}
    </h1>
    <input type="text"
           name="username"
           v-model="input.username"
           placeholder="Username"
    />
    <input type="password"
           name="password"
           v-model="input.password"
           placeholder="Password"
    />
    <button type="button"
            v-on:click="sendData()"
    >
      Sign in
    </button>
    <br>
    <br>
    <textarea>
      {{ response }}
    </textarea>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signin',
  data () {
    return {
      ip: '',
      input: {
        username: '',
        password: ''
      },
      response: ''
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'https://httpbin.org/ip' }).then(result => {
      this.ip = result.data.origin
    }, error => {
      console.error(error)
    })
  },
  methods: {
    sendData () {
      axios({ method: 'POST', 'url': 'https://httpbin.org/post', 'data': this.input, 'headers': { 'content-type': 'application/json' } }).then(result => {
        this.response = result.data
      }, error => {
        console.error(error)
      })
    }
    // signin () {
    //   // Calling v-model in the condition
    //   if (this.input.username !== '' && this.input.password !== '') {
    //     // Need to check what is mockAccount
    //     if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
    //       this.$emit('authenticated', true)
    //       this.$router.replace({
    //         // Looking for the secure.vue
    //         name: 'secure'
    //       })
    //     } else {
    //       console.log('The username and / or password is incorrect')
    //     }
    //   } else {
    //     console.log('A username and password must be present')
    //   }
    // }
  }
}
</script>

<style scoped>
  .signin {
    width: 50%;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
