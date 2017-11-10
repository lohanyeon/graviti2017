<template>

  <div class="intro_wrap">
    <vue-topprogress ref="topProgress" color="#29d"></vue-topprogress>
    <!-- intro_grid -->
    <div class="intro_grid">
      <div class="grid-line"><span><img src="/static/v2017/images/intro_tit_g.png" alt="G"></span></div>
      <div class="grid-line line2"><span><img src="/static/v2017/images/intro_tit_r.png" alt="R"></span></div>
      <div class="grid-line line3"><span><img src="/static/v2017/images/intro_tit_a.png" alt="A"></span></div>
      <div class="grid-line line4"><span><img src="/static/v2017/images/intro_tit_v.png" alt="V`"></span></div>
      <div class="grid-line line5"><span><img src="/static/v2017/images/intro_tit_i.png" alt="I"></span></div>
      <div class="grid-line line6"><span><img src="/static/v2017/images/intro_tit_t.png" alt="T"></span></div>
      <div class="grid-line line7"><span><img src="/static/v2017/images/intro_tit_i.png" alt="I"></span></div>
    </div>
    <!-- //intro_grid -->

    <!-- ment -->
    <div class="ment"><!-- class=on 을 붙여주면 보여짐 -->
      <p>DIGITAL <span><img src="/static/v2017/images/img_intro_ment.png" alt=""></span> AGENCY</p>
    </div>
    <!-- //ment -->
  </div>

</template>

<script>
  import $ from 'jQuery'
  import {TweenMax, Power4} from 'gsap'
  import router from '../router/index'
  import {vueTopprogress} from 'vue-top-progress'
  // import Main from '@/components/Main'

  export default {
    name: 'introApp',
    methods: {
      hideMenu: function () {
        $('header').hide()
        $('footer').hide()
        // $('.intro_grid span').hide()
        $('.intro_grid span img').hide()
      },
      spanMove: function () {
        var time = 0.2
        var delayTime = time
        // var tm = new TimelineLite()
        var rightPosition = $(document).width()
        $('.grid-line').each(function () {
          $(this).show()
          var obj = $(this).offset()
          TweenMax.fromTo($(this), time
            , {left: rightPosition}
            , {left: obj.left, ease: Power4.easeOut}
          ).delay(delayTime)
          delayTime += 0.2
        })
      },
      typeText: function () {
        var showMent = function () {
          $('.grid-line span img').hide()
          // $('.ment').addClass('on')
          $('.ment').fadeIn(3000)
        }
        var goIndex = function () {
          console.log(router.currentRoute)
          // router.push({path: 'main', name: 'Main', component: Main})
          location.href = '/main'
        }
        $('.grid-line span img').fadeIn(3000)
        setTimeout(showMent, 3000)
        setTimeout(goIndex, 5000)
      }
    },
    created: function () {
    },
    mounted () {
      this.$refs.topProgress.start()

      setTimeout(() => {
        this.$refs.topProgress.done()
      }, 4000)

      this.hideMenu()
      this.spanMove()
      this.typeText()
    },
    components: {
      vueTopprogress
    }
  }
</script>

<style>
  .intro_wrap {width:100%; height:100%;}
  .intro_grid {position:relative; width:100%; height:100%;}
  .grid-line {
    position:absolute; top:0; left:0; width:14.28%; height:100%;
    background:url('/static/v2017/images/bg_intro_graviti_01.jpg') left top no-repeat;
    background-size:100% 100%;
  }
  .grid-line.line2 {left:14.28%; background-image:url('/static/v2017/images/bg_intro_graviti_02.jpg');}
  .grid-line.line3 {left:28.56%; background-image:url('/static/v2017/images/bg_intro_graviti_03.jpg');}
  .grid-line.line4 {left:42.84%; background-image:url('/static/v2017/images/bg_intro_graviti_04.jpg');}
  .grid-line.line5 {left:57.12%; background-image:url('/static/v2017/images/bg_intro_graviti_05.jpg');}
  .grid-line.line6 {left:71.4%; background-image:url('/static/v2017/images/bg_intro_graviti_06.jpg');}
  .grid-line.line7 {width:14.32%; left:85.68%; background-image:url('/static/v2017/images/bg_intro_graviti_07.jpg');}
  .grid-line span {display:block; width:100%; height:100%; text-align:center; background:url('/static/v2017/images/bg_line.gif') right top repeat-y;}
  .grid-line.line7 span {background:none;}
  .grid-line span img {position:relative; top:50%; margin-top:-40px;}
  .ment {display:none; position:absolute; top:50%; left:0; width:100%; height:53px; text-align:center; margin-top:-26px;}
  .ment.on {display:block;}
  .ment p {height:53px; color:#333; font-family:'Quantico'; font-weight:700; font-size:4.25em; letter-spacing:0.3em; line-height:53px;}
  .ment p span {display:inline-block; height:53px; margin:0 7%;}
  .ment p span img {vertical-align:top;}
</style>
