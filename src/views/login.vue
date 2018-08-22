<template>
  <div class="login" id="login">
    <h1>
      Login
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
            v-on:click="login()"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // Calling v-model in the condition
      if (this.input.username !== '' && this.input.password !== '') {
        // Need to check what is mockAccount
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({
            // Looking for the secure.vue
            name: 'secure'
          })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
  .login {
    width: 50%;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }
</style>
