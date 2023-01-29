<template>
  <NavBar shopName="Fake Shop"/>

  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  components: {NavBar},
  setup() {
    
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #302c50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #6f8669;
}
</style>
