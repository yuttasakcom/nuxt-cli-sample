import Vuex from 'vuex'
import axios from 'axios'

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
        return axios
          .get('https://nuxt-blog-2dc64.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
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
        return axios
          .post('https://nuxt-blog-2dc64.firebaseio.com/posts.json', createPost)
          .then(res => {
            vuexContext.commit('addPost', { ...createPost, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            'https://nuxt-blog-2dc64.firebaseio.com/posts/' +
              editedPost.id +
              '.json',
            editedPost
          )
          .then(res => {
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
