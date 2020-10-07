const HowTo = { template: `<div class="content">
  <article class="message is-danger">
    <div class="message-header">
      更新通知
    </div>
    <div class="message-body">
      10/07 サイト公開
    </div>
  </article>
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
    このようにスマホ本体を使用したデータの利用が必要な場合はアプリでの開発が必須である。
  </div>
  <div class="block">
    例えばLINEのように電話帳に入った情報を使い友達追加をしたい場合は[電話帳]というスマホ固有のデータを利用するためにアプリが必須。
  </div>
  <div class="block">
    逆にLINEのようなチャットツールを作成した場合に電話帳からの自動友達追加をせずに、ID検索のみの機能に絞ればWeb版で作ることが可能になる。
  </div>
  <div class="block">
    <router-link to="/MeritDemerit" class="button is-info is-rounded is-medium is-fullwidth">
      メリット＆デメリット
    </router-link>
  </div>
</div>` }
const MeritDemerit = { template: `<div class="content">
  <h1 class="title">メリット＆デメリット</h1>
  <div class="block">
    webサイトとアプリを作る上でのメリット・デメリットは沢山あるので、その中の一部をかいつまんで説明する。
  </div>
  <div class="block">
    <h2 class="title is-5">サーバーについて</h2>
    webサイト作成においては必ず必要になるサーバー。
    アプリ版でも基本的には必須になるが、以下のような場合はサーバーが必要無く作成することが可能。
    <div class="box mt-4 mb-4">全てがアプリ内で完結し作成者側へ一切のデータを送らない。<br><small>(計算機のような単純にその場のみ使用するものなど)</small></div>
    ただ、サーバーを用いない場合は簡単な動作をするものしか出来ない＆情報の保持が利用者単位でしか出来ないことを考えると大体のケース(開発要望)では該当せず、アプリ制作をするとしてもサーバーを用いた方法を取るのが一般的である。<br>
    また、サーバーには多様な種類があるので、その説明は別項目にて記載をする。
  </div>
  <div class="block">
    <h2 class="title is-5">公開の仕方</h2>
    公開の仕方についてはwebサイトとアプリには大きな違いが存在する。<br>
    極端な例だがwebサイトの場合は<b>サーバーへアップロードするのみ</b>で公開をすることが可能。<br>
    逆にアプリに関しては利用者が使えるようにする為には原則として各アプリストアへ申請をし許可を得る必要がある。<br>
    <article class="message is-danger mt-4 mb-4">
      <div class="message-header">
        アプリ公開への費用
      </div>
      <div class="message-body">
        iOSの場合は年額99ドル<br>
        Androidの場合は初回25ドル
      </div>
    </article>
  </div>
  <div class="block">
    <h2 class="title is-5">収益化について</h2>
    <div class="block">
      社内ツールや企業ページ等の広告としての利用をする以外の場合、何かしらの形で収益を得たいと思うことの方が一般的である。<br>
    収益化の方法としてはwebサイト,アプリ共に[広告掲載]をし[広告表示回数]や[クリック数]に応じた収益を得る方法や、[広告掲載]した物の販売をし収益を得るアフィリエイトを利用することが可能。
    </div>
    <div class="block">
      また、近年良く見かけるサブスクリプション(契約期間に応じた課金)や直接的に運営者へ支払いをする場合についてはwebサイト、アプリ共に可能だが支払い方法が大きく異る。
    </div>
    <div class="block">
      アプリの場合は[利用者]→[アプリ運営者]への直接的な課金の方法は基本的には存在せず、iOSなら[AppStore]/Androidなら[GooglePlay]を通した課金のみとなる。<br>
      また、課金の際には各アプリストアへ手数料を支払うことになる。
    </div>
    <div class="block">
      webサイトの場合、銀行振込やクレジットカードなど様々な支払い方法を選択することが出来るが決済システム自体は非常にセキュリティ的にナイーブなものな為にPayPalのような代理店を挟む方が開発者も利用者も安心感があると思われる。<br>
    </div>
  </div>
  <div class="block">
    <router-link to="/Server" class="button is-info is-rounded is-medium is-fullwidth">
      サーバーについて
    </router-link>
  </div>
</div>`}
const server = { template: `<div class="content">
  <h1 class="title">サーバーについて</h1>
  <div class="block">
    webサイトやアプリを運営したいと思う際に必要になるものの一つとしてサーバーがある。<br>
    ひとえにサーバーと言っても色々な種類があり、目的ごとに合わせたサーバーをレンタルする必要がある。<br>
    <div class="box mt-4 mb-4">
      ・共用サーバー<br>
      ・専用サーバー<br>
      ・VPS<br>
      ・クラウド
    </div>
    他にもIaaS,PaaS,SaaSなどサーバーに関連するものはとても多い。<br>
    この内、共用サーバーにおいては無料で使える会社がある。<br>
    <div class="block mt-4 mb-4">
      <h2 class="title is-5">無料でレンタル出来る？</h2>
      例えばエックスサーバーやFC2などで無料でサーバーを貸し出しているところがある。<br>
      もちろん無料のサーバーでwebサイトを運営することは出来るのだが、サーバーの無料の範疇というのは制限が厳しく、したいことが出来ない場合の方が多い。<br>
      その制限というのはPHPやNodejs、Ruby等のサーバーサイドの言語を使うことが出来ない、データベースの利用が出来ないという制限がある。<br>
      サーバーサイドの言語が使えない、データベースの利用が出来ない場合では利用者の入力した情報の保持が出来ない、システマチックな挙動をすることが難しくなる、
    </div>
  </div>
</div>`}

const routes = [
  { path: '/', component: HowTo },
  { path: '/MeritDemerit', component: MeritDemerit },
  { path: '/Server', component: server }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')