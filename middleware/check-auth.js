export default ctx => {
  ctx.store.dispatch('initAuth', ctx.req)
}
