module.exports = async (ctx, next) => {
    const { user: id } = ctx.request.body
    if (ctx.state.user.id === id) return await next()

    return await ctx.unauthorized("You cannot Create/Edit another user's profile")
}