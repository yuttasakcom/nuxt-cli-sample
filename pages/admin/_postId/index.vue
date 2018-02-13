<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(ctx) {
    return axios
      .get(
        'https://nuxt-blog-2dc64.firebaseio.com/posts/' +
          ctx.params.postId +
          '.json'
      )
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => ctx.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          'https://nuxt-blog-2dc64.firebaseio.com/posts/' +
            this.$route.params.postId +
            '.json',
          editedPost
        )
        .then(res => {
          this.$router.push('/admin')
        })
        .catch(e => console.log(e))
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