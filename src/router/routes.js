import HomePage from '../page/HomePage';
import Technologies from '../page/Technologies';
import Careers from '../page/Careers';
import Blog from '../page/Blog';
import Projects from '../page/Projects';
import Team from '../page/Team';
import PressRelease from '../page/PressRelease';
import PressArticleList from '../page/PressList';

// import VueMeta from 'vue-meta';
// import VueRouter from 'vue-router'


// Vue.use(VueMeta)
// Vue.use(VueRouter)

export const RouteNames = {
  HOME: 'home',
  TECHNOLOGIES: 'technologies',
  CAREERS: 'career',
  PROJECTS: 'projects',
  BLOG: 'blog',
  TEAM: 'about',
  PRESS_RELEASE: 'pressRelease'
};

function prefixRoutes(prefix, routes) {
  return routes.map(route => route.path = prefix + '/' + route.path)
}
// console.log('test');

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/technology',
    component: Technologies,
    name: RouteNames.TECHNOLOGIES,
  },
  {
    path: '/blog',
    component: Blog,
    name: RouteNames.BLOG,
  },
  {
    path: '/careers',
    component: Careers,
    name: RouteNames.CAREERS,
  },
  {
    path: '/projects',
    component: Projects,
    name: RouteNames.PROJECTS,
  },
  {
    path: '/about',
    component: Team,
    name: RouteNames.TEAM,
  },
  {
    path: '/Fragments-Foundation-Raises-to-Expand-Fragcolor',
    component: PressRelease,
    name: RouteNames.PRESS_RELEASE,
  },
  {
    path: '/all-press-articles',
    component: PressArticleList,
    name: 'all-press-article',
  },
  {
    // props: true,
    path: '/press/Fragments-Foundation-Raises-to-Expand-Fragcolor',
    component: PressRelease,
    name: RouteNames.PRESS_RELEASE + '2',
    // children: [
    //   {
    //     path: 'Fragments-Foundation-Raises-to-Expand-Fragcolor',
    //     name: 'pressRelease.article1',
    //     component: PressRelease,
    //   },
    // ]
  },
];
