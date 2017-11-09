<template id="">

  <div class="wrapper">

  		<div class="contents">
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
  		</div>

  		<footer class="footer">
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
  				<div class="fr">
  					<div class="copyright">
  						<ul>
  							<li>&nbsp;</li>
  							<li>&nbsp;</li>
  							<li><a href="#"><img src="/static/v2017/images/arrow_top.png" alt=""></a></li>
  							<li>@COPYRIGHT2017<span><a href="#"><img src="/static/v2017/images/arrow_bottom.png" alt=""></a></span></li>
  						</ul>
  					</div>
  				</div>
  			</div>
  		</footer>

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
