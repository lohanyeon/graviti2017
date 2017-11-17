<template id="">
  <div class="wrapper contact">

    <header class="sub_header">
      <h1 class="logo"><router-link v-bind:to="{ name: 'Main' }"><img src="/static/v2017/images/logo_black.png" alt=""></router-link></h1>
      <h2 class="title01">CONTACT</h2>
      <a href="#" id="showRightPush" class="gnb_menu"><img src="/static/v2017/images/gnb_menu_black.png" alt="메뉴"></a>
    </header>

    <!-- contact contents -->
    <section id="contentWrap" class="section-contact">
      <h3 class="skip">Contact</h3>
      <!-- contents -->
      <div class="contents">
  			<article>
          <!-- map -->
          <div class="map"></div>
          <!-- //map -->

          <div class="detail">
            <div class="box-left fc-blue">
              <dl>
                <dt>DIGITAL Agency</dt>
                <dd>e-Service Strategy &amp; Contents <br>Responsive Web (N-devices) <br>Mobile (Native &amp; Hybrid App) <br>Next Web Technology</dd>
              </dl>
              <dl class="last">
                <dt>MEDIA LAB.</dt>
                <dd>New Media Creative <br>Media Fagade / Motion Art <br>Biz video & Interview Reel <br>3D effect, Character</dd>
              </dl>
            </div>
            <div class="box-center">
              <dl>
                <dt class="tit fc-blue">ADDRESS</dt>
                <dd><strong class="show">(주) 그라비티 인터렉티브</strong>서울특별시 마포구 동교로 107, 302호</dd>
              </dl>
              <dl class="last">
                <dt class="tit fc-blue">CEO</dt>
                <dd><strong class="show">대표 우재을</strong>Woo, Jae Eul</dd>
              </dl>
            </div>
            <div class="box-right">
              <dl>
                <dt class="tit fc-blue">CONTATC US</dt>
                <dd>
                  <strong>TEl.</strong> 02.333.9230<br>
                  <strong>FAX.</strong> 02.333.8893
                </dd>
              </dl>
              <p class="qr-code"><img src="/static/v2017/images/icon_qr-code.jpg" alt="그라비티인터랙티브 QR 코드"></p>
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

<style>
  .section-contact article {margin:0 60px;}
  .section-contact article .map {width:100%; height:404px; background-color:#00a1e9;}
  .section-contact .detail {padding:60px 0 110px;}
  .section-contact .detail:after {content:""; display:block; clear:both;}
  .section-contact .detail .box-left {float:left; width:40%; font-family:'Rajdhani';}
  .section-contact .detail .box-left .last {margin-top:30px;}
  .section-contact .detail .box-left dl dt {font-size:14px; font-weight:500; text-transform:uppercase;}
  .section-contact .detail .box-left dl dd {font-size:11px; line-height:1.4; margin-top:10px;}
  .section-contact .detail .box-center, .section-contact .detail .box-right {float:left; width:30%;}
  .section-contact .detail .box-center .last, .section-contact .detail .box-right .last, .section-contact .detail .qr-code {margin-top:40px;}
  .section-contact .detail .box-center dl dt, .section-contact .detail .box-right dl dt {font-family:'Rajdhani'; font-weight:600; font-size:14px; text-transform:uppercase; margin-bottom:15px;}
  .section-contact .detail .box-center dl dd, .section-contact .detail .box-right dl dd {line-height:1.4; font-weight:300;}
  .section-contact .detail .box-center dl dd  strong, .section-contact .detail .box-right dl dd strong {font-weight:500;}

  .qr-code {}
  /* tablet */
  @media all and (max-width:1024px) {
    .section-contact article {margin:0 40px;}
    .section-contact .detail {padding:8% 0 12%;}
    .section-contact .detail .box-left {display:none;}
    .section-contact .detail .box-center, .section-contact .detail .box-right {width:50%;}
    .section-contact .detail .box-center dl {padding:0 10% 0 25%;}
    .section-contact .detail .box-right dl, .section-contact .detail .box-right .qr-code {padding:0 10% 0 13%;}
  }

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.contact h2 {display:none;}
    .section-contact article {margin:0 4%;}
    .section-contact article .map {height:200px;}
    .section-contact .detail dl dt {margin-bottom:7px !important;}
    .section-contact .detail dl dd {font-size:13px;}
    .section-contact .detail .box-center .last, .section-contact .detail .box-right .last {margin-top:20px !important;}
    .section-contact .detail .box-center {float:none; width:100%; padding:0;}
    .section-contact .detail .box-center dl {padding-left:10%;}
    .section-contact .detail .box-right {position:relative; float:none; width:100%;}
    .section-contact .detail .box-right dl {padding-left:10%; margin-top:40px;}
    .section-contact .detail .box-right .qr-code {position:absolute; top:0; right:0; margin:0;}
  }
</style>

<script>
  import 'babel-polyfill'
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB83zz0A7CYv8ZQ5v9F-XmbTkGkMvoADzs'
    }
  })

  export default {
    data () {
      return {
        center: {lat: 37.554974, lng: 126.913835},
        markers: [{
          position: {lat: 37.554974, lng: 126.913835}
        }]
      }
    }
  }
</script>
