<template>
    <div>
        <section class="center">
            <AppButton @click="onLogout" style="margin-left:10px">Logout</AppButton>
        </section>

        <section>
            <PostList isAdmin :posts="loadedPosts" />
        </section>

        <div class="fixed-action-btn">
          <button class="btn-floating btn-large waves-effect waves-light red" @click="$router.push('/admin/new-post')">
            <i class="material-icons">add</i>
          </button>
        </div>
    </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>