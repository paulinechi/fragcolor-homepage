import VueRouter from 'vue-router';
import Vue from 'vue';
import { routeParser } from 'vue-i18n-manager';
import { PropertyNames, VariableNames } from '../data/enum/configNames';
import getLocaleConfig from '../config/localeConfig';
import { CONFIG_MANAGER } from '../data/Injectables';
import { getValue } from '../util/injector';

import routes from './routes';

Vue.use(VueRouter);

// console.log(routes);

let router = null;

const getRouter = () => {
  if (!router) {
    const localeConfig = getLocaleConfig();
    const configManager = getValue(CONFIG_MANAGER);

    const processedRoutes =
      localeConfig.localeEnabled && localeConfig.localeRoutingEnabled
        ? routeParser(routes, configManager.getProperty(PropertyNames.DEFAULT_LOCALE))
        : routes.concat({
            path: '*',
            redirect: '/',
          });

    // console.log(processedRoutes);
    // console.log('base:')
    // console.log(configManager.getVariable(VariableNames.PUBLIC_PATH));

    router = new VueRouter({
      // mode: 'hash',
      mode: 'history',
      routes: processedRoutes,
      base: configManager.getVariable(VariableNames.PUBLIC_PATH),

      fallback: true,
      // base: '/press/'
    });

    // console.log('router in router.js:');
    // console.log(router);

    router.beforeEach((to, from, next) => {
      const persistQueryParams = configManager.getProperty(PropertyNames.PERSIST_QUERY_PARAMS);

      let redirect = false;
      const { ...query } = to.query;

      if (persistQueryParams && persistQueryParams.length > 0) {
        persistQueryParams.forEach((queryParam) => {
          if (
            typeof from.query[queryParam] !== 'undefined' &&
            typeof query[queryParam] === 'undefined'
          ) {
            query[queryParam] = from.query[queryParam];

            redirect = true;
          }
        });
      }

      if (redirect) {
        next({ path: to.path, query });
      } else {
        next();
      }
      window.scrollTo(0, 0);
    });
  }

  // console.log(router);


  return router;
};

export default getRouter;
