/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  //Event Selection
  {
    path: '/event',
    name: 'event.index',
    component: () => import('@/pages/Event/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  //event creation
  {
    path: '/eventcreate',
    name: 'eventCreate.index',
    component: () => import('@/pages/CreateEvent/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  {
    path: '/organizer',
    name: 'organizerDetails.index',
    component: () => import('@/pages/Organizer/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
