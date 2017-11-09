<template>
  <div id="app">

    <header>
      <h1><router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();"><img src="/static/v2017/images/logo_black.png" alt="GRAVITI Interactive"></router-link></h1>
      <a href="#" class="gnb_menu" id="showRightPush"><img src="/static/v2017/images/gnb_menu.png" alt="메뉴"></a>
    </header>

    <footer>
      <address>
        Tel. 02.333.9230<br>
        Cell. 010.5090.9788<br>
        Fax. 02.333.8893
      </address>
      <p>서울특별시 마포구 동교로 107, 302호</p>
    </footer>

    <!-- <div class="gnb-btn" style="display:none;"><a href="#" id="showRightPush"><img src="/static/v2017/images/menu_icon_blue.png" alt="메뉴"></a></div>

    <nav class="graviti-menu graviti-menu-vertical graviti-menu-right" id="graviti-menu-s2" style="display:none;">
      <div class="gnb-wrapper">
      	<div class="header">
  	    	<div class="hollow"></div>
  	    	<div class="fl">
  		    	<h1><router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();"><img src="/static/v2017/images/logo.png" alt="" /></router-link></h1>
  		    </div>
  		    <div class="fr">
  		    	<p><a href="#" id="hideRightPush"><img src="/static/v2017/images/menu_icon_blue.png" alt="" /></a></p>
  		    </div>
        </div>
    		<div class="contents">
    			<div class="menu">
    				<ul>
    					<li><span class="sup">01</span><span class="title"><router-link v-bind:to="{ name: 'About' }" onclick="closeGnb();">ABOUT</router-link></span></li>
    					<li><span class="sup">02</span><span class="title"><router-link v-bind:to="{ name: 'Work' }" onclick="closeGnb();">WORK</router-link></span></li>
    					<li><span class="sup">03</span><span class="title"><router-link v-bind:to="{ name: 'Contact' }" onclick="closeGnb();">CONTACT</router-link></span></li>
    				</ul>
    			</div>
    			<div class="copy">
    				<div class="barcode"><img src="/static/v2017/images/barcode.png" alt="" /></div>
    				<div class="ltext">
    					<p class="title">DIGITAL AGENCY</p>
    					<p class="detail">e-Service Strategy & Contents<br/> Responsive Web (N-devices)<br/> Mobile (Native & Hybrid App)<br/> Next Web Technology</p>
    				</div>
    				<div class="rtext">
    					<p class="title">MEDIA LAB.</p>
    					<p class="detail">New Media Creative<br/>Media Fagade / Motion Art<br/>Biz video & Interview Reel<br/>2D effect, Character</p>
    				</div>
    				<div class="over">
    					<a href="#"><img src="/static/v2017/images/btn_over.png" alt="" /></a>
    				</div>
    			</div>
    			<div class="copy-over">
    				<p class="title">그라비티 인터렉티브(주)의  그래픽 모티브</p>
    				<p class="detail">선도적인 디지털사업자로서 아이덴티티를 확립한 GRAVITI의 문자 2진수를<br/>그래픽으로 변형한 형태로서 GR을 태표하는 패턴</p>
    				<div class="gr"><img src="/static/v2017/images/graviti_gr.jpg" alt="" /></div>
    			</div>
    		</div>
    		<div class="footer">
    			<div class="text">
    				<div class="fl">
    					<div class="address">
    						<ul>
    							<li>TEL. 02.333.9230</li>
    							<li>CELL. 010.5090.9788</li>
    							<li>FAX. 02.333.8893</li>
    							<li>서울특별시 마포구 동교로 107, 302호</li>
    						</ul>
    					</div>
    				</div>
    			</div>
    		</div>
      </div>
    </nav> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
