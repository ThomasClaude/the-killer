<template>
  <div class="login" id="login">
    <h1>
      Login
    </h1>
    <input type="text"
           name="username"
           v-model="input.username"
           placeholder="Username"
    >
    <input type="password"
           name="password"
           v-model="input.password"
           placeholder="Password"
    >
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        input: {
          username: '',
          password: '',
        }
      }
    },
  }
</script>

<style scoped>
  .login {

  }
</style>
