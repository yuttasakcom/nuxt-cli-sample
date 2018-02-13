<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
                <div class="post-detail">Written by {{ loadedPost.author }}</div>
            </div>
            <p class="post-content">{{ loadedPost.content }}</p>
        </section>

        <section class="post-feedback">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <a href="#">email</a>
            </p>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData(ctx) {
    return axios
      .get(process.env.baseUrl + '/posts/' + ctx.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => ctx.error(e))
  },
  head() {
    return { title: this.loadedPost.title }
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>