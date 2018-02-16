<template>
    <nuxt-link :to="postLink">
        <article>
          <div class="card">
            <div class="card-image">
              <img :src="thumbnail">
              <span class="card-title">{{ title }}</span>
            </div>
            <div class="card-content">
              <p>{{ previewText }}</p>
            </div>
            <div class="card-action">
              Read: 12 Like: 2 Unlike: 1
            </div>
          </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>