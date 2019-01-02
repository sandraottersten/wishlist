<template>
  <div>
    <div v-if="!editing" @dblclick="editWish"> {{ newWish }} </div>
    <input v-else :value="newWish" @keyup.enter="doneEdit(wish, $event.target.value)">
    <button @click="remove(wish)">X</button>
  </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
  name: 'wish-item',
  props: {
    wish: {
    type: Object
    }
  },
  data() {
    return {
      newWish: this.wish.newWish,
      editing: this.wish.editing
    }
  },
  firebase: {
    wishes: db.ref('wishes')
  },
  methods: {
  remove(wish) {
    this.$emit('removedWish', wish)
  },
  editWish() {
    this.editing = true
  },
  doneEdit(wish, newText) {
    this.$firebaseRefs.wishes.child(wish['.key']).child('newWish').set(newText)
    this.editing = false
  }
  }
}
</script>
<style scoped>
button {
  background-color: white;
  cursor: pointer;
  border: 0;
}
button:hover {
  color:red;
}
</style>
