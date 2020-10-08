const Home = { template: `<h1 class="title">ゆめみてる</h1><h2 class="subtitle">サブタイトル</h2>` }
const Company = { template: `<h1 class="title">企業情報</h1>`}
const Store = { template: `<h1 class="title">店舗案内</h1>`}
const Recruit = { template: `<h1 class="title">求人情報</h1>`}

const routes = [
  { path: '/', component: Home },
  { path: '/Company', component: Company },
  { path: '/Store', component: Store },
  { path: '/Recruit', component: Recruit }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')