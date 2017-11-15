<template id="">
  <div class="wrapper work">
    <header class="sub_header">
      <h1><router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();"><img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive"></router-link></h1>
      <h2 class="portfolio">PORTFOLIO</h2>
      <a href="#" class="gnb_menu"><img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴"></a>
    </header>

    <section id="contentWrap">
      <h3 class="skip">Portfolio</h3>
      <!-- contents -->
      <div class="contents section-work">
        <!-- portfolio -->
        <div class="portfolio-detail">
          <div class="img pt0">
            <img src="/static/v2017/images/portfolio_01-1.jpg" alt="">
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
              <p class="site"><span class="url">URL</span><a href="http://www.seah.co.kr/" target="_blank" title="새창으로 이동">www.seah.co.kr</a></p>
            </div>
            <div class="info">
              info
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
            <li class="prev"><a href="#">이전 프로젝트</a></li>
            <li class="next"><a href="#">다음 프로젝트</a></li>
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
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'work-detail',
    methods: {

    },
    created () {
      console.log(this.$route.params.id)
    }
  }
</script>

<style>
  .wrapper.work {position:relative; height:auto !important;}
  .wrapper.work h2.portfolio {
    width:186px; height:42px; line-height:42px;
    color:#fff; font-size:1.188em; font-family:'Quantico'; font-weight: 400; text-align:center; letter-spacing:0.1em;
    background-color:#00a1e9; margin:0 auto;
  }
  /*.portfolio-detail {margin:0 60px;}*/
  .portfolio-detail .info-box {background-color:#fff; padding:80px 0 100px; margin:0 60px;}
  .portfolio-detail .img {padding-top:115px; margin:0 60px;}
  .portfolio-detail .img.pt0 {padding-top:0 !important;}
  .portfolio-detail .img img {width:100%;}
  .portfolio-detail .txt {padding-top:115px; margin:0 14.28%;}

  .other-portfolio {margin:0 60px;}
  .other-portfolio li {float:left; width:50%; background-color:#1d1d1d;}
  .other-portfolio li.next {background-color:#292929;}
  .other-portfolio li a {display:block; color:#fff; padding:20% 0;}

  .work_grid {position:absolute; top:0; left:0; width:100%; height:1000%; z-index:-1;}
  .work_grid .grid-line {position:absolute; top:0; left:0; width:14.28%; height:1000%; background:url('/static/v2017/images/bg_line.gif') right top repeat-y;}
  .work_grid .grid-line.line2 {left:14.28%;}
  .work_grid .grid-line.line3 {left:28.56%;}
  .work_grid .grid-line.line4 {left:42.84%;}
  .work_grid .grid-line.line5 {left:57.12%;}
  .work_grid .grid-line.line6 {left:71.4%;}
  .work_grid .grid-line.line7 {left:85.68%; background:none;}
</style>
