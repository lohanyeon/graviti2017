<template id="">
  <div class="wrapper work work-list">
    <vue-topprogress ref="topProgress"></vue-topprogress>
		<header class="sub_header">
      <h1 class="logo">
        <router-link v-bind:to="{ name: 'Main' }">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive" v-on:click="goList()">
          <img src="/static/v2017/images/logo_black_m.png" alt="GRAVITI Interactive" class="mobile" v-on:click="goList()">
        </router-link>
      </h1>
      <ul class="group">
        <li class="all"><a href="#" v-on:click="setListPortfolio('init', 'all', 'menu')">ALL</a></li>
        <li class="web"><a href="#" v-on:click="setListPortfolio('init', 'W1', 'menu')">WEB</a></li>
        <li class="mobile"><a href="#" v-on:click="setListPortfolio('init', 'M1', 'menu')">MOBILE</a></li>
        <li class="video01"><a href="#" v-on:click="setListPortfolio('init', 'V1', 'menu')">VIDEO</a></li>
      </ul>
      <div class="group_m">
        <select id="sortKey" name="sortKey" v-model="sortKey" v-on:change="setListPortfolio('init', 'select')">
          <option v-for="option in options" v-bind:value="option.value">
            {{option.text}}
          </option>
        </select>
      </div>
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
          <ul id="graviti-w-list">
            <transition-group name="list">
              <li v-if="hasResult" v-for="(work, key) in portfolios" :key="work.pk" :id="work.pk">
                <div class="thum-wrap test" v-on:mouseover="setThumOver($event)">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: work.pk}  }">
                    <p class="tit">{{work.fields.project_kor_name}}</p>
                  	<p class="thum"><img v-bind:src="strMediaUrl + work.fields.thumb_image"/></p>
                    <p class="icon">
                      <img v-if="work.fields.project_kind==='W1'" src="/static/v2017/images/icon_web.png" alt="WEB">
                      <img v-if="work.fields.project_kind==='M1'" src="/static/v2017/images/icon_mobile.png" alt="MOBILE">
                      <img v-if="work.fields.project_kind==='V1'" src="/static/v2017/images/icon_video.png" alt="VIDEO">
                    </p>
                  </router-link>
                </div>
            		<div class="dim" v-on:mouseleave="setThumLeave($event)">
                  <router-link v-bind:to="{ name: 'WorkDetail', params: {id: work.pk}}">
                    <p class="tit"><!-- {{work.fields.project_kor_name}} --></p>
                    <!-- <img src="/static/v2017/images/btn_more.png" alt="더보기" class="more"> -->
                  </router-link>
            		</div>
            	</li>
            </transition-group>
          </ul>
          <!-- //work list -->
          <a href="javascript:" class="btn_more_list show txt_c" v-on:click="setListPortfolio('more', 'more')" id="9999999999"><img src="/static/v2017/images/btn_more_list.png" alt="더보기"></a><!-- 클릭 시 w-list가 더 뿌려짐 -->
        </article>
      </div>
      <!-- //contents -->
    </section>
    <!-- //work-list contents -->

    <form name="workForm">
      <input type="hidden" name="portfolios" />
      <input type="hidden" name="portfoliosDisplayTotal" />
      <input type="hidden" name="portfoliosTotal" />
    </form>
	</div>
</template>

