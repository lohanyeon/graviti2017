<template>
  <div id="app">

    <section class="graviti-menu graviti-menu-vertical graviti-menu-right" id="graviti-menu-s2">
      <div class="sub_main">
        <div class="sub_header">
          <h1>
            <router-link v-bind:to="{ name: 'Main' }" onclick="closeGnb();">
              <img src="/static/v2017/images/logo.png" alt="GRAVITI Interactive" />
              <img src="/static/v2017/images/logo_m.png" alt="GRAVITI Interactive" class="mobile" />
            </router-link>
          </h1>
          <a href="#" id="hideRightPush" onclick="closeGnb();" class="gnb_menu">
            <img src="/static/v2017/images/gnb_menu_back.png" alt="Back" />
            <img src="/static/v2017/images/gnb_menu_back_m.png" alt="Back" class="mobile" />
          </a>
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
            Fax. 02.6919.2699
          </address>
          <p>서울특별시 마포구 동교로 107, 302호</p>
        </div>
      </div>
    </section>

    <transition name="view" mode="out-in">
      <router-view/>
    </transition>

    <form name="myform" method="post">
      <input type="hidden" name="work" id="work" />
      <input type="hidden" name="portfolio_display_total" id="portfolio_display_total" value="0" />
      <input type="hidden" name="from_detail" id="from_detail" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .view-enter-active, .view-leave-active {
    transition: opacity .3s
  }
  .view-enter, .view-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
