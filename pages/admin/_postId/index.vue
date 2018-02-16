<template>
    <section class="container">
        <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  asyncData(ctx) {
    return ctx.app.$axios
      .$get('/posts/' + ctx.params.postId + '.json')
      .then(data => {
        return {
          loadedPost: { ...data, id: ctx.params.postId }
        }
      })
      .catch(e => ctx.error(e))
  },
  head() {
    return { title: this.loadedPost.title }
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>