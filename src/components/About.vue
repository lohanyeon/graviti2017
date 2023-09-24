<template>
  <div class="wrapper about">

    <header class="sub_header">
      <h1 class="logo">
        <router-link v-bind:to="{ name: 'Main' }">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_black_m.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <h2 class="title01">ABOUT</h2>
      <a href="https://www.youtube.com/@GRAVITIinteractive" target="_blank" id="youtube" class="youtube">
        <img src="/static/v2017/images/youtube.png" alt="youtube" style="width:42px;height:42px;">
        <img src="/static/v2017/images/youtube.png" alt="youtube" class="mobile" style="width:42px;height:42px;">
      </a>
      <a href="#" id="showRightPush" class="gnb_menu">
        <img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_black_m.png" alt="메뉴" class="mobile">
      </a>
    </header>

    <!-- about contents -->
    <section id="contentWrap" class="section-about">
      <h3 class="skip">About</h3>
      <!-- contents -->
      <div class="contents">
      	<article class="txt_c">
      		<p class="title">Stunning Result in <span>Digital Ecology</span></p>
          <dl class="summary">
            <dt>신뢰와 크리에이티브를 최우선으로 생각하는 기업!</dt>
            <dd>
              2005년 설립된 그라비티인터랙티브는 기업 홍보영상, 브랜드 영상, 전시 영 상 등을 전문적으로 제작하고 있습니다. <br>
              디지털 미디어 시대에 맞춘 높은 퀄리티와 뛰어난 실력으로 많은 고객사와 함께 하고 있습니다.
            </dd>
          </dl>
    			<ul class="a-list">
    			  <li>
              <p class="tit">Balance &amp; <br>Cooperation<span>균형과 협력</span></p>
              <p class="txt">세련된 맨파워, 강력한 팀워크, <span>완숙한 경험과 식견이 출중한 리더들을</span> <span>중심으로 양질의 결과물을 도출합니다.</span></p>
            </li>
    			  <li>
              <p class="tit">QUALITY &<br>TRUST<span>품질에 대한 신뢰</span></p>
              <p class="txt">높은 영상 퀄리티, 정확한 커뮤니케이션, <span>체계적인 제작 프로세스로 고객에게</span> <span>높은 신뢰를 얻고 있습니다.</span></p>
            </li>
    			  <li>
              <p class="tit">Ongoing <br>partnerships<span>지속적 파트너 관계</span></p>
              <p class="txt">온.오프라인을 아우르는 최적의 <span>디지털 영상 콘텐츠로 많은 기업들과</span> <span>지속적 파트너 관계를 유지하고 있습니다.</span></p>
            </li>
    			</ul>
      	</article>
      </div>
      <!-- //contents -->
    </section>
    <!-- //about contents -->

  </div>
</template>

<script type="text/javascript">
  import classie from 'desandro-classie'
  let headerScroll = require('header-scroll-up')

  export default {
    name: 'contactApp',
    data: function () {
      return {
      }
    },
    computed: {
    },
    methods: {
      gnb () {
        var menuRight = document.getElementById('graviti-menu-s2')
        var showRightPush = document.getElementById('showRightPush')
        var body = document.body

        showRightPush.onclick = function () {
          // console.log('click')
          classie.toggle(this, 'active')
          classie.toggle(body, 'graviti-menu-push-toleft')
          classie.toggle(menuRight, 'graviti-menu-open')
        }
      }
    },
    created () {
    },
    mounted () {
      this.gnb()
      headerScroll.setScrollableHeader('header', {topOffset: 40})
    }
  }
</script>

<style>
  .section-about article {background-color:#f4f7f9; padding:9% 4%; margin:0 60px;}
  .section-about article .title {font-family:'Rajdhani'; font-size:50px; font-weight:600; letter-spacing:0.04em; line-height:1.1;}
  .section-about article .summary {margin-top:40px;}
  .section-about article .summary dt {font-size:24px; letter-spacing:-0.05em;}
  .section-about article .summary dd {color:#4d4d4f; font-size:17px; font-weight:300; letter-spacing:-0.05em; line-height:1.5; margin-top:20px;}
  .section-about article .a-list {margin-top:80px;}
  .section-about article .a-list li {display:inline-block; max-width:30%; vertical-align:top;}
  .section-about article .a-list li:nth-child(2) {margin:0 4%;}
  .section-about article .a-list .tit {color:#373737; font-family:'Rajdhani'; font-size:18px; font-weight:600; letter-spacing:0.025em; text-transform:uppercase;}
  .section-about article .a-list .tit span {
    display:block; color:#00a1e9; font-family:'Noto Sans KR'; font-size:16px; font-weight:500; letter-spacing:-0.05em;
    background:url('/static/v2017/images/line_blue_02.gif') center top no-repeat; padding-top:15px; margin-top:15px;
  }
  .section-about article .a-list .txt {color:#323232; font-size:15px; letter-spacing:-0.05em; line-height:1.5; margin-top:30px;}
  .section-about article .a-list .txt span {display:block;}

  /* tablet */
  @media all and (max-width:1024px) {
    .section-about article {margin:0 40px;}
    .section-about article .a-list .txt span {display:inline;}
  }

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.about h2 {display:none;}
    .section-about article {padding:13% 4%; margin:0 4%;}
    .section-about article .title {font-size:30px;}
    .section-about article .title span {display:block;}
    .section-about article .summary {margin-top:7%;}
    .section-about article .summary dt {font-size:18px;}
    .section-about article .summary dd {font-size:13px; margin-top:5%;}
    .section-about article .a-list {margin-top:0;}
    .section-about article .a-list li {display:block; width:100%; max-width:100%; margin:13% 0 0 !important;}
    .section-about article .a-list .tit {line-height:1.1;}
    .section-about article .a-list .tit span {font-size:13px; padding-top:2%; margin-top:2%;}
    .section-about article .a-list .txt {font-size:13px; margin-top:5%;}
    .section-about article .a-list .txt span {display:block;}
  }
</style>
