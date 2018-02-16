<template>
    <div class="container">
        <section>
            <AdminPostForm @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  middleware: ['check-auth', 'auth'],
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>