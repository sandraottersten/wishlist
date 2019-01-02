<template>
  <div>
    <input type="number" class="wish-input" v-model.trim="newWish" placeholder="Add new wish" @keyup.enter="addWish">
  </div>
</template>

<script>
import {fb, db} from '../firebase-config'

export default {
  name:'Input',
  data() {
  return {
    newWish: 0,
    editing: false,

    }
  },
computed: {
user() {
return fb.auth().currentUser;
},
uid() {
  return fb.auth().currentUser.uid;
},
oldScore() {
  return this.allWishes[this.uid].newWish
}
},
created() {
this.$bindAsObject('wishes', db.ref('wishes/'+ this.user.uid))
this.$bindAsObject('allWishes', db.ref('allWishes/'))
},
firebase: {
 wishes: db.ref('wishes'),
 allWishes: db.ref('allWishes')
},

 methods: {
  addWish() {
    var i;
    for (let i = 0; i < Object.keys(this.allWishes).length; i++) {
        if (Object.keys(this.allWishes)[i] == this.uid) {
          console.log(this.oldScore)
          this.$firebaseRefs.allWishes.child(this.uid).update({
            newWish: parseInt(this.oldScore) + parseInt(this.newWish)
          });
            return true;
            this.oldScore = 0
      } else {
        this.$firebaseRefs.allWishes.child(this.uid).set({
          newWish: this.newWish,
          user: this.user.email
        })
      }
    };
    this.newWish = 0
  }
 }
}
//console.log(Object.keys(this.allWishes).length)
</script>
<style>
.wish-input {
width: 100%;
padding: 10px 18px;
font-size: 18px;
margin: 5% 0;
;
}
.wish-input:focus {
  outline: 0;
}
</style>
