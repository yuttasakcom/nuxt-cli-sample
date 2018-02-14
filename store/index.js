import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editPost.id
        )
        state.loadedPosts[postIndex] = editPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then(data => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch()
      },
      addPost(vuexContext, post) {
        const createPost = {
          ...post,
          updatedDate: new Date()
        }
        return this.$axios
          .$post('/posts.json', createPost)
          .then(data => {
            vuexContext.commit('addPost', { ...createPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put('/posts/' + editedPost.id + '.json', editedPost)
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts({ loadedPosts }) {
        return loadedPosts
      }
    }
  })
}

export default createStore
