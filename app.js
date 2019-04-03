const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const templating = require('./templating');
const isProduction = process.env.NODE_ENV === 'production';
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印 method 和 url
  const start = new Date().getTime();
  await next();
  const execTime = new Date().getTime() - start;
  ctx.response.set('X-Response-Time', `${execTime}ms`);
})
if (!isProduction) {
  const staticFiles = require('./static-files');
  app.use(staticFiles('/static/', __dirname + '/static'));
}
app.use(bodyParser());
app.use(templating('views', {
  noCache: !isProduction,
  watch: !isProduction
}))
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
