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