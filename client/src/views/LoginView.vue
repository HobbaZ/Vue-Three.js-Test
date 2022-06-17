<template>

  <div class="login">

  <h1 class="text-center">Login</h1>

    <form method ="POST" @submit.prevent="onSubmit">
        <fieldset>
          
          <label>Email</label>
            <input v-model.trim.lazy="email" type="email" placeholder="Your Email" required

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            ">
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">Invalid Email Address</p>

         <label>Password</label>
            <input v-model="password" type="password" placeholder="Create a password" required minLength=8

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            ">
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">" Required Field must be at least 8 characters"</p>

        </fieldset>

        <div class="text-center">
        <button :disabled="isCompleted" class= "disabled:bg-slate-500 disabled:text-white"> Login </button>
        </div>

        <div class="text-center">
        <button @click = "loginInstead"> Signup Instead </button>
        </div>
        
    </form>

    </div>
</template>

<script>
import Auth from '/utils/auth';

//User input data
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async onSubmit() {
      const email = this.email
      const password = this.password

      //Send data to create user endpoint
        try {
          const response = await fetch(`http://localhost:3001/api/users/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json' },
          });
          
    
          if (!response.ok) {
            console.log(response);
            throw new Error('Couldn\'t login!')
          }

          const { token, user } = await response.json();
          console.log("Logging in", user);
          Auth.login(token);
    
          this.email = ''
          this.password = ''

          console.log("Form successfully submitted");

        } catch (err) {
          console.error("Error logging in",err);
        }  
  },

    loginInstead() {
      this.$router.push('/signup');
    }
  },

computed: {
    isCompleted: function() {
    	return !this.email || !this.password;
    },
  }

};

</script>
