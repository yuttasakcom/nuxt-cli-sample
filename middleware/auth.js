export default ctx => {
  if (!ctx.store.getters.isAuthenticated) {
    ctx.redirect('/admin/auth')
  }
}
