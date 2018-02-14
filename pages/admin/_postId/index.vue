<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth',
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

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>