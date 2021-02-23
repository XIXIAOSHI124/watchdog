import Router from 'koa-router';
import IpRouter from './ip.router';
import ProviderRouter from './provider.router';

class ApiRouter {

  constructor(config) {
    const { prefix } = config;
    this.prefix = prefix || '';
    this.router = new Router({
      prefix: prefix
    });

    this.init();
  }

  init() {
    const routes = [...IpRouter, ...ProviderRouter];
    routes.forEach((route) => {
      const { method, route: path, handlers } = route;
      this.router[method](path, ...handlers);
    });
  }

  getRouter() {
    return this.router;
  }
}

export default ApiRouter;