<!-- Info for user profile -->
<script>
import { Greeting } from './timeGreeting'
import Auth from '/utils/auth';

export default {
  props: ['firstname', 'lastname', 'username', 'email'],

  data() {
    return {

      isloggedIn: function(){return Auth.loggedIn},
    }
  },

  components: {
    Greeting
  }

}
</script>

<template v-if= "isloggedIn">
  <h3><Greeting />, {{ firstname }}</h3>
  <h5>Your current details</h5>
  <p>First Name: {{ firstname }}</p>
  <p>Last Name: {{ lastname }}</p>
  <p>Username: {{ username }}</p>
  <p>Email: {{ email }}</p>
</template>

methods: {
    
}