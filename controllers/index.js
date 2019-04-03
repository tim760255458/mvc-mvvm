const fn_get_index = async (ctx, next) => {
  ctx.render('index.html', {
    title: 'welcome'
  });
};

const fn_post_signin = async (ctx, next) => {
  const name = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';

  console.log(`signin with name: ${name}, password: ${password}`);

  if (name === 'koa' && password === '12345') {
    ctx.render('welcome.html', {
      title: 'Sign in ok',
      name
    });
  } else {
    ctx.render('failed.html', {
      title: 'sign in faild'
    });
  }
};

const fn_get_hello = async (ctx, next) => {
  const name = ctx.params.name;
  ctx.render('hello.html', { name });
};

module.exports = {
  'GET /': fn_get_index,
  'POST /signin': fn_post_signin,
  'GET /hello/:name': fn_get_hello
}
