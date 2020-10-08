const Home = { template: `<h1 class="title">ゆめみてる</h1><h2 class="subtitle">サブタイトル</h2>` }
const Movie = { template: `<h1 class="title">動画コンテンツ</h1><div class="block"><video src="assets/movies/cat.mp4" controls preload="none"></video></div>`}
const Company = { template: `<h1 class="title">企業情報</h1>`}
const Store = { template: `<h1 class="title">店舗案内</h1>`}
const Recruit = { template: `<h1 class="title">求人情報</h1>`}

const routes = [
  { path: '/', component: Home },
  { path: '/Movie', component: Movie },
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