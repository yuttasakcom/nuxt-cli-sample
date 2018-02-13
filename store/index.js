import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
            ])
            resolve()
          }, 1000)
        })
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
