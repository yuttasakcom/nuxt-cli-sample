<template>
    <div class="container">
      <section class="row">
        <PostPreview class="col s12 m4" v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :previewText="post.previewText" :thumbnail="post.thumbnail"
            :is-admin="isAdmin" />
      </section>
    </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>