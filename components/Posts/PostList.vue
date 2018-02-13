<template>
    <section class="post-list">
        <PostPreview id="1" title="Hello VueJS" previewText="Test 1" thumbnail="https://nuxtjs.org/nuxt-views-schema.png" :is-admin="isAdmin"
        />
        <PostPreview id="2" title="Hello NuxtJS" previewText="Test 2" thumbnail="https://nuxtjs.org/nuxt-views-schema.png" :is-admin="isAdmin"
        />
        <PostPreview id="3" title="Hello NodeJS" previewText="Test 3" thumbnail="https://nuxtjs.org/nuxt-views-schema.png" :is-admin="isAdmin"
        />
    </section>
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
            }
        }
    }
</script>

<style scoped>
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>