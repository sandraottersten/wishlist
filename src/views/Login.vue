<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button class="button" @click="login">Submit</button><button class="button" @click="googleLogin">Sign in with Google</button>
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>

  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email:'',
        password:''
      }
    },
    methods: {
      login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops,' + err.message)
        }
        );
      },
      googleLogin: function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
          var token = result.credential.accessToken;
          var user = result.user;
          this.$router.replace('home')
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage)
});
      }
    }
  }
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 50%;
  padding: 15px;
}

p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
