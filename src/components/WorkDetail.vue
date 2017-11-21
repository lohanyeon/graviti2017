<template id="">

  <div class="wrapper work work-detail">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <header class="sub_header">
      <h1>
        <router-link v-bind:to="{ name: 'Main' }">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_black_m.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <h2 class="title01">PORTFOLIO</h2>
      <a href="#" id="" class="btn_w-list"><!-- 이 페이지에서만 보여짐 -->
        <img src="/static/v2017/images/btn_w-list.png" alt="Work 리스트">
        <img src="/static/v2017/images/btn_w-list_m.png" alt="Work 리스트" class="mobile">
      </a>
      <a href="#" id="showRightPush" class="gnb_menu">
        <img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_black_m.png" alt="메뉴" class="mobile">
      </a>
    </header>

    <!-- work-detail contents -->
    <section id="contentWrap" class="section-work">
      <h3 class="skip">Portfolio</h3>
      <!-- contents -->
      <div class="contents">
        <!-- portfolio -->
        <div class="portfolio-detail">
          <div class="img pt0">
            <img src="/static/v2017/images/portfolio_01-1.jpg" alt="">
            <div class="tit">
              <p class="year">2013</p>
              <dl>
                <dt>SEAH GROUP <br>WEBSITE</dt>
                <dd>세아그룹 웹사이트 리뉴얼 프로젝트</dd>
              </dl>
            </div>
          </div>
          <div class="info-box">
            <div class="desc">
              <dl>
                <dt>세아그룹 웹사이트 리뉴얼 프로젝트</dt>
                <dd>
                  일진그룹의 브랜드 정체성의 확립을 목표로 온라인 통합 플랫폼을 구축하였습니다.<br>
                  일진의 CI에 부합되는 규칙을 찾아 &lt;The Next Step&gt;이라는 컨셉을 바탕으로 일진그룹만의 브랜드 아이덴티티를 강화한 웹사이트로 개편하였습니다.
                </dd>
              </dl>
              <p class="site"><span class="url">URL</span><a href="mailto:norah222@naver.com">www.seah.co.kr</a></p>
            </div>
            <div class="info">
              <dl>
                <dt>제작사</dt>
                <dd>그라비티인터랙티브</dd>
              </dl>
              <dl>
                <dt>프로젝트 기간</dt>
                <dd>2014.02 ~ 2015.03</dd>
              </dl>
              <dl>
                <dt>고객사</dt>
                <dd>세아홀딩스</dd>
              </dl>
              <dl>
                <dt>범위</dt>
                <dd>반응형웹</dd>
              </dl>
            </div>
          </div>
          <div class="img pt0">
            <img src="/static/v2017/images/portfolio_01-2.jpg" alt="">
          </div>
          <div class="txt">
            <dl class="t1">
              <dt><img src="/static/v2017/images/work_txt_01.png" alt="Main Page"></dt>
              <dd>
                일진그룹의 브랜드 정체성의 확립을 목표로 온라인 통합 플랫폼을 구축하였습니다.<br>
                일진의 CI에 부합되는 규칙을 찾아 &lt;The Next Step&gt;이라는 컨셉을 바탕으로 일진그룹만의 브랜드 아이덴티티를 강화한 웹사이트로 개편하였습니다.
              </dd>
            </dl>
          </div>
          <div class="img">
            <img src="/static/v2017/images/portfolio_01-3.png" alt="">
          </div>
          <div class="img">
            <img src="/static/v2017/images/portfolio_01-4.jpg" alt="">
          </div>
          <div class="txt">
            <dl class="t2">
              <dt><img src="/static/v2017/images/work_txt_02.png" alt="Graphic"></dt>
              <dd>
                일진그룹의 브랜드 정체성의 확립을 목표로 온라인 통합 플랫폼을 구축하였습니다.<br>
                일진의 CI에 부합되는 규칙을 찾아 &lt;The Next Step&gt;이라는 컨셉을 바탕으로 일진그룹만의 브랜드 아이덴티티를 강화한 웹사이트로 개편하였습니다.
              </dd>
            </dl>
          </div>
          <div class="img">
            <img src="/static/v2017/images/portfolio_01-5.png" alt="">
          </div>
          <div class="txt">
            <dl class="t3">
              <dt><img src="/static/v2017/images/work_txt_03.png" alt="Page"></dt>
              <dd>
                일진그룹의 브랜드 정체성의 확립을 목표로 온라인 통합 플랫폼을 구축하였습니다.<br>
                일진의 CI에 부합되는 규칙을 찾아 &lt;The Next Step&gt;이라는 컨셉을 바탕으로 일진그룹만의 브랜드 아이덴티티를 강화한 웹사이트로 개편하였습니다.
              </dd>
            </dl>
          </div>
          <div class="img">
            <img src="/static/v2017/images/portfolio_01-6.png" alt="">
          </div>
          <div class="img">
            <img src="/static/v2017/images/portfolio_01-7.jpg" alt="">
          </div>
        </div>
        <!-- //portfolio -->

        <!-- other portfolio -->
        <div class="other-portfolio">
          <ul>
            <li v-if="hasPrevResult" class="prev txt_r">
              <router-link v-bind:to="{ name: 'WorkDetail', params: { id: prevPortfolio.pk}}">
                <p class="p-name" v-text="prevPortfolio.fields.project_kor_name"></p>
                <p class="p-en" v-html="prevPortfolio.fields.project_eng_name"></p>
                <p class="p-client">Client / {{prevPortfolio.fields.client_name}}</p>
              </router-link>
            </li>
            <li v-else>
              <!-- 이전 프로젝트가 없습니다.  -->
            </li>
            <li v-if="hasNextResult" class="next">
              <router-link v-bind:to="{ name: 'WorkDetail', params: { id: nextPortfolio.pk}}">
                <p class="p-name" v-html="nextPortfolio.fields.project_kor_name"></p>
                <p class="p-en" v-html="nextPortfolio.fields.project_eng_name"></p>
                <p class="p-client">Client / {{nextPortfolio.fields.client_name}}</p>
              </router-link>
            </li>
            <li v-else>
              <!-- 다음 프로젝트가 없습니다. -->
            </li>
          </ul>
        </div>
        <!-- //other portfolio -->
      </div>
      <!-- //contents -->

      <!-- grid -->
      <div class="work_grid">
        <div class="grid-line"></div>
        <div class="grid-line line2"></div>
        <div class="grid-line line3"></div>
        <div class="grid-line line4"></div>
        <div class="grid-line line5"></div>
        <div class="grid-line line6"></div>
        <div class="grid-line line7"></div>
      </div>
      <!-- //grid -->
    </section>
    <!-- //work-detail contents -->
  </div>
