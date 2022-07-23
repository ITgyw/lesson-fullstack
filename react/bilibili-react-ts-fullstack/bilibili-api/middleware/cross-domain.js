module.exports = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');  // 白名单
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    await (next());
}