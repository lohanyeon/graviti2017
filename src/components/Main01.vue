<template id="">

  <div class="wrapper main">

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
          <ul>
            <li class="v1">
              <div class="ment-text">
                <div>
                  <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt="바코드"></p>
                  <div class="title">
                    <p class="year">2017</p>
                    <dl>
                      <dt><p>HWAWOO <span>LAWFIRM</span> </p><p>WEBSITE</p></dt>
                      <dd>법무법인 화우 리뉴얼 프로젝트</dd>
                    </dl>
                    <router-link :to="{ name: 'WorkDetail', params: { id: portfolio.pk }}" class="more"><img src="/static/v2017/images/btn_main_more.png" alt="포토폴리오 상세보기"></router-link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="video-area">
                <video src="videofile.ogg" autoplay poster="">

                </video>
              </div>
              <div class="ment-text">
                <div>
                  <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt="바코드"></p>
                  <div class="title">
                    <p class="year">2017</p>
                    <dl>
                      <dt><p>HWAWOO <span>LAWFIRM</span> </p><p>WEBSITE</p></dt>
                      <dd>법무법인 화우 리뉴얼 프로젝트</dd>
                    </dl>
                    <router-link :to="{ name: 'WorkDetail', params: { id: portfolio.pk }}" class="more"><img src="/static/v2017/images/btn_main_more.png" alt="포토폴리오 상세보기"></router-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="v3">
              <div class="ment-text">
                <div>
                  <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt="바코드"></p>
                  <div class="title">
                    <p class="year">2017</p>
                    <dl>
                      <dt><p>HWAWOO <span>LAWFIRM</span> </p><p>WEBSITE</p></dt>
                      <dd>법무법인 화우 리뉴얼 프로젝트</dd>
                    </dl>
                    <router-link :to="{ name: 'WorkDetail', params: { id: portfolio.pk }}" class="more"><img src="/static/v2017/images/btn_main_more.png" alt="포토폴리오 상세보기"></router-link>
                  </div>
                </div>
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