</template>

<script type="text/javascript">
  import $ from 'jQuery'
  import {vueTopprogress} from 'vue-top-progress'
  import classie from 'desandro-classie'

  export default {
    name: 'workDetailApp',
    data: function () {
      return {
        portfolios: [],
        currPortfolio: [],
        prevPortfolio: [],
        nextPortfolio: []
      }
    },
    computed: {
      hasPrevResult: function () {
        var currPk = this.currPortfolio.pk
        var prevPk = this.prevPortfolio.pk
        return currPk === prevPk ? 0 : 1
      },
      hasNextResult: function () {
        var currPk = this.currPortfolio.pk
        var nextPk = this.nextPortfolio.pk
        return currPk === nextPk ? 0 : 1
      }
    },
    methods: {
      gnb () {
        var menuRight = document.getElementById('graviti-menu-s2')
        var showRightPush = document.getElementById('showRightPush')
        var body = document.body

        showRightPush.onclick = function () {
          console.log('click')
          classie.toggle(this, 'active')
          classie.toggle(body, 'graviti-menu-push-toleft')
          classie.toggle(menuRight, 'graviti-menu-open')
        }
      },
      setPortfolio (id) {
        // const baseURI = '/apis'
        const baseURI = 'http://new.graviti.co.kr'
        var uri = baseURI + '/portfolios/api/portfolio/' + id

        this.$refs.topProgress.start()

        this.$http.get(`${uri}`).then((result) => {
          this.portfolios = result.data

          this.currPortfolio = this.portfolios[0]
          this.prevPortfolio = this.portfolios[1]
          this.nextPortfolio = this.portfolios[2]

          this.$refs.topProgress.done()
          $('body').scrollTop(0)
        }).catch(function (e) {
          console.log(e)
          // this.$refs.topProgress.fail()
        })

        $('html').animate({
          scrollTop: 0
        }, 500)
      }
    },
    created () {
      // console.log(this.$route.params.id)
    },
    mounted () {
      this.gnb()
      this.setPortfolio(this.$route.params.id)
    },
    watch: {
      '$route.params.id' (newId, oldId) {
        this.setPortfolio(newId)

        console.log(newId)
        console.log(oldId)
      }
    },
    components: {
      vueTopprogress
    }
  }
