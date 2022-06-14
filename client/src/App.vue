<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Auth from '/utils/auth';
</script>

<script>
//if logged in
export default {
  data() {
    return {
      isloggedIn: false,
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
        <RouterLink v-if= "isloggedIn" to="Auth.logout">logout</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />

<footer>
  <h3>Vue-Example-Site, {{ new Date().getFullYear() }} </h3>
  </footer>
</template>
