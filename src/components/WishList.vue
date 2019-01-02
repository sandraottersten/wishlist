<template>
<div>
<h2>All I want for x-mas is:</h2>
  <div>
    <div class="wish-item" v-for="wish in allWishes" :key="wish.id">
      <div class="item-left">
        <div class="label" v-if="!wish.editing" @dblclick="editWish(wish)"> {{wish.user}}  {{ wish.newWish }} </div>
        <input v-else :value="wish.newWish" @keyup.enter="doneEdit(wish, $event.target.value)">
      </div>
      <div class="removebutton" @click="remove(wish)">&times;</div>
    </div>
  </div>
  </div>
</template>

<script>
import {fb, db} from '../firebase-config'

export default {
  name: 'WishList',
  data() {
    return {
      wish: '',
      editing: ''
    }
  },
  created() {
    this.$bindAsArray('wishes', db.ref('wishes/'+ fb.auth().currentUser.uid))
  },
  firebase: {
    wishes: db.ref('wishes'),
    allWishes: db.ref('allWishes')
  },
  methods: {
    editWish(wish) {
      wish.editing = true
    },
    doneEdit(wish, newText) {
      this.$firebaseRefs.wishes.child(wish['.key']).child('newWish').set(newText)
      this.editing = false
    },
    remove(wish) {
      this.$firebaseRefs.wishes.child(wish['.key']).remove()
    }
}
}
</script>
<style scoped>
.item-left {
display: flex;
align-items:center;
}
.label {
padding: 10px;
border: 1px solid white;

}
.wish-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h2 {
 margin-bottom: 7%;
}
.removebutton {
  cursor: pointer;
  margin-left: 14px;
}
.removebutton:hover {
  color:red;
}
input {
  border: 1px solid #ccc;
  padding:10px;

  font-family: Helvetica, sans-serif;
  font-size: 18px;

}
input:focus {
outline: none;
}
</style>