</script>

<style>
  .wrapper.work {position:relative; height:auto !important;}
  .wrapper.work h2 {width:186px;}
  .portfolio-detail .info-box {background-color:#fff; padding:90px 14.28% 100px;}
  .portfolio-detail .info-box:after {content:""; display:block; clear:both;}
  .portfolio-detail .info-box .desc {float:left; width:50%; padding-right:7%;}
  .portfolio-detail .info-box .desc dl dt {font-size:34px; font-weight:500; letter-spacing:-0.05em; line-height:1;}
  .portfolio-detail .info-box .desc dl dd {font-size:20px; font-weight:300; line-height:1.4; margin-top:25px;}
  .portfolio-detail .info-box .desc .site {font-size:13px; margin-top:40px;}
  .portfolio-detail .info-box .desc .site .url {display:inline-block; color:#fff; height:33px; line-height:33px; padding:0 14px; background-color:#1d1d1d;}
  .portfolio-detail .info-box .desc .site a {display:inline-block; height:31px; line-height:31px; padding:0 20px; margin-left:-1xp; border:1px solid #e9eef3;}
  .portfolio-detail .info-box .info {float:left; width:43%;}
  .portfolio-detail .info-box .info dl {float:left; width:49.5%; margin-bottom:50px; border-left:1px solid #e9eef3;}
  .portfolio-detail .info-box .info dl dt {color:#00a1e9; font-weight:500; padding-left:10%;}
  .portfolio-detail .info-box .info dl dd {font-weight:300; padding-left:10%; margin-top:10px;}
  .portfolio-detail .img {position:relative; padding-top:115px; margin:0 60px;}
  .portfolio-detail .img.pt0 {padding-top:0 !important;}
  .portfolio-detail .img img {width:100%;}
  .portfolio-detail .img .tit {position:absolute; top:28%; left:10%; color:#fff;}
  .portfolio-detail .img .tit .year {font-family:'Rajdhani'; font-size:1.1vw; letter-spacing:0.1em;}
  .portfolio-detail .img .tit dl dt {font-family:'Quantico'; font-size:4vw; font-weight:700; line-height:1em; margin-top:1.5%;}
  .portfolio-detail .img .tit dl dd {font-size:1.2vw; margin-top:5%;}
  .portfolio-detail .txt {padding-top:115px; margin:0 14.28%;}
  .portfolio-detail .txt dl:after {content:""; display:block; clear:both;}
  .portfolio-detail .txt dl dt {float:left; width:33%;}
  .portfolio-detail .txt dl dt img {max-width:100%;}
  .portfolio-detail .txt dl dd {float:left; width:63%; font-size:20px; font-weight:300; line-height:1.3; margin:40px 0 0 4%;}

  .other-portfolio {margin:0 60px;}
  .other-portfolio li {float:left; width:50%;}
  .other-portfolio li.prev {background:#1d1d1d url('/static/v2017/images/icon_prev.png') 12% center no-repeat;}
  .other-portfolio li.next {background:#292929 url('/static/v2017/images/icon_next.png') 88% center no-repeat;}
  .other-portfolio li.next.over {background-color:#1d1d1d;}
  .other-portfolio li a {display:block; color:#fff; padding:115px 12%;}
  .other-portfolio li .p-name {font-size:30px;}
  .other-portfolio li .p-en {color:#00a1e9; font-family:'Quantico'; text-transform:uppercase; margin-top:22px;}
  .other-portfolio li .p-client {
    display:inline-block;
    font-family:'Quantico'; font-size:13px; text-transform:uppercase;
    padding-left:25px; margin-top:35px;
    background:url('/static/v2017/images/line_blue.gif') left center no-repeat;
  }

  .work_grid {position:absolute; top:0; left:0; width:100%; height:1000%; z-index:-1;}
  .work_grid .grid-line {position:absolute; top:0; left:0; width:14.28%; height:1000%; background:url('/static/v2017/images/bg_line.gif') right top repeat-y;}
  .work_grid .grid-line.line2 {left:14.28%;}
  .work_grid .grid-line.line3 {left:28.56%;}
  .work_grid .grid-line.line4 {left:42.84%;}
  .work_grid .grid-line.line5 {left:57.12%;}
  .work_grid .grid-line.line6 {left:71.4%;}
  .work_grid .grid-line.line7 {left:85.68%; background:none;}

  @media all and (max-width:1300px) {
    .portfolio-detail .txt dl dt {width:42%;}
    .portfolio-detail .txt dl dd {width:54%;margin:40px 0 0 4%;}
  }

  /* tablet */
  @media all and (max-width:1024px) {
    .portfolio-detail .info-box {padding:45px 14.28% 50px;}
    .portfolio-detail .info-box .desc {width:68%;}
    .portfolio-detail .info-box .desc dl dt {font-size:24px;}
    .portfolio-detail .info-box .desc dl dd {font-size:16px;}
    .portfolio-detail .info-box .info {width:25%;}
    .portfolio-detail .info-box .info dl {width:99%; margin-bottom:30px;}
    .portfolio-detail .info-box .info dl:nth-child(4) {margin-bottom:0;}
    .portfolio-detail .info-box .info dl dt {font-size:14px;}
    .portfolio-detail .info-box .info dl dd {font-size:14px;}
    .portfolio-detail .img {margin:0 40px;}
    .portfolio-detail .img .tit {top:26%;}
    .portfolio-detail .img .tit .year {font-size:1.3vw;}
    .portfolio-detail .img .tit dl dt {font-size:5vw; margin-top:2%;}
    .portfolio-detail .img .tit dl dd {font-size:1.5vw;}
    .portfolio-detail .txt {padding-top:45px;}
    .portfolio-detail .txt dl dt {width:33%;}
    .portfolio-detail .txt dl dd {width:63%; font-size:16px; margin:3.8% 0 0 4%;}

    .other-portfolio {margin:0 40px;}
    .other-portfolio li a {padding:50px 12%;}
    .other-portfolio li .p-name {font-size:20px;}
    .other-portfolio li .p-en {font-size:10px; margin-top:13px;}
    .other-portfolio li .p-client {font-size:8px; margin-top:15px;}
  }

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.work h2 {display:none;}
    .portfolio-detail .info-box {padding:6% 10% 6%;}
    .portfolio-detail .info-box .desc {width:100%; padding:0;}
    .portfolio-detail .info-box .desc dl dt {font-size:20px;}
    .portfolio-detail .info-box .desc dl dd {font-size:13px; margin-top:10px;}
    .portfolio-detail .info-box .desc .site {font-size:12px; margin-top:20px;}
    .portfolio-detail .info-box .desc .site .url {height:23px; line-height:23px; padding:0 14px;}
    .portfolio-detail .info-box .desc .site a {height:21px; line-height:21px; padding:0 20px;}
    .portfolio-detail .info-box .info {width:100%; margin-top:25px;}
    .portfolio-detail .info-box .info dl {width:49.5%; margin-bottom:30px;}
    .portfolio-detail .info-box .info dl:nth-child(3), .portfolio-detail .info-box .info dl:nth-child(4) {margin-bottom:0;}
    .portfolio-detail .info-box .info dl dt {font-size:12px;}
    .portfolio-detail .info-box .info dl dd {font-size:12px; margin-top:5px;}
    .portfolio-detail .img {margin:0 4%;}
    .work_grid {display:none;}

    .portfolio-detail .img {padding-top:8%;}
    .portfolio-detail .img .tit {top:24%; left:7%;;}
    .portfolio-detail .img .tit .year {font-size:1.8vw;}
    .portfolio-detail .img .tit dl dt {font-size:5.5vw;}
    .portfolio-detail .img .tit dl dd {font-size:2vw;}
    .portfolio-detail .txt {padding-top:8%;}
    .portfolio-detail .txt dl dt {width:100%; text-align:center;}
    .portfolio-detail .txt dl dt img {width:35%;}
    .portfolio-detail .txt dl dd {width:100%; font-size:13px; margin:4% 0 0 0;}

    .other-portfolio {margin:0 4%;}
    .other-portfolio li {float:none; width:100%;}
    .other-portfolio li a {padding:9%;}
    .other-portfolio li.prev {background-position:9% center;}
    .other-portfolio li.next {background-position:91% center;}
    .other-portfolio li .p-name {font-size:16px;}
    .other-portfolio li .p-en, .other-portfolio li .p-client {display:none;}
  }
</style>
