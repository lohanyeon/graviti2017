<template id="">
  <div class="wrapper work work-list">
    <vue-topprogress ref="topProgress"></vue-topprogress>
		<header class="sub_header">
      <h1 class="logo">
        <router-link v-bind:to="{ name: 'Main' }">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_black_m.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <ul class="group">
        <li class="all on"><a href="#">ALL</a></li>
        <li class="web"><a href="#" v-on:click="setListPortfolio('W1')">WEB</a></li>
        <li class="mobile"><a href="#" v-on:click="setListPortfolio('M1')">MOBILE</a></li>
        <li class="video"><a href="#" v-on:click="setListPortfolio('V1')">VIDEO</a></li>
      </ul>
      <a href="#" id="showRightPush" class="gnb_menu">
        <img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_black_m.png" alt="메뉴" class="mobile">
      </a>
		</header>

    <!-- work-list contents -->
    <section id="contentWrap" class="section-work-list">
      <h3 class="skip">Work</h3>
      <!-- contents -->
      <div class="contents">
        <article class="work-list-wrap">
          <!-- work list -->
          <ul class="w-list">
            <transition-group name="list">
              <li v-if="hasResult" v-for="(work, key) in portfolios" :key="work.pk">
                <div class="thum-wrap">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: work.pk}  }">
                    <p class="tit">{{work.fields.project_kor_name}}</p>
                  	<p class="thum"><img v-bind:src="'http://new.graviti.co.kr/media/' + work.fields.thumb_image"/></p>
                    <p class="icon">
                      <img v-if="work.fields.project_kind==='W1'" src="/static/v2017/images/icon_web.png" alt="WEB">
                      <img v-if="work.fields.project_kind==='M1'" src="/static/v2017/images/icon_mobile.png" alt="MOBILE">
                      <img v-if="work.fields.project_kind==='V1'" src="/static/v2017/images/icon_video.png" alt="VIDEO">
                    </p>
                  </router-link>
                </div>
            		<div class="dim">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: work.pk}}">
                    <p class="tit">{{work.fields.project_kor_name}}</p>
                    <img src="/static/v2017/images/btn_more.png" alt="더보기" class="more">
                  </router-link>
            		</div>
            	</li>
            </transition-group>
          </ul>
          <!-- //work list -->
          <a href="#" class="btn_more_list show txt_c"><img src="/static/v2017/images/btn_more_list.png" alt="더보기"></a><!-- 클릭 시 w-list가 더 뿌려짐 -->
        </article>
      </div>
      <!-- //contents -->
    </section>
    <!-- //work-list contents -->

	</div>
</template>

<script type="text/javascript">
  import $ from 'jQuery'
  import {vueTopprogress} from 'vue-top-progress'
  import classie from 'desandro-classie'

  export default {
    name: 'workListApp',
    data: function () {
      return {
        portfolios: []
      }
    },
    computed: {
      hasResult: function () {
        return this.portfolios.length > 0
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
      setListPortfolio (v) {
        // const baseURI = '/apis'
        const baseURI = 'http://new.graviti.co.kr'
        var uri
        this.$refs.topProgress.start()
        if (v === 'all') {
          uri = baseURI + '/portfolios/api/portfolio/'
        } else {
          uri = baseURI + '/portfolios/api/search/portfolio/' + v
        }
        this.$http.get(`${uri}`)
          .then((result) => {
            this.portfolios = result.data
            this.$refs.topProgress.done()
          })
          .catch(function (e) {
            console.log(e)
            // this.$refs.topProgress.fail()
          })
      },
      setBtn () {
        $('.group li').each(function () {
          $(this).bind('click', function (e) {
            e.preventDefault()
            $(this).parent().children('li').removeClass('on')
            $(this).addClass('on')
          })
        })
      }
    },
    created () {
    },
    mounted () {
      this.gnb()
      this.setListPortfolio('all')
      this.setBtn()
    },
    components: {
      vueTopprogress
    }
  }
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
  .wrapper.work header .group li.all {margin-left:100px;}
  .wrapper.work header .group li.all a {background:url('/static/v2017/images/icon_group_all.png') 52px center no-repeat;}
  .wrapper.work header .group li.web a {background:url('/static/v2017/images/icon_group_web.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile a {background:url('/static/v2017/images/icon_group_mobile.png') 64px center no-repeat; padding-right:40px;}
  .wrapper.work header .group li.video a {background:url('/static/v2017/images/icon_group_video.png') 58px center no-repeat; padding-right:45px;}
  .wrapper.work header .group li.all.on a, .wrapper.work header .group li.all.over a {background:#00a1e9 url('/static/v2017/images/icon_group_all_on.png') 52px center no-repeat;}
  .wrapper.work header .group li.web.on a, .wrapper.work header .group li.web.over a {background:#00a1e9 url('/static/v2017/images/icon_group_web_on.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile.on a, .wrapper.work header .group li.mobile.over a {background:#00a1e9 url('/static/v2017/images/icon_group_mobile_on.png') 64px center no-repeat;}
  .wrapper.work header .group li.video.on a, .wrapper.work header .group li.video.over a {background:#00a1e9 url('/static/v2017/images/icon_group_video_on.png') 58px center no-repeat;}
  .btn_more_list {height:11px; padding:20px 0;}
  .btn_more_list img {vertical-align:top;}

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.work header .group {display:none;}
  }


  /* list transition */
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
