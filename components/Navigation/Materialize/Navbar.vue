<template>
    <div>
        <div class="navbar-fixed">
            <nav class="teal">
                <div class="container">
                    <div class="nav-wrapper">
                    <nuxt-link to="/" class="brand-logo">NUXTJS</nuxt-link>
                    <a href="#" data-activates="mobile-nav" class="button-collapse">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <nuxt-link to="/posts" tag="li" active-class="active" exact><a>Blog</a></nuxt-link>
                        <nuxt-link to="/about" tag="li" active-class="active"><a>About</a></nuxt-link>
                        <nuxt-link to="/admin" tag="li" active-class="active"><a>Admin</a></nuxt-link>
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
export default {
  mounted() {
    $('.button-collapse').sideNav()
  }
}
</script>
