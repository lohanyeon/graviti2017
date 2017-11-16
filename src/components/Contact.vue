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
              <dl>
                <dt>MEDIA LAB.</dt>
                <dd>New Media Creative <br>Media Fagade / Motion Art <br>Biz video & Interview Reel <br>3D effect, Character</dd>
              </dl>
            </div>
            <div class="box-right">
              <dl class="">
                <dt class="tit fc-blue">ADDRESS</dt>
                <dd></dd>
              </dl>
              <dl class="">
                <dt class="tit fc-blue"></dt>
                <dd></dd>
              </dl>
              <dl class="">
                <dt class="tit fc-blue">CEO</dt>
                <dd></dd>
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
  .section-contact .detail .box-left {float:left; width:40%;}
  .section-contact .detail .box-right {float:left; width:60%;}
  .section-contact .detail .box-right dl {width:50%;}

  /* tablet */
  @media all and (max-width:1024px) {
    .section-contact article {margin:0 40px;}
  }

  /* mobile */
  @media all and (max-width:767px) {
    .wrapper.contact h2 {display:none;}
    .section-contact article {margin:0 4%;}
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
