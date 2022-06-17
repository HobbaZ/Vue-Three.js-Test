<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<script>
import Auth from '/utils/auth';
//if logged in
export default {
  data() {
    return {

      isloggedIn: function(){return Auth.loggedIn},
    }
  },

  methods: {
    logout() {
      console.log("You clicked logout")
      return Auth.logout;
    }
  },

};

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        
        <RouterLink v-if= "isloggedIn" to="/profile">Profile</RouterLink>
        <button v-if= "isloggedIn" @click = "logout">logout</button>
        <RouterLink v-if= "!isloggedIn" to="/login">Login</RouterLink>
        <RouterLink v-if= "!isloggedIn" to="/signup">Signup</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />

<footer>
  <h3>Vue-Example-Site, {{ new Date().getFullYear() }} </h3>
  </footer>
</template>
