<template id="">

  <div class="wrapper main">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <header class="main_header">
      <h1>
        <router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();">
          <img src="/static/v2017/images/logo.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_m.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <a href="#" class="gnb_menu" id="showRightPush">
        <img src="/static/v2017/images/gnb_menu.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_m.png" alt="메뉴" class="mobile">
      </a>
    </header>

    <footer>
      <address>
        Tel. 02.333.9230<br>
        Cell. 010.5090.9788<br>
        Fax. 02.6919.2699
      </address>
      <p>서울특별시 마포구 동교로 107, 302호</p>
      <p class="copyright"><a href="#" v-on:click="visual('pause')" style="color:#FFF">© Copyright</a> <a href="#" v-on:click="visual('resume')" style="color:#FFF">2017</a></p>
      <ul class="arrow">
        <li class="arr_up"><a href="#" v-on:click="visual('up')"><img src="/static/v2017/images/arr_up.png" alt="이전"><img src="/static/v2017/images/arr_up_black.png" alt="이전" class="mobile"></a></li>
        <li class="arr_down"><a href="#" v-on:click="visual('down')"><img src="/static/v2017/images/arr_down.png" alt="다음"><img src="/static/v2017/images/arr_down_black.png" alt="다음" class="mobile"></a></li>
      </ul>
    </footer>

    <section class="contents">
      <!-- mainVisual -->
      <div id="mainVisual">
        <div class="visual">
          <ul style="position:absolute;">
            <li v-if="hasResult" v-for="(portfolio, key) in portfolios" :key="portfolio.pk" class="v1" :style="'background:url(\'' + strMediaUrl + portfolio.fields.bg_image_horizontal + '\') center center no-repeat; background-size:cover;'">
              <!-- <img v-bind:src="'' + strMediaUrl + portfolio.fields.bg_image_vertical" v-bind:alt="portfolio.fields.project_kor_name + '의 대표 이미지'"> -->
              <div class="video-area" v-if="portfolio.fields.project_kind==='V1'">
                <video v-bind:id="'video' + portfolio.pk" autoplay>
                  <source v-bind:src="strMediaUrl + portfolio.fields.main_video" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
              <div class="ment-text">
                <div>
                  <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt="바코드"></p>
                  <div class="title">
                    <p class="year">{{portfolio.making_year}}</p>
                    <dl>
                      <dt v-html="portfolio.fields.project_eng_name"></dt>
                      <dd>{{portfolio.fields.project_kor_name}}</dd>
                    </dl>
                    <router-link :to="{ name: 'WorkDetail', params: { id: portfolio.pk }}" class="more"><img src="/static/v2017/images/btn_main_more.png" alt="포토폴리오 상세보기"></router-link>
                  </div>
                </div>
              </div>
            </li>
            <!-- <li><img src="/static/v2017/images/main_visual_02.jpg" alt=""></li>
            <li><img src="/static/v2017/images/main_visual_03.jpg" alt=""></li> -->
          </ul>
        </div>
      </div>
      <!-- //mainVisual -->

      <!-- grid -->
      <div class="intro_grid">
        <div class="grid-line"><span><img src="/static/v2017/images/intro_tit_g.png" alt="G"></span></div>
        <div class="grid-line line2"><span><img src="/static/v2017/images/intro_tit_r.png" alt="R"></span></div>
        <div class="grid-line line3"><span><img src="/static/v2017/images/intro_tit_a.png" alt="A"></span></div>
        <div class="grid-line line4"><span><img src="/static/v2017/images/intro_tit_v.png" alt="V`"></span></div>
        <div class="grid-line line5"><span><img src="/static/v2017/images/intro_tit_i.png" alt="I"></span></div>
        <div class="grid-line line6"><span><img src="/static/v2017/images/intro_tit_t.png" alt="T"></span></div>
        <div class="grid-line line7"><span><img src="/static/v2017/images/intro_tit_i.png" alt="I"></span></div>
      </div>
      <!-- //grid -->
    </section>
  </div>

</template>

