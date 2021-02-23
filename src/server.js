import Koa from 'koa';
import KoaBody from 'koa-body';
import ApiRouter from './router/index';
import { serverConfig, logConfig } from './config';

const app = new Koa();

const router = new ApiRouter({ prefix: '/api' });

app.use(KoaBody());

app.use(router.getRouter().routes());
app.use(router.getRouter().allowedMethods());

app.listen(serverConfig.port, console.log('server is listening on port', serverConfig.port));
