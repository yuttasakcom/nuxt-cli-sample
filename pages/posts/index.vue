<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(ctx, cb) {
    setTimeout(() => {
      cb(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'P text 1',
            thumbnailLink: 'https://nuxtjs.org/nuxt-views-schema.png',
            author: 'YoProgrammer'
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'P text 2',
            thumbnailLink: 'https://nuxtjs.org/nuxt-views-schema.png',
            author: 'YoProgrammer'
          }
        ]
      })
    }, 1000)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>