import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Classifiche from '@/components/Classifiche.vue';
import RankingList from '@/components/classifiche/RankingList.vue';
import ElementDetail from "@/components/classifiche/ElementDetail.vue";
import BlogList from "@/components/blog/BlogList.vue";
import ArticleDetail from "@/components/blog/ArticleDetail.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/chi-siamo/',
    name: 'chi-siamo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/classifiche/',
    name: 'classifiche',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Classifiche,
  },
  {
    path: '/classifiche/:category',
    name: 'ranking',
    component: RankingList,
    props: true // Passa il parametro come props al componente
  },
  {
    path: '/classifiche/:category/:id',
    name: 'rankingElementDetails',
    component: ElementDetail,
    props: true // Passa il parametro come props al componente
  },
  {
    path: '/blog/',
    name: 'blogList',
    component: BlogList,
    props: true // Passa il parametro come props al componente
  },
  {
    path: '/blog/:id',
    name: 'articleDetails',
    component: ArticleDetail,
    props: true // Passa il parametro come props al componente
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
