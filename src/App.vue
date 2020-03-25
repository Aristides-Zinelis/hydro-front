<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>  
  </div>
</template>
<script lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
   created() {
    document.addEventListener('beforeunload', this.handler)
  }
}
</script>
<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px 0;
  box-shadow: 0px 5px 5px grey;

  &_logo {
    float: left;
    width: 25px;
    margin-left: 10px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
