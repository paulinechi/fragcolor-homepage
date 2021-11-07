import HomePage from '../page/HomePage';
import Technologies from '../page/Technologies';
import Careers from '../page/Careers';
import Blog from '../page/Blog';
import Projects from '../page/Projects';
import Team from '../page/Team';

export const RouteNames = {
  HOME: 'home',
  TECHNOLOGIES: 'technologies',
  CAREERS: 'career',
  PROJECTS: 'projects',
  BLOG: 'blog',
  TEAM: 'team'
};

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
    path: '/team',
    component: Team,
    name: RouteNames.TEAM,
  },
];
