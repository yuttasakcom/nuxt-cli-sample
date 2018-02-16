<template>
    <div>
        <div class="navbar-fixed">
            <nav class="teal">
                <div class="container">
                    <div class="nav-wrapper">
                    <nuxt-link to="/" class="brand-logo">Nuxt Shop</nuxt-link>
                    <a href="#" data-activates="mobile-nav" class="button-collapse">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <nuxt-link to="/posts" tag="li" active-class="active" exact><a>Blog</a></nuxt-link>
                        <nuxt-link to="/about" tag="li" active-class="active"><a>About</a></nuxt-link>
                        <nuxt-link to="/admin" tag="li" active-class="active"><a>Admin</a></nuxt-link>
                        <li v-if="isAuthenticated"><a @click="onLogout">Logout</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>

        <ul class="side-nav" id="mobile-nav">
            <nuxt-link to="/" tag="li" active-class="active" exact><a>Home</a></nuxt-link>
            <nuxt-link to="/posts" tag="li" active-class="active" exact><a>Blog</a></nuxt-link>
            <nuxt-link to="/about" tag="li" active-class="active"><a>About</a></nuxt-link>
        </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    $('.button-collapse').sideNav()
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>