<script type="text/javascript">
  import 'babel-polyfill'
  import $ from 'jQuery'
  import {vueTopprogress} from 'vue-top-progress'
  import classie from 'desandro-classie'

  let headerScroll = require('header-scroll-up')

  export default {
    name: 'workListApp',
    data: function () {
      return {
        portfolios: [],
        portfoliosDisplayTotal: 0,
        portfoliosDisplayPerPage: 12,
        portfoliosGetAmount: 12,
        portfoliosSetAmount: 12,
        portfoliosTotal: 0,
        sortKey: 'all',
        options: [
          {text: 'ALL', value: 'all'},
          {text: 'WEB', value: 'W1'},
          {text: 'MOBILE', value: 'M1'},
          {text: 'VIDEO', value: 'V1'}
        ],
        strUrl: 'http://new.graviti.co.kr',
        // strUrl: 'http://localhost:8000',
        strMediaUrl: 'http://new.graviti.co.kr/media/'
        // strMediaUrl: 'http://localhost:8000/media/'
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
          // console.log('click')
          classie.toggle(this, 'active')
          classie.toggle(body, 'graviti-menu-push-toleft')
          classie.toggle(menuRight, 'graviti-menu-open')
        }
      },
      setListPortfolio (k, v, from) {
        // const baseURI = '/apis'
        var obj = document.myform
        // console.log(document.location.hash + 12)
        // var currPortfolioDisplayTotal = parseInt(obj.portfolio_display_total.value)
        var fromDetail = obj.from_detail.value
        const baseURI = this.strUrl
        var uri
        this.$refs.topProgress.start()
        // this.portfoliosDisplayTotal = $('.w-list li').length
        if (v === 'more') {
          v = obj.work.value
        } else if (v === 'select') {
          v = this.sortKey
        }
        // console.log('k : ' + k)
        this.portfoliosDisplayTotal = k === 'init' ? 0 : this.portfoliosDisplayTotal

        var projectKind = k === 'init' ? v : obj.work.value
        uri = baseURI + '/portfolios/api/portfolio/total/' + projectKind

        // 포토폴리오 총 갯수 가져오기
        this.$http.get(`${uri}`).then((result) => {
          this.portfoliosTotal = result.data.id__count
        }).catch(function (e) {
          console.log(e)
          // this.$refs.topProgress.fail()
        })

        // 포토폴리오 리스트 가져오기
        if (fromDetail === 'detail') {
          // if (from === 'menu') {
          //   this.portfoliosGetAmount = this.portfoliosSetAmount
          // } else {
          //   this.portfoliosGetAmount = currPortfolioDisplayTotal + this.portfoliosDisplayTotal
          //   this.portfoliosGetAmount = this.portfoliosGetAmount === 0 ? this.portfoliosSetAmount : this.portfoliosGetAmount
          // }
        } else if (fromDetail === '') {
          // this.portfoliosGetAmount = currPortfolioDisplayTotal + this.portfoliosDisplayTotal
          // this.portfoliosGetAmount = this.portfoliosGetAmount === 0 ? this.portfoliosSetAmount : this.portfoliosGetAmount
        } else {
          // this.portfoliosGetAmount = this.portfoliosSetAmount
        }

        // console.log(k)
        if (k === 'more') {
          var _clickCount = parseInt(this.$cookies.get('click-count-more')) + 1
          this.$cookies.set('click-count-more', _clickCount)
          this.$cookies.set('pid', 9999999999)
          this.portfoliosGetAmount = this.portfoliosDisplayPerPage
          this.portfoliosDisplayTotal = (parseInt(this.$cookies.get('click-count-more')) - 1) * this.portfoliosDisplayPerPage
        } else if (k === 'prev-click') {
          this.$cookies.set('click-count-more', this.$cookies.get('click-count-more'))
          this.portfoliosGetAmount = parseInt(this.$cookies.get('click-count-more')) * this.portfoliosDisplayPerPage
          this.portfoliosDisplayTotal = this.portfoliosDisplayTotal
        } else {
          this.$cookies.set('click-count-more', 1)
          this.$cookies.set('pid', 0)
          this.portfoliosGetAmount = this.portfoliosDisplayPerPage
          this.portfoliosDisplayTotal = (parseInt(this.$cookies.get('click-count-more')) - 1) * this.portfoliosDisplayPerPage
        }

        var uri2 = baseURI + '/portfolios/api/portfolio/' + v + '/'
        uri2 += this.portfoliosDisplayTotal + '/' + this.portfoliosGetAmount + '/'
        obj.work.value = v

        // console.log(uri2)

        this.$http.get(`${uri2}`).then((result) => {
          if (k !== 'more') { // for init
            this.portfoliosDisplayTotal = result.data.length
            // console.log('--> ' + this.portfoliosDisplayTotal)
            this.portfolios = result.data
          } else {  // for more
            this.portfoliosDisplayTotal += result.data.length
            for (var i = 0; i < result.data.length; i++) {
              this.portfolios.push(result.data[i])
            }
          }
          obj.portfolio_display_total.value = this.portfoliosDisplayTotal
          this.$refs.topProgress.done()
        }).catch(function (e) {
          console.log(e)
          // this.$refs.topProgress.fail()
        })

        // document.location.hash = this.portfoliosDisplayTotal + 12
        // console.log(this.portfoliosDisplayTotal)
        // console.log(document.location.hash)
        // document.location.hash = '98'
      },
      getPortfolioTotal () {
        var obj = document.myform
        const baseURI = this.strUrl
        var projectKind = obj.work.value === '' ? 'all' : obj.work.value
        var uri = baseURI + '/portfolios/api/portfolio/total/' + projectKind

        this.$http.get(`${uri}`).then((result) => {
          this.portfoliosTotal = result.data.id__count
          // console.log('total : ' + this.portfoliosTotal.id__count)
        }).catch(function (e) {
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
      },
      setDefaultClickBtn (t) {
        if (t === 'all' || t === '') {
          $('.group li').eq(0).addClass('on')
        } else if (t === 'W1') {
          $('.group li').eq(1).addClass('on')
        } else if (t === 'M1') {
          $('.group li').eq(2).addClass('on')
        } else if (t === 'V1') {
          $('.group li').eq(3).addClass('on')
        }
      },
      setThumOver (event) {
        event.preventDefault()
        let obj = event.target
        $(obj).parent().parent().parent().next('.dim').fadeIn('fast')
      },
      setThumLeave (event) {
        event.preventDefault()
        let obj = event.target
        $(obj).fadeOut('fast')
      },
      goList () {
        var obj = document.myform
        obj.work.value = ''
        obj.portfolio_display_total.value = 0
      },
      scrollBehavior () {
        var pid = parseInt(this.$cookies.get('pid'))

        if (pid > 0) {
          document.location.hash = pid
          var hash = document.location.hash
          // alert(document.location.hash)
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500)
        }
      }
    },
    created () {
    },
    mounted () {
      var o = document.myform
      var t = o.work.value
      var search = ''

      if (t === '') {
        search = 'all'
      } else {
        search = t
      }

      var _click = this.$cookies.get('click-count-more')
      var _k = ''
      if (_click > 1) {
        _k = 'prev-click'
      } else {
        _k = 'init'
        this.$cookies.set('click-count-more', 1)
      }

      this.gnb()
      this.setListPortfolio(_k, search, 'load')
      this.setBtn()
      this.setDefaultClickBtn(t)
      this.getPortfolioTotal()
      headerScroll.setScrollableHeader('header', {topOffset: 40})

      // this.$cookies.set('count', 13)
      // console.log(this.$cookies.get('count'))
      // this.$cookies.set('click-count-more', 1)
    },
    updated () {
      this.scrollBehavior()
    },
    watch: {
      portfoliosTotal () {
        // console.log(this.portfoliosDisplayTotal + '-' + this.portfoliosTotal)
        // if (this.portfoliosDisplayTotal === 0) { //
        //   $('.btn_more_list').hide()
        // } else if (this.portfoliosDisplayTotal > 0 && this.portfoliosDisplayTotal < this.portfoliosTotal) {
        //   $('.btn_more_list').show()
        // } else if (this.portfoliosDisplayTotal === this.portfoliosTotal) {
        //   $('.btn_more_list').hide()
        // }
        if (this.portfoliosTotal > this.portfoliosDisplayPerPage) {
          $('.btn_more_list').show()
        } else {
          $('.btn_more_list').hide()
        }
      },
      portfolios () {
        // console.log('portfolios : ' + this.portfoliosDisplayTotal + '-' + this.portfoliosTotal)
        if (this.portfoliosTotal > 0 && this.portfoliosDisplayTotal >= this.portfoliosTotal) {
          $('.btn_more_list').hide()
        }
      }
    },
    components: {
      vueTopprogress
    }
  }
