/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import Vue from 'vue';
import store from '@/store';
import * as types from './mutation-types';
import AuthProxy from '../../../proxies/AuthProxy';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  commit(types.LOGIN, 'RandomGeneratedToken');
  Vue.router.push({
    name: 'event.index',
  });
};

export const login = (context, payload) => {
  /*
   * Normally you would use a proxy to log the user in:
   */
    new AuthProxy()
     .login(payload)
     .then((response) => {
       console.log(response);
       if (response.message) {
         console.log(response.message);
       } else {
         context.commit(types.LOGIN, response);
         store.dispatch('account/find');
         Vue.router.push({
           name: 'event.index',
         });
       }
     })
     .catch((e) => {
       console.log(e);
       console.log('Request failed...');
     });
 

  Vue.router.push({
    name: 'event.index',
  });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  Vue.router.push({
    name: 'login.index',
  });
};

export default {
  check,
  register,
  login,
  logout,
};
