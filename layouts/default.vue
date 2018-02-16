<template>
  <div>
    <Navbar />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Materialize/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>