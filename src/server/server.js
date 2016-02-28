require("babel-polyfill");

import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import serve from './static';

const app = new Koa();
const router = Router();
const port = process.env.PORT;

app.use(serve(path.resolve(__dirname, '../public')));

router.get('/api', (ctx, next) => {
  ctx.body = {port: port};
  next();
});

app.use(router.routes());
app.listen(port);
