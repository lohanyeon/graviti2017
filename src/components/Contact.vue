<template id="">
  <div class="wrapper contact">

    <header class="sub_header">
      <h1 class="logo">
        <router-link v-bind:to="{ name: 'Main' }">
          <img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive">
          <img src="/static/v2017/images/logo_black_m.png" alt="GRAVITI Interactive" class="mobile">
        </router-link>
      </h1>
      <h2 class="title01">CONTACT</h2>
      <a href="https://www.youtube.com/@GRAVITIinteractive" target="_blank" id="youtube" class="youtube">
        <img src="/static/v2017/images/youtube.png" alt="youtube" style="width:42px;height:42px;">
        <img src="/static/v2017/images/youtube.png" alt="youtube" class="mobile" style="width:42px;height:42px;">
      </a>
      <a href="#" id="showRightPush" class="gnb_menu">
        <img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴">
        <img src="/static/v2017/images/gnb_menu_black_m.png" alt="메뉴" class="mobile">
      </a>
    </header>

    <!-- contact contents -->
    <section id="contentWrap" class="section-contact">
      <h3 class="skip">Contact</h3>
      <!-- contents -->
      <div class="contents">
  			<article>
          <!-- map -->
          <div class="map">
            <gmap-map
              :center="center"
              :zoom="14"
              map-type-id="hybrid"
              style="width: 100%; height: 100%"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
          <!-- //map -->

          <div class="detail">
            <!-- <div class="box-left fc-blue">
              <dl>
                <dt>DIGITAL Agency</dt>
                <dd>e-Service Strategy &amp; Contents Responsive <br>Web (N-devices) Mobile (Native &amp; Hybrid <br>App) Next Web Technology</dd>
              </dl>
              <dl class="last">
                <dt>MEDIA LAB.</dt>
                <dd>New Media Creative Media Fagade / Motion <br>Art Biz video & Interview Reel 3D effect, <br>Character</dd>
              </dl>
            </div> -->
            <div class="box-left">
              <dl>
                <dt class="tit fc-blue">ADDRESS</dt>
                <dd><strong>(주) 그라비티 인터렉티브</strong> 서울시 송파구 정의로7길 13, 오피스1002호</dd>
              </dl>
            </div>
            <div class="box-right">
              <dl>
                <dt class="tit fc-blue">CONTACT US</dt>
                <dd>
                  <strong>TEL.</strong> <a href="tel:02-333-9230">02.333.9230</a>
                  <span class="ml5"><strong>FAX.</strong> 02.6919.2699</span>
                  <span class="ml5 m"><strong>e-mail.</strong> <a href="mailto:jacky@graviti.co.kr">jacky@graviti.co.kr</a></span>
                </dd>
              </dl>
              <!-- <p class="qr-code"><img src="/static/v2017/images/icon_qr-code.jpg" alt="그라비티인터랙티브 QR 코드"></p> -->
            </div>
          </div>

          <!-- <div class="row mrow">
          </div>
  				<div class="map" id="map" style="width:100%; height:50%;">
            <gmap-map
              :center="center"
              :zoom="14"
              style="width: 100%; height: 100%"
            >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </div> -->
  			</article>
  		</div>
      <!-- //contents -->
    </section>
    <!-- //contact contents -->

  </div>
</template>

<script type="text/javascript">
  import 'babel-polyfill'
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'
  import classie from 'desandro-classie'
  let headerScroll = require('header-scroll-up')

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDVKv8PtK8cpKcUDLwL709dlOo-KWgRfVo'
    }
  })

  export default {
    name: 'contactApp',
    data: function () {
      return {
        portfolio: [],
        center: {lat: 37.48526028818, lng: 127.11524474809303},
        markers: [{
          position: {lat: 37.48526028818, lng: 127.11524474809303}
        }]
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
  .section-contact article {margin:0 60px;}
  .section-contact article .map {width:100%; height:623px; background-color:#00a1e9;}
  .section-contact .detail {background-color:#f4f7f9; padding:40px 0; margin-bottom:60px;}
  .section-contact .detail:after {content:""; display:block; clear:both;}
  .section-contact .detail .box-left {float:left; width:48%; font-family:'Rajdhani'; text-align:center; padding:0 1%;}
  .section-contact .detail .box-left .last {margin-top:30px;}
  .section-contact .detail .box-left dl dt {display:inline; font-weight:700; text-transform:uppercase; margin-right:20px;}
  .section-contact .detail .box-left dl dd {display:inline; font-size:14px; line-height:1.4;}
  .section-contact .detail .box-right {float:left; width:48%; text-align:center; padding:0 1%;}
  .section-contact .detail .box-right .last, .section-contact .detail .qr-code {margin-top:40px;}
  .section-contact .detail .box-right dl dt {display:inline; font-family:'Rajdhani'; font-weight:600; text-transform:uppercase; margin-right:20px;}
  .section-contact .detail .box-right dl dd {display:inline; line-height:1.4; font-size:15px; font-weight:300;}
  .section-contact .detail .box-right dl dd strong {font-weight:500;}

  /* tablet */
  @media all and (max-width:1024px) {
    .section-contact article {margin:0 40px;}
    .section-contact .detail {padding:8% 0 12%; margin-bottom:40px;}
    /*.section-contact .detail .box-left {display:none;}*/
    .section-contact .detail .box-left {width:98%; padding-bottom:10px;}
    .section-contact .detail .box-left dl dt {display:block;}
    .section-contact .detail .box-right {width:98%;}
    .section-contact .detail .box-right dl dt {display:block;}
  }

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.contact h2 {display:none;}
    .section-contact article {margin:0 4%;}
    .section-contact article .map {height:200px;}
    .section-contact .detail {margin-bottom:4%;}
    .section-contact .detail dl dt {margin-bottom:7px !important;}
    .section-contact .detail dl dd {font-size:13px !important;}
    .section-contact .detail .box-right {position:relative; float:none; width:100%;}
    .section-contact .detail .box-right dl dd span.m {display:block; margin:0;}
  }
</style>
