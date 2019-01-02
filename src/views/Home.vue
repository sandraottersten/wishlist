<template>
  <div class="home">
    <WishList />
    <Input />
    <button class="button" @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import Input from '@/components/Input.vue'
import WishList from '@/components/WishList.vue'

export default {
  name: 'home',
  components: {
    Input,
    WishList
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style scoped>

</style>
