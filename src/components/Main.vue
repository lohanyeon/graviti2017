<template id="">

  <div class="wrapper main">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <section class="contents">
      <!-- mainVisual -->
      <div id="mainVisual">
        <div class="visual">
          <ul>
            <li v-if="hasResult" v-for="(portfolio, key) in portfolios" :key="portfolio.pk"><img v-bind:src="'http://new.graviti.co.kr/media/' + portfolio.fields.bg_image_vertical" v-bind:alt="portfolio.fields.project_kor_name + '의 대표 이미지'"></li>
            <!-- <li><img src="/static/v2017/images/main_visual_02.jpg" alt=""></li>
            <li><img src="/static/v2017/images/main_visual_03.jpg" alt=""></li> -->
          </ul>
        </div>
        <div class="ment">
          <ul>
            <li v-bind:class="{on: key===0}" v-if="hasResult" v-for="(portfolio, key) in portfolios" :key="portfolio.pk">
              <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt="바코드"></p>
              <div class="title">
                <p class="year">{{portfolio.making_year}}</p>
                <dl>
                  <dt v-html="portfolio.fields.project_eng_name"></dt>
                  <dd>{{portfolio.fields.project_kor_name}}</dd>
                </dl>
                <a v-bind:href="'/work/' + portfolio.pk" class="more"><img src="/static/v2017/images/btn_main_more.png" alt=""></a>
              </div>
            </li>
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
  import {vueTopprogress} from 'vue-top-progress'
  import $ from 'jQuery'
  import {TweenMax, Power4} from 'gsap'

  export default {
    name: 'mainApp',
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
      setListPortfolio () {
        // const baseURI = '/apis'
        const baseURI = 'http://new.graviti.co.kr'
        // const baseURI = 'http://localhost:3000'
        this.$http.get(`${baseURI}/portfolios/api/main/portfolio/`)
        // this.$http.get(`${baseURI}`)
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
    },
    components: {
      vueTopprogress
    }
  }

  var rollingBgImage = function () {
    var time = 1.3
    var delay = 0
    var count = 0
    var total = $('.visual ul li').length
    var h = $('.wrapper').height()
    var objCurr = null
    var objPrev = null
    $('.visual ul li').css({position: 'absolute'})
    $('.visual ul li').each(function () {
      if (count === 0) {
        objPrev = $('.visual ul li').eq(total - 1)
      } else {
        objPrev = $(this).prev()
      }
      objCurr = $(this)
      $(objCurr).css({top: h * -1})
      console.log(objCurr, objPrev)
      $(objCurr).addClass('on')
      TweenMax.fromTo($(objCurr), time
        , {top: h * -1}
        , {top: 0, ease: Power4.easeOut}
      ).delay(delay)

      $(objPrev).css({top: 0})
      $(objPrev).addClass('on')
      TweenMax.fromTo($(objPrev), time
        , {top: 0}
        , {top: h, ease: Power4.easeOut}
      ).delay(delay)
      delay += 5
      count++
    })
  }

  window.onload = function () {
    rollingBgImage()
  }
</script>
