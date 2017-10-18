<template id="">
  <div class="wrapper-contact">

  		<!-- <a href="#skip_content" title="본문으로 바로가기" class="skip">본문 바로가기</a> -->
  		<header class="header">
  			<div class="hollow"></div>
  			<div class="fl"><h1 class="logo"><router-link v-bind:to="{ name: 'Index' }"><img src="/static/v2017/images/logo_blue.png" alt=""></router-link></h1></div>
  			<aside class="fr">
  				<nav>
  					<ul>
  						<!-- <li><a href="#"><img src="/static/v2017/images/brochure_download.png" alt="브로셔 다운로드"></a></li>
  						<li><a href="#"><img src="/static/v2017/images/project_request.png" alt="프로젝트 의뢰"></a></li> -->
  						<!-- <li><a href="#" id="showRightPush"><img src="/static/v2017/images/menu_icon.png" alt="메뉴"></a></li> -->
  					</ul>
  				</nav>
  			</aside>
  		</header>

  		<div class="contents">
  			<article>
  				<p>Stunning Result in Digital Ecology</p>
  				<div class="col-2 mcol-12"></div>
  				<div class="col-3 mcol-12">
  					<div class="ceo">
  						<p class="title">CEO</p>
  						<p class="content">대표 우재을</p>
  						<p class="content">WOO, JAE EUL</p>
  					</div>
  				</div>
  				<div class="col-4 mcol-12">
  					<div class="address">
  						<p class="title">ADDRESS</p>
  						<p class="content">(주)그라비티 인터렉티브</p>
  						<p class="content">서울특별시 마포구 동료로 107,302호</p>
  					</div>
  				</div>
  				<div class="col-3 mcol-12">
  					<div class="contactus">
  						<p class="title">CONTACT US</p>
  						<p class="content">TEL. 02.333.9230</p>
  						<p class="content">FAX. 02.333.8893</p>
  						<p class="content">EMAIL. jacky@graviti.co.kr</p>
  					</div>
  				</div>
          <div class="row mrow">
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
          </div>
  			</article>
  		</div>

  	</div>
</template>

<script>
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
