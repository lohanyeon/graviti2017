<template>

  <div class="intro_wrap">
    <!-- <vue-topprogress ref="topProgress" color="#29d"></vue-topprogress> -->
    <!-- intro_grid -->
    <div class="landing">
      <div class="l_01"></div>
      <div class="l_02"></div>
      <div class="l_03"></div>
      <div class="l_04"></div>
      <div class="l_05"></div>
      <div class="l_06"></div>
      <div class="l_07"></div>
      <div class="l_08"></div>
      <div class="l_09"></div>
      <div class="l_10"></div>
      <div class="l_11"></div>
      <div class="l_12"></div>
      <div class="l_13"></div>
      <div class="l_14"></div>
      <div class="l_15"></div>
      <div class="l_16"></div>
    </div>
    <!-- //intro_grid -->
    <!-- intro_grid -->
    <div class="intro_grid">
      <div class="grid-line"></div>
      <div class="grid-line line2"></div>
      <div class="grid-line line3"></div>
      <div class="grid-line line4"></div>
      <div class="grid-line line5"></div>
      <div class="grid-line line6"></div>
      <div class="grid-line line7"></div>
    </div>
    <!-- //intro_grid -->

    <!-- ment -->
    <div class="ment"><!-- class=on 을 붙여주면 보여짐 -->
      <p>DIGITAL <span><img src="/static/v2017/images/img_intro_ment.png" alt=""></span> AGENCY</p>
    </div>
    <!-- //ment -->
  </div>

</template>

<script type="text/javascript">
  import $ from 'jQuery'
  // import {TweenMax, TimelineLite, Power4} from 'gsap'
  import {TweenMax, Power4, SteppedEase} from 'gsap'
  import router from '../router/index'
  import Main from '@/components/Main'

  export default {
    name: 'introApp',
    data: function () {
      return {
      }
    },
    computed: {

    },
    methods: {
      animate () {
        // let timeline = new TimelineLite()
        let target = $('.landing')
        let height = $(window).height()
        let delay = 1
        let h = 50
        let top = (height / 2) - h
        $('.landing div').each(function (idx) {
          let time = idx % 2 === 0 ? 1 : 1.2
          if (idx === 2) {
            time = 1.4
          } else if (idx === 7) {
            time = 1.6
          }
          TweenMax.to($(this), time, {
            top: top,
            height: h,
            delay: delay,
            ease: SteppedEase.config(5)
          })

          setTimeout(function () {
            let w = 100
            let width = $(window).width()
            let left = (width / 2) - (w / 2)
            TweenMax.to(target, 0.4, {
              left: left,
              width: w,
              ease: Power4.easeOut
            })
          }, 3000)
        })
        setTimeout(function () {
          TweenMax.to(target, 0.3, {
            top: height
          })
        }, 3400)
        setTimeout(function () {
          $('.ment').fadeIn()
        }, 3800)
        setTimeout(function () {
          router.push({path: 'main', name: 'Main', component: Main})
        }, 5500)
      }
    },
    mounted () {
      this.animate()
    },
    updated () {

    },
    watch: {

    }
  }
</script>

<style>
  .intro_wrap {position:relative; width:100%; height:100%;}
  .intro_grid {position:absolute; width:100%; height:100%;}
  .grid-line {
    position:absolute; top:0; left:0; width:14.28%; height:100%;
    background:url('/static/v2017/images/bg_line.gif') right top repeat-y;
    /*background:url('/static/v2017/images/bg_intro_graviti_01.jpg') left top no-repeat;
    background-size:100% 100%;*/
  }
  .grid-line.line2 {left:14.28%; /*background-image:url('/static/v2017/images/bg_intro_graviti_02.jpg');*/}
  .grid-line.line3 {left:28.56%; /*background-image:url('/static/v2017/images/bg_intro_graviti_03.jpg');*/}
  .grid-line.line4 {left:42.84%; /*background-image:url('/static/v2017/images/bg_intro_graviti_04.jpg');*/}
  .grid-line.line5 {left:57.12%; /*background-image:url('/static/v2017/images/bg_intro_graviti_05.jpg');*/}
  .grid-line.line6 {left:71.4%; /*background-image:url('/static/v2017/images/bg_intro_graviti_06.jpg');*/}
  .grid-line.line7 {width:14.32%; left:85.68%; /*background-image:url('/static/v2017/images/bg_intro_graviti_07.jpg');*/}
  .grid-line span {display:block; width:100%; height:100%; text-align:center; background:url('/static/v2017/images/bg_line.gif') right top repeat-y;}
  .grid-line.line7 span {background:none;}
  .grid-line span img {position:relative; top:50%; margin-top:-40px;}
  .ment {display:none; position:absolute; top:50%; left:0; width:100%; height:53px; text-align:center; margin-top:-26px;}
  .ment.on {display:block;}
  .ment p {height:53px; color:#333; font-family:'Quantico'; font-weight:700; font-size:4.25em; letter-spacing:0.3em; line-height:53px;}
  .ment p span {display:inline-block; height:53px; margin:0 7%;}
  .ment p span img {vertical-align:top;}

  .landing {position:absolute; top:0; left:0; width:100%; height:100%;}
  .landing div {position:absolute; top:0; height:100%; background-color:#e9eef2;}
  .landing .l_01 {left:0; width:0.7%;}
  .landing .l_02 {left:3.5%; width:4%;}
  .landing .l_03 {left:13%; width:0.7%;}
  .landing .l_04 {left:19%; width:0.7%;}
  .landing .l_05 {left:25%; width:0.7%;}
  .landing .l_06 {left:28%; width:4%;}
  .landing .l_07 {left:35%; width:4%;}
  .landing .l_08 {left:45%; width:4%;}
  .landing .l_09 {left:53%; width:0.7%;}
  .landing .l_10 {left:55%; width:4%;}
  .landing .l_11 {left:64.5%; width:0.7%;}
  .landing .l_12 {left:70.5%; width:0.7%;}
  .landing .l_13 {left:76%; width:0.7%;}
  .landing .l_14 {left:78.5%; width:4%;}
  .landing .l_15 {left:84.5%; width:4%;}
  .landing .l_16 {right:0; width:4%;}
</style>
