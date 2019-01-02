<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<style>

* {
box-sizing: border-box;
}
body {
margin: 5% 20%;
background-color: rgb(249, 107, 96);
}

.container {
  max-with:600px;
  margin: 0 auto;
  background-color: white;
  padding: 3% 10%;
}
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  color: #2c3e50;
}
.button {
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  background-color: rgb(115, 115, 114);
  color: #fff;
  border: 0px;
  border-radius: 3px;
  padding: 15px;
}
button:hover{
    background-color: rgb(167, 167, 165);
}

</style>
