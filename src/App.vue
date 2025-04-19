<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>


<script>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Footer,
    Header,
  }
}

</script>

<style scoped>

</style>  


<!-- <RouterLink to="/">Home</RouterLink>
 <RouterLink to="/about">About</RouterLink>-->