</script>


<style>
  .wrapper.work header .group {text-align:center;}
  .wrapper.work header .group li {display:inline-block; margin:0 3px;}
  .wrapper.work header .group li.on {padding-left:11px; background:url('/static/v2017/images/bg_title01.gif') 0 0 no-repeat;}
  .wrapper.work header .group li a {
    display:inline-block; height:42px; line-height:42px;
    color:#0fa7ea; font-size:11px; font-family:'Quantico'; font-weight:400; text-align:center;
    padding:0 52px 0 15px;
  }
  .wrapper.work header .group li.on a, .wrapper.work header .group li.over a {color:#fff;}
  .wrapper.work header .group li.all {margin-left:100px;}
  .wrapper.work header .group li.web a {background:url('/static/v2017/images/icon_group_web.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile a {background:url('/static/v2017/images/icon_group_mobile.png') 64px center no-repeat; padding-right:40px;}
  .wrapper.work header .group li.video01 a {background:url('/static/v2017/images/icon_group_video.png') 58px center no-repeat; padding-right:45px;}
  .wrapper.work header .group li.all.on a, .wrapper.work header .group li.all.over a {background:#00a1e9 url('/static/v2017/images/icon_group_all_on.png') 52px center no-repeat;}
  .wrapper.work header .group li.web.on a, .wrapper.work header .group li.web.over a {background:#00a1e9 url('/static/v2017/images/icon_group_web_on.png') 52px center no-repeat;}
  .wrapper.work header .group li.mobile.on a, .wrapper.work header .group li.mobile.over a {background:#00a1e9 url('/static/v2017/images/icon_group_mobile_on.png') 64px center no-repeat;}
  .wrapper.work header .group li.video01.on a, .wrapper.work header .group li.video01.over a {background:#00a1e9 url('/static/v2017/images/icon_group_video_on.png') 58px center no-repeat;}
  .wrapper.work header .group_m {display:none;}
  .wrapper.work header .group_m select {
    width:90px !important; height:30px;
    color:#00a1e9; font-size:13px; font-family:'Rajdhani'; font-weight:700;
    padding-left:10px; margin: 0 35px 0 0; border:1px solid #e9eef3;
    background:#fff url('/static/v2017/images/btn_select.png') 90% 50% no-repeat;
    -webkit-appearance:none; /* 화살표 없애기 for chrome*/
    -moz-appearance:none;    /* 화살표 없애기 for firefox*/
    appearance:none;         /* 화살표 없애기 공통*/
  }
  .wrapper.work header .group_m select::-ms-expand {
    display:none;            /* 화살표 없애기 for IE10, 11*/
  }
  .btn_more_list {height:11px; padding:20px 0;}
  .btn_more_list img {vertical-align:top;}

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.work header .group {display:none;}
    .wrapper.work header .group_m {display:block; position:absolute; top:2rem; right:4%;}
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
