<template>
  <div id="app">

    <section class="graviti-menu graviti-menu-vertical graviti-menu-right" id="graviti-menu-s2">
      <div class="sub_main">
        <div class="sub_header">
          <h1><router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();"><img src="/static/v2017/images/logo.png" alt="GRAVITI Interactive" /></router-link></h1>
          <a href="#" id="hideRightPush" onclick="closeGnb();" class="gnb_menu"><img src="/static/v2017/images/gnb_menu_back.png" alt="Back" /></a>
        </div>

        <div class="sub_cont">
          <nav id="gnb">
            <ul>
              <li><span>01</span> <router-link v-bind:to="{ name: 'About' }" onclick="closeGnb();">ABOUT</router-link></li>
              <li><span>02</span> <router-link v-bind:to="{ name: 'Work' }" onclick="closeGnb();">WORK</router-link></li>
              <li><span>03</span> <router-link v-bind:to="{ name: 'Contact' }" onclick="closeGnb();">CONTACT</router-link></li>
            </ul>
          </nav>
          <article class="contR">
            <div class="on"> <!-- <img src="/static/v2017/images/sub_main_txt.png" alt=""> -->
              <p class="barcode"><img src="/static/v2017/images/sub_main_barcode.png" alt=""></p>
              <div class="txt">
                <dl>
                  <dt>DIGITAL Agency</dt>
                  <dd>e-Service Strategy &amp; Contents <br>Responsive Web (N-devices) <br>Mobile (Native & Hybrid App) <br>Next Web Technology</dd>
                </dl>
                <dl>
                  <dt>MEDIA LAB.</dt>
                  <dd>New Media Creative <br>Media Fagade / Motion Art <br>Biz video &amp; Interview Reel<br> 3D effect, Character</dd>
                </dl>
              </div>
              <a href="#" class="btn_over">OVER</a>
            </div>
            <div class="over">
              <dl>
                <dt>그라비티 인터렉티브(주)의 그래픽 모티브</dt>
                <dd>선도적인 디지털사업자로서 아이덴티티를 확립한 GRAVITI의 문자 2진수를 그래픽으로 변형한 형태로서 GR을 대표하는 패턴</dd>
              </dl>
              <p class="mt40"><img src="/static/v2017/images/sub_main_ci.png" alt="GRAVITI 그래픽 모티브"></p>
              <!-- <img src="/static/v2017/images/sub_main_txt_over.png" alt=""> -->
            </div>
          </article>
        </div>

        <div class="sub_footer">
          <address>
            Tel. 02.333.9230<br>
            Cell. 010.5090.9788<br>
            Fax. 02.333.8893
          </address>
          <p>서울특별시 마포구 동교로 107, 302호</p>
        </div>
      </div>
      <!-- <div class="gnb-wrapper">
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
      </div> -->
    </section>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
