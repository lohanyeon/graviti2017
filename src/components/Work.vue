<template id="">
  <div class="wrapper work work-list">
  		<header class="sub_header">
        <h1 class="logo"><router-link v-bind:to="{ name: 'Main' }"><img src="/static/v2017/images/logo_black.png" alt=""></router-link></h1>
        <ul class="group">
          <li class="web on"><a href="">WEB</a></li>
          <li class="mobile"><a href="">MOBILE</a></li>
          <li class="video"><a href="">VIDEO</a></li>
        </ul>
        <a href="#" id="showRightPush" class="gnb_menu"><img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴"></a>
  		</header>

      <!-- work-list contents -->
      <section id="contentWrap" class="section-work-list">
        <h3 class="skip">Work</h3>
        <!-- contents -->
        <div class="contents">
          <article class="work-list-wrap">
            <ul class="w-list">
              <li>
                <div class="thum-wrap">
              		<router-link v-bind:to="{ name: 'WorkDetail' }">
                    <p class="tit">일진디스플레이 웹사이트 리뉴얼</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_01.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_mobile.png" alt="MOBILE"></p><!-- 아이콘이름 : icon_web(WEB), icon_mobile(MOBILE), icon_video(IDEO) -->
                  </router-link>
                </div>
            		<div class="dim">
                  <p class="tit">일진디스플레이 웹사이트 리뉴얼</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2} }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
            		</div>
            	</li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">세아제강 AMERICA 웹사이트 구축</p>
                  	<p class="thum"><img src="/static/v2017/images/work_thum_02.jpg"/></p>
                    <p class="icon"><img src="/static/v2017/images/icon_mobile.png" alt="MOBILE"></p>
                  </router-link>
                </div>
            		<div class="dim">
                  <p class="tit">세아제강 AMERICA 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
            		</div>
            	</li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">세아그룹 ‘장인정신’ 영상 제작</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_03.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_video.png" alt="VIDEO"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">세아그룹 ‘장인정신’ 영상 제작</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 웹사이트 구축</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_04.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_web.png" alt="WEB"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">법무법인 화우 웹사이트 구축</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_05.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_web.png" alt="WEB"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">법무법인 화우 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">화천기계 웹사이트 구축</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_06.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_video.png" alt="VIDEO"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">화천기계 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 홍보관 웹사이트 구축</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_07.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_mobile.png" alt="MOBILE"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 홍보관 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">KT CS 웹사이트 리뉴얼</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_08.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_mobile.png" alt="MOBILE"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">KT CS 웹사이트 리뉴얼</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_09.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_web.png" alt="WEB"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_10.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_web.png" alt="WEB"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 홍보관 웹사이트 구축</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_11.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_web.png" alt="WEB"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 홍보관 웹사이트 구축</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li><li>
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }">
                    <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                    <p class="thum"><img src="/static/v2017/images/work_thum_12.jpg" alt=""></p>
                    <p class="icon"><img src="/static/v2017/images/icon_video.png" alt="VIDEO"></p>
                  </router-link>
                </div>
                <div class="dim">
                  <p class="tit">일진그룹 계열사 웹사이트 리뉴얼</p>
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: 2}  }" class="more"><img src="/static/v2017/images/btn_more.png" alt="더보기"></router-link>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <!-- //contents -->
      </section>
      <!-- //work-list contents -->

  	</div>
</template>

<script type="text/javascript">

</script>

<style>
  .wrapper.work header .group {text-align:center;}
  .wrapper.work header .group li {display:inline-block; margin:0 3px;}
  .wrapper.work header .group li a {
    display:inline-block; height:42px; line-height:42px;
    color:#0fa7ea; font-size:11px; font-family:'Quantico'; font-weight:400; text-align:center;
    padding:0 52px 0 15px;
  }
  .wrapper.work header .group li.on a, .wrapper.work header .group li.over a {color:#fff;}
  .wrapper.work header .group li.web {margin-left:75px;}
  .wrapper.work header .group li.web a {background:url('/static/v2017/images/icon_group_web.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile a {background:url('/static/v2017/images/icon_group_mobile.png') 64px center no-repeat; padding-right:40px;}
  .wrapper.work header .group li.video a {background:url('/static/v2017/images/icon_group_video.png') 58px center no-repeat; padding-right:45px;}
  .wrapper.work header .group li.web.on a, .wrapper.work header .group li.web.over a {background:#00a1e9 url('/static/v2017/images/icon_group_web_on.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile.on a, .wrapper.work header .group li.mobile.over a {background:#00a1e9 url('/static/v2017/images/icon_group_mobile_on.png') 64px center no-repeat;}
  .wrapper.work header .group li.video.on a, .wrapper.work header .group li.video.over a {background:#00a1e9 url('/static/v2017/images/icon_group_video_on.png') 58px center no-repeat;}

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.work header .group {display:none;}
  }
</style>

<script type="text/javascript">
  import classie from 'desandro-classie'

  export default {
    name: 'workListApp',
    methods: {
      gnb () {
        var menuRight = document.getElementById('graviti-menu-s2')
        var showRightPush = document.getElementById('showRightPush')
        var body = document.body

        showRightPush.onclick = function () {
          classie.toggle(this, 'active')
          classie.toggle(body, 'graviti-menu-push-toleft')
          classie.toggle(menuRight, 'graviti-menu-open')
        }
      }
    },
    mounted () {
      this.gnb()
    }
  }
</script>
