const HowTo = { template: `<div class="content">
  <h1 class="title">はじめに</h1>
  <div class="block">webサイトやアプリを作ってみたいと思っている際にどちらの方が良いのか、費用のことなど色々とわからないことに対してのHowToをまとめてみる。<br></div>
  <div class="block">
    <h2 class="title is-5">webサイトとアプリの違い</h2>実はwebサイトとアプリは出来ることは非常に似ている。<br>YouTubeやFaceBook,Instagramを見ると分かる通りweb版とアプリ版には大差は無い。<br>では一体どこが違うのかというと、
    <table class="table is-bordered is-fullwidth is-striped mt-5 mb-5">
      <thead>
        <tr>
          <th></th>
          <th>Web版</th>
          <th>アプリ版</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>位置情報</td>
          <td class="has-text-centered">不可</td>
          <td class="has-text-centered">可能</td>
        </tr>
        <tr>
          <td>カメラ使用</td>
          <td class="has-text-centered">不可</td>
          <td class="has-text-centered">可能</td>
        </tr>
        <tr>
          <td>生体認証<br>(指紋/顔認証)</td>
          <td class="has-text-centered">不可</td>
          <td class="has-text-centered">可能</td>
        </tr>
      </tbody>
    </table>
    このようにスマホ本体を使用したデータの利用が必要な場合はアプリでの開発が必須となる。
  </div>
  <div class="block">
    例えばLINEのように電話帳に入った情報を使い友達追加をしたい場合は[電話帳]というスマホ固有のデータを利用するためにアプリが必須となる。
  </div>
  <div class="block">
    逆にLINEのようなチャットツールを作成した場合に電話帳からの自動友達追加をせずに、ID検索のみの機能に絞ればWeb版で作ることが可能になる。
  </div>
</div>` }

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
  { path: '/', component: HowTo }
]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
const app = new Vue({
  router
}).$mount('#app')