<script type="text/javascript">
  import $ from 'jQuery'
  import {vueTopprogress} from 'vue-top-progress'
  import classie from 'desandro-classie'
  import {TweenMax, Power4} from 'gsap'

  export default {
    name: 'mainApp',
    data: function () {
      return {
        portfolios: [],
        intervalId: '',
        isProcess: '',
        interval: 7500,
        strUrl: 'http://new.graviti.co.kr',
        strMediaUrl: 'http://new.graviti.co.kr/media/'
      }
    },
    computed: {
      hasResult: function () {
        return this.portfolios.length > 0
      }
    },
    methods: {
      visual (v) {
        var down = function () {
          var top = $(window).height() * -1
          var target = $('#mainVisual .visual ul')
          var obj = $('#mainVisual .visual ul li').eq(0)
          var nextObj = $('#mainVisual .visual ul li').eq(0).clone()

          target.append(obj)

          $('#mainVisual .visual ul li').eq(0).after(nextObj)

          var topObj = target.children('li:eq(0)')
          var isVideo = topObj.children('.video-area').length

          if (isVideo) {
            // console.log(videoObj.children('.video-area').children('video').prop('id'))
            var id = topObj.children('.video-area').children('video').prop('id')
            document.getElementById(id).play()
          }

          TweenMax.fromTo(target, 1,
             {top: top},
             {top: 0, onComplete: completeDown, ease: Power4.easeOut}
          )

          var innerObj = topObj.children('.ment-text')
          var w = innerObj.width()
          TweenMax.fromTo(innerObj, 0.8,
             {left: w * -1 * 500},
             {left: 0, ease: Power4.easeOut}
          )
        }
        var up = function () {
          var top = $(window).height() * -1
          var target = $('#mainVisual .visual ul')
          var len = $('#mainVisual .visual ul li').length
          var obj = $('#mainVisual .visual ul li').eq(len - 1)

          $('#mainVisual .visual ul li').eq(0).after(obj)

          var t = $('#mainVisual .visual ul li').eq(0).clone()
          $('#mainVisual .visual ul li').eq(1).after(t)

          var topObj = target.children('li:eq(1)')
          var isVideo = topObj.children('.video-area').length

          if (isVideo) {
            var id = topObj.children('.video-area').children('video').prop('id')
            document.getElementById(id).play()
          }

          TweenMax.fromTo(target, 1,
             {top: 0},
             {top: top, onComplete: completeUp, ease: Power4.easeOut}
          )

          var innerObj = topObj.children('.ment-text')
          var w = innerObj.width()
          TweenMax.fromTo(innerObj, 0.8,
             {left: w * 500},
             {left: 0, ease: Power4.easeOut}
          )
        }
        var completeDown = function () {
          $('#mainVisual .visual ul li').eq(1).remove()
        }
        var completeUp = function () {
          // $('#mainVisual .visual ul').css({top: 0})
          $('#mainVisual .visual ul li').eq(0).remove()
          $('#mainVisual .visual ul').css({top: 0})
        }
        var disabledYN = function (v) {
          $('.arr_up').attr('disabled', v)
          $('.arr_down').attr('disabled', v)
        }

        var videoStop = function () {
          $('#mainVisual .visual ul li').each(function () {
            var isVideo = $(this).children('.video-area')
            if (isVideo.length) {
              var id = isVideo.children('video').prop('id')
              document.getElementById(id).pause()
            }
          })
        }

        if (v === 'init') {
          this.intervalId = setInterval(down, this.interval)
          $(document).ready(function () {
            var target = $('#mainVisual .visual ul')
            var topObj = target.children('li:eq(0)')
            var isVideo = topObj.children('.video-area').length

            if (isVideo) {
              // console.log(videoObj.children('.video-area').children('video').prop('id'))
              var id = topObj.children('.video-area').children('video').prop('id')
              document.getElementById(id).play()
            }

            var innerObj = topObj.children('.ment-text')
            var w = innerObj.width()
            TweenMax.fromTo(innerObj, 0.8,
               {left: w * -1 * 500},
               {left: 0, ease: Power4.easeOut}
            )
          })
        } else if (v === 'up') {
          this.isProcess = $('.arr_up').attr('disabled')

          disabledYN(true)
          if (this.isProcess !== 'disabled') {
            videoStop()
            up()
            clearInterval(this.intervalId)
            this.intervalId = setInterval(up, this.interval)

            setTimeout(function () {
              disabledYN(false)
            }, 1000)
          }
        } else if (v === 'down') {
          this.isProcess = $('.arr_down').attr('disabled')

          disabledYN(true)
          if (this.isProcess !== 'disabled') {
            videoStop()
            down()
            clearInterval(this.intervalId)
            this.intervalId = setInterval(down, this.interval)

            setTimeout(function () {
              disabledYN(false)
            }, 1000)
          }
        } else if (v === 'pause') {
          clearInterval(this.intervalId)
        } else if (v === 'resume') {
          this.intervalId = setInterval(down, this.interval)
        }
      },
      gnb () {
        var menuRight = document.getElementById('graviti-menu-s2')
        var showRightPush = document.getElementById('showRightPush')
        var body = document.body

        showRightPush.onclick = function () {
          classie.toggle(this, 'active')
          classie.toggle(body, 'graviti-menu-push-toleft')
          classie.toggle(menuRight, 'graviti-menu-open')
        }
      },
      setListPortfolio () {
        const baseURI = this.strUrl
        this.$http.get(`${baseURI}/portfolios/api/main/portfolio/`)
          .then((result) => {
            // console.log(result.data)
            this.portfolios = result.data
            this.$refs.topProgress.done()
          })
          .catch(function (e) {
            console.log(e)
            // this.$refs.topProgress.fail()
          })
      }
    },
    created () {
    },
    mounted () {
      // do something after mounting vue instance
      this.$refs.topProgress.start()
      this.setListPortfolio()
      this.visual('init')
      this.gnb()
    },
    beforeDestroy () {
      clearInterval(this.intervalId)
    },
    components: {
      vueTopprogress
    }
  }
</script>
