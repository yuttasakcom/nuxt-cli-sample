<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '@/components/Admin/AdminPostForm'

    export default {
        layout: 'admin',
        components: {
            AdminPostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'YoProgrammer',
                    title: 'NuxtJS',
                    content: 'Super amazing post',
                    thumbnailLink: 'https://nuxtjs.org/nuxt-views-schema.png'
                }
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