<template id="">

  <div class="wrapper main">

    <section class="contents">
      <!-- mainVisual -->
      <div id="mainVisual">
        <div class="visual">
          <ul>
            <li class="on"><img src="/static/v2017/images/main_visual_01-1.jpg" alt=""></li>
            <li><img src="/static/v2017/images/main_visual_02.jpg" alt=""></li>
            <li><img src="/static/v2017/images/main_visual_03.jpg" alt=""></li>
          </ul>
        </div>
        <div class="ment">
          <ul>
            <li class="on">
              <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt=""></p>
              <div class="title">
                <p class="year">2017</p>
                <dl>
                  <dt>
                    <p>ILJIN <span>DISPLAY</span> </p><p>WEBSITE</p>
                  </dt>
                  <dd>일진그룹 계열사 웹사이트 통합 프로젝트</dd>
                </dl>
                <a href="#" class="more"><img src="/static/v2017/images/btn_main_more.png" alt=""></a>
              </div>
            </li>
            <li>
              <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt=""></p>
              <div class="title">
                <p class="year">2017</p>
                <dl>
                  <dt>ILJIN <br>DISPLAY <br>WEBSITE</dt>
                  <dd>일진그룹 계열사 웹사이트 통합 프로젝트</dd>
                </dl>
                <a href="#" class="more"><img src="/static/v2017/images/btn_main_more.png" alt=""></a>
              </div>
            </li>
            <li>
              <p class="barcode"><img src="/static/v2017/images/main_barcode_01.png" alt=""></p>
              <div class="title">
                <p class="year">2017</p>
                <dl>
                  <dt>ILJIN <br>DISPLAY <br>WEBSITE</dt>
                  <dd>일진그룹 계열사 웹사이트 통합 프로젝트</dd>
                </dl>
                <a href="#" class="more"><img src="/static/v2017/images/btn_main_more.png" alt=""></a>
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

  	<!-- <div class="contents">
  			<article>
  				<section class="name_area">
  					<div class="main">
  						<div class="main_barcode">
  							<img src="/static/v2017/images/barcode.png" alt="" />
  						</div>
  						<div class="main_title">
  							<div class="text">
  								<p class="year">2016</p>
  								<p class="project_name_eng">ILJIN<br /> SUBSIDIARY<br /> WEBSITE</p>
  								<p class="project_name_kor">일진계열사 웹사이트 통합 프로젝트</p>
  							</div>
  							<div class="detail">
  								<router-link v-bind:to="{ name: 'WorkDetail' }" onclick="s.gnb();"><img src="/static/v2017/images/btn_more.png" alt="" /></router-link>
  							</div>
  						</div>
  						<div class="main_title">
  							<div class="text">
  								<p class="year">2016</p>
  								<p class="project_name_eng">SEAH<br />AMERICA<br />WEBSITE</p>
  								<p class="project_name_kor">세아계열사  웹사이트 통합 프로젝트</p>
  							</div>
  							<div class="detail">
  								<router-link v-bind:to="{ name: 'WorkDetail' }" onclick="s.gnb();"><img src="/static/v2017/images/btn_more.png" alt="" /></router-link>
  							</div>
  						</div>
  						<div class="main_title on">
  							<div class="text">
  								<p class="year">2016</p>
  								<p class="project_name_eng">LAW FIRM<br />YOON & YANG<br />WEBSITE</p>
  								<p class="project_name_kor">법무번인 화우 웹사이트 통합 프로젝트</p>
  							</div>
  							<div class="detail">
  								<router-link v-bind:to="{ name: 'WorkDetail' }" onclick="s.gnb();"><img src="/static/v2017/images/btn_more.png" alt="" /></router-link>
  							</div>
  						</div>
  					</div>
  				</section>
  				<section class="bg" id="slider">
  					<ul>
  						<li><img src="/static/v2017/images/main_visual03.jpg" alt=""></li>
  						<li><img src="/static/v2017/images/main_visual02.jpg" alt=""></li>
  						<li><img src="/static/v2017/images/main_visual01.jpg" alt=""></li>
  					</ul>
  				</section>
  			</article>

        <ul id="v-list" v-if="hasResult">
          <li v-for="post in posts" v-bind:key="post.pk">{{post.fields.project_kor_name}}</li>
        </ul>
  	</div> -->
  </div>

</template>

<script type="text/javascript">
  export default {
    name: 'mainApp',
    data: function () {
      return {
        posts: []
      }
    },
    computed: {
      hasResult: function () {
        return this.posts.length > 0
      }
    },
    methods: {
      listPortfolio () {
        // const baseURI = '/apis'
        const baseURI = 'http://new.graviti.co.kr'
        this.$http.get(`${baseURI}/portfolios/api/portfolio/`)
        // this.$http.get(`${baseURI}`)
          .then((result) => {
            console.log(result.data)
            this.posts = result.data
          })
      }
    },
    created: function () {
      this.listPortfolio()
      console.log('created')
    }
  }
</script>
