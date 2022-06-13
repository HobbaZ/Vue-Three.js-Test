<template>

  <div class="signup">

  <h1 class="text-center">Signup</h1>

    <form method ="POST" @submit.prevent="onSubmit">
        <fieldset>
          <label>First Name</label>
            <input v-model.trim.lazy="firstname" type="text" placeholder="Your First Name" required minLength=2 

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">" Required Field must be at least 2 characters"</p>

          <label>Last Name</label>
            <input v-model.trim.lazy="lastname" type="text" placeholder="Your Last Name" required minLength=2 

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">" Required Field must be at least 2 characters"</p>

          <label>Username</label>
            <input v-model.trim.lazy="username" type="text" placeholder="Create a username" required minLength=2 

            class=" peer 
            focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
            "/>
          <p class="invisible peer-invalid:visible text-red-600 italic text-center">" Required Field must be at least 2 characters"</p>

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
        <button :disabled="isCompleted" class= "disabled:bg-slate-500 disabled:text-white"> Signup </button>
        </div>

        <div class="text-center">
        <button @click = "loginInstead"> Login Instead </button>
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
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    }
  },

  methods: {
    async onSubmit() {
      const firstname = this.firstname
      const lastname = this.lastname
      const username = this.username
      const email = this.email
      const password = this.password

      //Send data to create user endpoint
        try {
          const response = await fetch(`http://localhost:3001/api/users/`, {
            method: 'POST',
            body: JSON.stringify({ firstname, lastname, username, email, password}),
            headers: { 'Content-Type': 'application/json' },
          });
          
    
          if (!response.ok) {
            console.log(response);
            throw new Error('Couldn\'t create user!')
          }

          const { token, user } = await response.json();
          console.log("Creating user", user);
          Auth.login(token);
    
          this.firstname = ''
          this.lastname = ''
          this.username = ''
          this.email = ''
          this.password = ''

          console.log("Form successfully submitted");

        } catch (err) {
          console.error("Error creating user",err);
        }  
  },

    loginInstead() {
      this.$router.push('/login');
    }
  },

computed: {
    isCompleted: function() {
    	return !this.firstname || !this.lastname || !this.username || !this.email || !this.password;
    },
  }

};

</script>