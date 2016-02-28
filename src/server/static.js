require('babel-polyfill');

import {resolve} from 'path';
import send from 'koa-send';

module.exports = serve;

function serve(root, opts) {
  opts = opts || {};
  opts.root = resolve(root);

  if (opts.index !== false) {
    opts.index = opts.index || 'index.html'
  }

  if (!opts.defer) {
    return async (ctx, next) => {
      if (ctx.method == 'HEAD' || ctx.method == 'GET') {
        if (await send(ctx, ctx.path, opts)) {
          return;
        }
      }
      await next();
    };
  }

  return async (ctx, next) => {
    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return;
    if (ctx.body !== null && ctx.status !== 404) return;

    await send(ctx, ctx, opts);
  };
}
