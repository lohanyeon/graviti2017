<template id="">

  <div class="wrapper main">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <header class="main_header">
      <h1>
        <router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();">
          <img src="/static/v2017/images/logo.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <a href="#" class="gnb_menu" id="showRightPush">
        <img src="/static/v2017/images/gnb_menu.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴" class="mobile">
      </a>
    </header>

    <footer>
      <address>
        Tel. 02.333.9230<br>
        Cell. 010.5090.9788<br>
        Fax. 02.333.8893
      </address>
      <p>서울특별시 마포구 동교로 107, 302호</p>
      <p class="copyright">© Copyright 2017</p>
      <ul class="arrow">
        <li class="arr_up"><a href="javascript: main.prevItem()"><img src="/static/v2017/images/arr_up.png" alt="이전"><img src="/static/v2017/images/arr_up_black.png" alt="이전" class="mobile"></a></li>
        <li class="arr_down"><a href="javascript: main.nextItem()"><img src="/static/v2017/images/arr_down.png" alt="다음"><img src="/static/v2017/images/arr_down_black.png" alt="다음" class="mobile"></a></li>
      </ul>
    </footer>

    <section class="contents">
      <!-- mainVisual -->
      <div id="mainVisual">
        <div class="visual">
          <ul>
            <li v-if="hasResult" v-for="(portfolio, key) in portfolios" :key="portfolio.pk">
              <img v-bind:src="'http://new.graviti.co.kr/media/' + portfolio.fields.bg_image_vertical" v-bind:alt="portfolio.fields.project_kor_name + '의 대표 이미지'">
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
  import {vueTopprogress} from 'vue-top-progress'

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
</script>
