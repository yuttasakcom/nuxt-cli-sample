import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
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
          .$post('/posts.json?auth=' + vuexContext.state.token, createPost)
          .then(data => {
            vuexContext.commit('addPost', { ...createPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            '/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token,
            editedPost
          )
          .then(() => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authURL =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
          process.env.fbAPIKey

        if (!authData.isLogin) {
          authURL =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
            process.env.fbAPIKey
        }

        return this.$axios
          .$post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
          })
          .catch(e => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]

          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.commit('clearToken')
          return
        }

        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts({ loadedPosts }) {
        return loadedPosts
      },
      isAuthenticated({ token }) {
        return token != null
      }
    }
  })
}

export default createStore
