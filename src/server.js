import koa from 'koa';
import serve from 'koa-static';

const app = koa();

app.use(serve(path.resolve(__dirname, '/public')));

app.use(function *() {
  this.body = 'Hello world';
});

app.listen(3000);
